import { Mail } from "lucide-react";
import grantsPointer from "../../assets/grantsPointer.svg";
import { useEffect, useState } from "react";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
interface GrantListItem {
  text: string;
}

interface GrantList {
  grantsTitle: string;
  list: GrantListItem[];
}

interface PageDataType {
  grant_lists: GrantList[];
  grantsDescription?: string;
  grantsTitle?: string;
}

export default function GrantsSection() {
  const [PageData, setPageData] = useState<PageDataType | null>(null);
  useEffect(() => {
    const api = async () => {
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `${AdminPanelUrl}/project-page?populate[grant_lists][populate]=*`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result?.data) {
            if (result?.data?.grant_lists) {
              setPageData((v) => ({
                ...v,
                grant_lists: result.data.grant_lists,
                grantsTitle: result?.data?.grantsTitle,
                grantsDescription: result?.data?.grantsDescription,
              }));
            }
          }
        })
        .catch((error) => console.log("error", error));
    };
    api();
  }, []);
  return (
    <>
      {PageData && (
        <div className="max-w-7xl desktop-1900:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
          <h1 className="text-center text-3xl sm:text-4xl text-primary mb-4 desktop-1900:text-5xl">
            {PageData.grantsTitle}
          </h1>

          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto desktop-1200:text-xs desktop-1500:text-sm desktop-1900:text-lg">
            {PageData.grantsDescription}{" "}
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 desktop-1200:gap-16 desktop-1900:gap-24">
              {PageData?.grant_lists &&
                PageData.grant_lists.map((item, index) => (
                  <div key={`grant_${index}`}>
                    <p className="text-xl desktop-1500:text-xl desktop-1200:text-[16px] font-semibold mb-6">
                      {item.title}
                    </p>
                    <div className="space-y-6 py-4">
                      {item?.list &&
                        item.list.map((listItem: GrantListItem, i: number) => (
                          <div className="flex gap-3" key={`grant_list_${i}`}>
                            <img
                              src={grantsPointer}
                              className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                            />
                            <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                              {listItem.text}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
            <div className="absolute top-[2.75rem] left-0 right-0 h-0.5 bg-[#E67E22]"></div>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-2 mt-8 sm:mt-12 text-sm desktop-1200:text-sm sm:text-base desktop-1900:text-lg text-gray-600">
            <Mail className="w-5 h-5 text-[#E67E22]" />
            <span>Please email all request for grants to </span>
            <a
              href="mailto:Grants@chfusa.org"
              className="text-primary underline hover:underline"
            >
              Grants@chfusa.org
            </a>
          </div>
        </div>
      )}
    </>
  );
}
