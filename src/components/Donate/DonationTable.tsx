import { useState, useMemo, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Trash2, Info } from "lucide-react";
import AmountInput from "./AmountInput";
import FilterSearch from "./FilterSearch";
import { DonationItem, DonationSubcategory } from "./types";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useLocation } from "react-router-dom";
import { UseDataContext } from "../context/DataContext";
import DonationSkeleton from "./DonationSkeleton";

interface Props {
  setTotalDonationAmount: (amount: number) => void;
  setSelectedProjects: (projects: SelectedProject[]) => void;
  setBaseDonationId: (id: string) => void;
}

interface SelectedProject {
  projectName: string;
  unitAmount: number;
  quantity: number;
  remark: string;
}

const generateDonationId = (
  selectedProjects: SelectedProject[],
  donationData: any
) => {
  const currentYear = new Date().getFullYear();
  const projectIds = donationData
    .flatMap((category) => [
      ...(category.items || []),
      ...(category.subcategories?.flatMap((sub) => sub.items) || []),
    ])
    .filter((item) =>
      selectedProjects.some(
        (project) => project.projectName === item.name && project.unitAmount > 0
      )
    )
    .map((item) => item.id)
    .sort()
    .join("-");

  return projectIds
    ? `${currentYear}-Donation-${projectIds.toUpperCase()}`
    : "";
};

const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function DonationTable({
  setTotalDonationAmount,
  setSelectedProjects,
  setBaseDonationId,
}: Props) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  // const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>(
    []
  );
  const [amounts, setAmounts] = useState<Record<string, number>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [remarks, setRemarks] = useState<Record<string, string>>({});
  const [useDefaultDonation, setUseDefaultDonation] = useState(false);
  const [donationData, setDonationData] = useState<DonationSubcategory[]>([]);
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const { data, setData } = UseDataContext();
  const isMobile = windowWidth < 700; // md breakpoint
  const isTablet = windowWidth >= 700 && windowWidth <= 1099; // md breakpoint
  const [loading, setLoading] = useState(true);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories((prev) =>
      prev.includes(subcategoryId)
        ? prev.filter((id) => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const categoryRefs = useRef<Record<string, HTMLDivElement>>({});
  const itemRefs = useRef<Record<string, HTMLTableRowElement>>({});
  const initialScrollDone = useRef(false);

  const scrollToElement = (element: HTMLElement | null) => {
    if (!element) return;

    const offset = isMobile ? 100 : 300; // Adjust this value based on your header height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // if (initialScrollDone.current) return;

      const hash = window.location.hash.split("#")[2];
      if (!hash) return;

      let targetCategory = donationData.find((cat: any) => cat.id === hash);
      let targetItem;

      if (!targetCategory) {
        for (const category of donationData) {
          const item = category.items?.find((item) => item.id === hash);
          if (item) {
            targetCategory = category;
            targetItem = item;
            break;
          }
        }
      }

      if (targetCategory) {
        setExpandedCategories((prev) =>
          prev.includes(targetCategory.id) ? prev : [...prev, targetCategory.id]
        );
        window.scrollTo(window.scrollX, window.scrollY - 1);

        // Wait for category expansion and DOM update
        setTimeout(() => {
          if (targetItem) {
            scrollToElement(itemRefs.current[hash]);
          } else {
            scrollToElement(categoryRefs.current[targetCategory.id]);
          }
          initialScrollDone.current = true;
        }, 300); // Increased timeout for DOM updates
      }
    };

    handleScroll();
    window.addEventListener("hashchange", () => {
      initialScrollDone.current = false;
      handleScroll();
    });

    return () => window.removeEventListener("hashchange", handleScroll);
  }, [donationData, location.hash]);

  // Update selected projects whenever relevant state changes
  useEffect(() => {
    const selectedProjects: SelectedProject[] = [];

    donationData.forEach((category) => {
      const processItems = (items: DonationItem[]) => {
        items.forEach((item) => {
          const amount = amounts[item.id] || 0;
          const quantity = item.hasQuantity ? quantities[item.id] || 0 : 1;

          if (amount > 0) {
            selectedProjects.push({
              projectName: item.name,
              unitAmount: amount,
              quantity: quantity,
              remark: remarks[item.id] || "",
            });
          }
        });
      };

      if (category.items) processItems(category.items);
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          if (subcategory.items) processItems(subcategory.items);
        });
      }
    });

    const baseDonationId = generateDonationId(selectedProjects, donationData);
    setSelectedProjects(selectedProjects);
    setBaseDonationId(baseDonationId);
  }, [
    donationData,
    amounts,
    quantities,
    remarks,
    setSelectedProjects,
    setBaseDonationId,
  ]);

  const updateAmount = (itemId: string, value: number) => {
    setAmounts((prev) => ({ ...prev, [itemId]: value }));
  };

  const updateQuantity = (itemId: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [itemId]: value }));
  };

  const updateRemarks = (itemId: string, value: string) => {
    setRemarks((prev) => ({ ...prev, [itemId]: value }));
  };

  const removeItem = (itemId: string) => {
    setAmounts((prev) => ({ ...prev, [itemId]: 0 }));
    setQuantities((prev) => ({ ...prev, [itemId]: 0 }));
    setRemarks((prev) => ({ ...prev, [itemId]: "" }));
  };

  const handleDefaultDonationChange = (checked: boolean) => {
    setUseDefaultDonation(checked);
    if (checked) {
      const defaultAmounts: Record<string, number> = {};
      const defaultQuantities: Record<string, number> = {};

      donationData.forEach((category) => {
        const processItems = (items: DonationItem[]) => {
          items.forEach((item) => {
            defaultAmounts[item.id] = item.defaultAmount || item.amount;
            defaultQuantities[item.id] = item.hasQuantity ? 1 : 1; // Change this line
          });
        };

        if (category.items) processItems(category.items);
        if (category.subcategories) {
          category.subcategories.forEach((subcategory) => {
            if (subcategory.items) processItems(subcategory.items);
          });
        }
      });

      setAmounts(defaultAmounts);
      setQuantities(defaultQuantities);
    } else {
      setAmounts({});
      setQuantities({});
    }
  };

  // Calculate total amounts across all categories
  // Update total amount calculation to use the same logic
  const totalAmount = useMemo(() => {
    return donationData.reduce((categoryTotal, category) => {
      const categoryItemsTotal = category.items
        ? category.items.reduce((itemTotal, item) => {
            const itemAmount = useDefaultDonation
              ? amounts[item.id] ?? item.amount
              : amounts[item.id] ?? 0;
            const itemQuantity = item.hasQuantity
              ? quantities[item.id] ?? 0
              : 1;
            return itemTotal + itemAmount * itemQuantity;
          }, 0)
        : 0;

      const subcategoriesTotal = category.subcategories
        ? category.subcategories.reduce((subcategoryTotal, subcategory) => {
            const subcategoryItemsTotal = subcategory.items
              ? subcategory.items.reduce((itemTotal, item) => {
                  const itemAmount = useDefaultDonation
                    ? amounts[item.id] ?? item.amount
                    : amounts[item.id] ?? 0;
                  const itemQuantity = item.hasQuantity
                    ? quantities[item.id] ?? 0
                    : 1;
                  return itemTotal + itemAmount * itemQuantity;
                }, 0)
              : 0;
            return subcategoryTotal + subcategoryItemsTotal;
          }, 0)
        : 0;

      return categoryTotal + categoryItemsTotal + subcategoriesTotal;
    }, 0);
  }, [amounts, quantities, donationData, useDefaultDonation]);

  useEffect(() => {
    setTotalDonationAmount(totalAmount);
  }, [totalAmount]);

  const renderDonationItems = (items: DonationItem[], categoryName: string) => (
    <tbody className="">
      {items.map((item) => {
        const itemAmount = useDefaultDonation
          ? amounts[item.id] ?? item.amount
          : amounts[item.id] ?? 0;
        const itemQuantity = item.hasQuantity ? quantities[item.id] ?? 0 : 1; // Change this line
        const totalItemAmount = itemAmount * itemQuantity;
        const isTrashActive = totalItemAmount > 0;

        return isMobile || isTablet ? (
          <tr
            aria-rowspan={3}
            key={item.id}
            className="border-t border-gray-300"
          >
            <tr aria-rowspan={2} className="flex flex-col">
              <td
                className="py-4 px-2 w-full max-sm:text-sm"
                style={{ wordWrap: "break-word" }}
              >
                {item.name}
                {item?.id === "sevas" && (
                  <>
                    <a
                      target="blank"
                      href="https://chitrapurmath.net/site/rates"
                      className="text-blue-500 cursor-pointer underline font-normal text-xs pl-2"
                    >
                      Know more
                    </a>
                  </>
                )}
              </td>
              <div className="flex flex-row">
                <tr className=" flex flex-row">
                  <td className="py-2">
                    <AmountInput
                      value={itemAmount}
                      onChange={(value) => updateAmount(item.id, value)}
                    />
                  </td>
                  <td className="py-2 w-full text-center flex ">
                    {item.hasQuantity ? (
                      <span className="flex flex-row items-center">
                        <span className="px-2 text-gray-500">x</span>
                        <input
                          type="number"
                          min="0"
                          value={itemQuantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          placeholder="0"
                          className="w-full text-center border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </span>
                    ) : (
                      <span className="flex flex-row items-center">
                        <span className="px-2 text-gray-500">x</span>
                        <input
                          type="number"
                          value={1}
                          readOnly
                          className="w-full text-center border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </span>
                    )}
                  </td>
                </tr>
                <tr className="py-2 px-2 text-center w-full flex flex-row items-center">
                  <span className="px-2 font-bold text-secondary">
                    {/* <ArrowBigRightIcon /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "1.5em", height: "1.5em" }}
                    >
                      {/* Equals */}
                      <line x1="4" y1="8" x2="16" y2="8" />
                      <line x1="4" y1="12" x2="16" y2="12" />
                      {/* Arrow */}
                      <polyline points="16 6, 20 10, 16 14" />
                    </svg>
                  </span>
                  <AmountInput
                    value={Number(totalItemAmount.toFixed(2))}
                    readOnly={true}
                  />
                </tr>
              </div>
            </tr>
            <tr className="py-2 px-2 flex flex-row items-center justify-center gap-2">
              <input
                type="text"
                placeholder="Write your remarks here"
                value={remarks[item.id] || ""}
                onChange={(e) => updateRemarks(item.id, e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 italic font-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{ fontWeight: "lighter" }}
              />
              <button
                onClick={() => removeItem(item.id)}
                className={`p-1 ${
                  isTrashActive
                    ? "text-black hover:text-red-500"
                    : "text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isTrashActive}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </tr>
          </tr>
        ) : (
          <tr
            key={item.id}
            ref={(el) => {
              if (el) itemRefs.current[item.id] = el;
            }}
            className="border-t border-gray-300"
          >
            <td className="relative flex items-center">
              <div className="">
                <span
                  className="py-2 px-2 max-w-[50%]"
                  style={{ wordWrap: "break-word" }}
                >
                  {item.name}
                </span>
                {item?.id === "sevas" && (
                  <>
                    <a
                      href="https://chitrapurmath.net/site/rates"
                      target="blank"
                      className="text-blue-500 cursor-pointer underline font-normal text-xs"
                    >
                      Know more
                    </a>
                  </>
                )}
              </div>
              {item.description && (
                <div className="inline-block ml-2  h-full relative group">
                  <Info className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer my-auto" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-white text-gray-500 text-sm rounded-[20px] p-4 hidden group-hover:block transition-opacity z-10 backdrop-blur-[50px]">
                    {item.description}
                  </div>
                </div>
              )}
            </td>
            <td className="py-2 px-2">
              <AmountInput
                value={itemAmount}
                onChange={(value) => updateAmount(item.id, value)}
              />
            </td>
            <td className="py-2 px-2 text-center flex mx-8">
              {item.hasQuantity ? (
                <input
                  type="number"
                  min="0"
                  value={itemQuantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  placeholder="0"
                  className="w-full text-center border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              ) : (
                <td className="py-2 px-2 text-center w-full text-[#9e9e9e]">
                  -
                </td>
              )}
            </td>
            <td className="py-2 px-2 text-center">
              <AmountInput
                value={Number(totalItemAmount.toFixed(2))}
                readOnly={true}
              />
            </td>
            <td className="py-2 px-2 flex flex-row items-center justify-center gap-2">
              <input
                type="text"
                placeholder="Write your remarks here"
                value={remarks[item.id] || ""}
                onChange={(e) => updateRemarks(item.id, e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 italic font-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{ fontWeight: "lighter" }}
              />
              <button
                onClick={() => removeItem(item.id)}
                className={`p-1 ${
                  isTrashActive
                    ? "text-black hover:text-red-500"
                    : "text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isTrashActive}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
  useEffect(() => {
    const api = async () => {
      setData((v) => ({ ...v, isLoading: true }));
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `${AdminPanelUrl}/donates?pagination[pageSize]=100&sort[id]=desc`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result?.data) {
            const uniqueCategories = [
              ...new Set(result.data.map((item) => item.category)),
            ];
            const finalData = uniqueCategories.map((item) => {
              return {
                id: (item as string).toLowerCase().replace(/ /g, "-"),
                name: item,
                items: result.data
                  .filter((data: any) => data.category === item)
                  .map((data) => ({
                    id: data.donationId,
                    name: data.name,
                    amount: data.amount,
                    description: data.description,
                    hasQuantity: data.hasQuantity,
                  })),
              };
            });
            setExpandedCategories([
              finalData.length > 0 ? finalData[0].id : "",
            ]);
            setDonationData(finalData);
          }
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setData((v) => ({ ...v, isLoading: false }));
          setLoading(false);
        });
    };
    api();
  }, []);
  if (data?.isLoading || loading) {
    return <DonationSkeleton />;
  }
  return (
    <div className="bg-cream rounded-lg p-5 md:px-16 mx-auto py-16">
      <div className="mb-3 md:mb-6 flex flex-row items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-display text-gray-900 desktop-1900:text-5xl mb-3 md:mb-6">
          Donate
        </h2>
        <FilterSearch onDefaultDonationChange={handleDefaultDonationChange} />
      </div>

      <div className="space-y-4">
        {donationData.map((category) => (
          <div
            key={category.id}
            className="border-b border-gray-300"
            ref={(el) => {
              if (el) categoryRefs.current[category.id] = el;
            }}
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-semibold text-lg ">
                {category.name === "WOMEN EMPOWERMENT"
                  ? "WOMEN'S EMPOWERMENT"
                  : category.name}
              </span>
              {expandedCategories.includes(category.id) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {expandedCategories.includes(category.id) && (
              <div className="pb-4">
                <table className="w-full table-fixed border-collapse">
                  {category.items && category.items?.length > 0 ? (
                    <thead>
                      <tr className="max-sm:hidden text-sm text-gray-500 border-b border-gray-300">
                        <th className="text-left py-2 px-2 w-1/2 font-normal">
                          Donation Category
                        </th>
                        <th className="text-left py-2 px-2 w-1/5 font-normal text-center">
                          Amount
                        </th>
                        <th className="text-center py-2 px-2 w-[175px] font-normal text-center">
                          Quantity
                        </th>
                        <th className="text-left py-2 px-2 w-1/5 font-normal text-center">
                          Total
                        </th>
                        <th className="text-left py-2 px-2 w-1/3 font-normal">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                  ) : (
                    <thead>
                      <tr className="w-full text-center text-sm text-gray-500">
                        - Currently there no projects in this category -
                      </tr>
                    </thead>
                  )}
                  {category.items &&
                    renderDonationItems(category.items, category.name)}
                  {category.subcategories?.map((subcategory) => (
                    <tbody
                      key={subcategory.id}
                      className="border-t border-gray-800"
                    >
                      <tr>
                        <td colSpan={6}>
                          <button
                            onClick={() => toggleSubcategory(subcategory.id)}
                            className="w-full flex items-center justify-between py-4 text-left pl-4"
                          >
                            <span className="font-medium">
                              {subcategory.name}
                            </span>
                            {expandedSubcategories.includes(subcategory.id) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedSubcategories.includes(subcategory.id) &&
                        renderDonationItems(subcategory.items, category.name)}
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Total Amount Section */}
      <div className="p-4 float-right md:w-1/2">
        <div className="flex flex-row items-center justify-end w-full">
          <p className="text-left py-2 px-2 font-normal">
            Total Donation Amount
          </p>
          <div className="flex items-center gap-2">
            <AmountInput
              value={Number(totalAmount.toFixed(2))}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
