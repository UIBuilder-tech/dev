import { useEffect, useState } from "react";
import { PencilIcon, UserPlusIcon, XIcon, Power, Loader } from "lucide-react";
import Footer from "../components/Footer/Footer";
import { toast } from "react-toastify";
import heritage1 from "../assets/heritage1.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PersonalDetails {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface FamilyMember {
  relation: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  createAccount: boolean;
}

export default function Profile() {
  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [IsFormValidate, setIsFormValidate] = useState<boolean>(false)
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetails | null>(null);
  const [address, setAddress] = useState<Address>({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });
  const [isBillingSame, setIsBillingSame] = useState(true);
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const [newFamilyMember, setNewFamilyMember] = useState<FamilyMember>({
    relation: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    createAccount: false,
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password update logic here
    const payload = {
      email: user?.email,
      newPassword: passwords?.new,
      confirmPassword: passwords?.confirm,
    };
    fetch(`${BASE_URL}/api/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp?.json())
      .then((response) => {
        if (response?.success) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later.");
        console.error(error);
        // sessionStorage.removeItem('accessToken');
      })
      .finally(() => {
        // setIsDisable(false);
        setIsPasswordModalOpen(false);
        setPasswords({ old: "", new: "", confirm: "" });
      });
  };

  const handleFamilyMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle family member addition logic here
    const payload = {
      relName: newFamilyMember?.relation,
      memFname: newFamilyMember?.firstName,
      memLname: newFamilyMember?.lastName,
      memEmailAddr: newFamilyMember?.email,
      memMobile: newFamilyMember?.mobile,
      memCreateAcc: newFamilyMember?.createAccount,
      memDOB: newFamilyMember?.dateOfBirth,
    };
    fetch(`${BASE_URL}/api/profile/add-member`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp?.json())
      .then((response) => {
        if (response?.success) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later.");
        console.error(error);
        // sessionStorage.removeItem('accessToken');
      })
      .finally(() => {
        // setIsDisable(false);
        setIsFamilyModalOpen(false);
        setNewFamilyMember({
          relation: "",
          dateOfBirth: "",
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          createAccount: false,
        });
      });
  };

  useEffect(() => {
    fetch(`${BASE_URL}/api/contact?email=${user?.email}`)
      .then((resp) => resp?.json())
      .then((response) => {
        if (response) {
          setPersonalDetails({
            FirstName: response?.firstName,
            LastName: response?.lastName,
            Email: response?.email,
            Phone: response?.mobile,
          });
          setAddress({
            ...address,
            street: response?.billingStreet,
            city: response?.billingCity,
            state: response?.billingState,
            zipCode: response?.billingPostalCode,
          });
        } else {
          console.error("error fetching response");
        }
        console.log("RESPONSE__>", response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setIsDisable(false);
      });
  }, []);

  const onPersonalDetailsSubmit = () => {
    const payload = {
      Id: user?.userId,
      firstName: personalDetails?.FirstName,
      lastName: personalDetails?.LastName,
      mobile: personalDetails?.Phone,
    };
    setIsFormValidate(true)
    fetch(`${BASE_URL}/api/profile/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp?.json())
      .then((response) => {
        if (response?.success) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later.");
        console.error(error);
        // sessionStorage.removeItem('accessToken');
      })
      .finally(() => {
        setIsFormValidate(false);
        setIsEditingPersonal(false);
      });
  };

  const onAddressSubmit = () => {
    const payload = {
      contactId: user?.userId,
      billingCity: address?.city,
      billingCountry: address?.country,
      billingPostalCode: address?.zipCode,
      billingState: address?.state,
      billingStreet: address?.street,
      ShippingCity: address?.city,
      ShippingCountry: address?.country,
      ShippingPostalCode: address?.zipCode,
      ShippingState: address?.state,
      ShippingStreet: address?.street,
    };
    setIsFormValidate(true)
    fetch(`${BASE_URL}/api/profile/address`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => resp?.json())
      .then((response) => {
        if (response?.success) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later.");
        console.error(error);
        // sessionStorage.removeItem('accessToken');
      })
      .finally(() => {
        setIsFormValidate(false)
        setIsEditingAddress(false);
      });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((v: PersonalDetails) => ({ ...v, [name]: value }));
  };

  return (
    <div
      className="min-h-screen  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heritage1})` }}
    >
      <div className="min-h-[200vh] md:min-h-[150vh]   absolute inset-0 bg-black/50"></div>

      <div className="relative z-[9] max-w-4xl mx-auto p-6 pt-48 space-y-8 max-sm:space-y-6 max-sm:py-[80px]">
        {/* Personal Details Section */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-5xl max-sm:text-4xl text-white">My Profile</h2>
        </div>
        <div className="bg-white rounded-lg p-8 max-sm:p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between md:items-center mb-8 max-sm:flex-col">
            <p className="text-2xl md:text-3xl font-semibold text-gray-700">
              Personal Details
            </p>
            <div className="flex gap-4 max-sm:gap-3 max-sm:justify-between max-sm:pt-4">
              <button
                className="flex items-center gap-2 text-[#1572E8] max-sm:text-sm hover:text-[#1572E8]/90 transition-colors duration-200"
                onClick={() => setIsEditingPersonal(!isEditingPersonal)}
              >
                <PencilIcon className="w-5 h-5 md:mr-2" />
                Edit Info
              </button>
              <button
                className="flex items-center px-4 max-sm:px-3 max-sm:text-sm py-2 border-2 border-[#E67E22] rounded-full text-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-colors duration-200"
                onClick={() => setIsFamilyModalOpen(true)}
              >
                <UserPlusIcon className="w-5 h-5 mr-2" />
                Add Member
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isEditingPersonal ? (
              <>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    value={personalDetails?.FirstName}
                    onChange={changeHandler}
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    value={personalDetails?.LastName}
                    onChange={changeHandler}
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={personalDetails?.Email}
                    disabled
                    className="w-full p-3 border-2 rounded-lg bg-gray-100 text-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    value={personalDetails?.Phone}
                    onChange={changeHandler}
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="md:col-span-2 flex gap-4 mt-4">
                  <button
              disabled={IsFormValidate}
                    onClick={() => {
                      onPersonalDetailsSubmit();
                    }}
                    className="px-6 py-3 bg-[#E67E22] text-white rounded-full hover:bg-[#E67E22]/90 transition-colors duration-200"
                  >
                    {IsFormValidate ? (
        <motion.div
          className='flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Loader className='w-5 h-5 animate-spin text-white' />
          <span className='ml-2'>Loading...</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Save
        </motion.div>
      )} 
                  </button>
                  <button
                    onClick={() => setIsEditingPersonal(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              personalDetails && (
                <>
                  <div className="space-y-3">
                    <label className="block text-sm text-gray-500">
                      First Name
                    </label>
                    <p className="text-xl max-sm:text-lg text-gray-800">
                      {personalDetails.FirstName}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm text-gray-500">
                      Last Name
                    </label>
                    <p className="text-xl max-sm:text-lg text-gray-800">
                      {personalDetails.LastName}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm text-gray-500">
                      Email Address
                    </label>
                    <p className="text-xl max-sm:text-lg text-gray-800">
                      {personalDetails.Email}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm text-gray-500">
                      Mobile Number
                    </label>
                    <p className="text-xl max-sm:text-lg text-gray-800">
                      {personalDetails.Phone}
                    </p>
                  </div>
                </>
              )
            )}
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg p-8 max-sm:p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-700">
              Home Address
            </p>
            {!isEditingAddress && (
              <button
                className="flex items-center text-[#1572E8] max-sm:text-sm hover:text-[#1572E8]/90 transition-colors duration-200"
                onClick={() => setIsEditingAddress(true)}
              >
                <PencilIcon className="w-5 h-5 mr-2" />
                Edit Address
              </button>
            )}
          </div>

          {isEditingAddress ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={address.street}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        street: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, city: e.target.value }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    State
                  </label>
                  <select
                    value={address.state}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, state: e.target.value }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  >
                    <option value="">Select</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    value={address.zipCode}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        zipCode: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Country
                  </label>
                  <input
                    type="text"
                    value={address.country}
                    disabled
                    className="w-full p-3 border-2 rounded-lg bg-gray-100 text-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="billing"
                  checked={isBillingSame}
                  onChange={(e) => setIsBillingSame(e.target.checked)}
                  className="rounded border-gray-300 text-[#1572E8] focus:ring-[#1572E8]"
                />
                <label htmlFor="billing" className="text-gray-700">
                  Billing Address is same as Home Address
                </label>
              </div>
              <div className="flex gap-4">
                <button
                disabled={IsFormValidate}
                  onClick={() => onAddressSubmit()}
                  className="px-6 py-3 bg-[#E67E22] text-white rounded-full hover:bg-[#E67E22]/90 transition-colors duration-200"
                >
                  {IsFormValidate ? (
        <motion.div
          className='flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Loader className='w-5 h-5 animate-spin text-white' />
          <span className='ml-2'>Loading...</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Save
        </motion.div>
      )} 
                </button>
                <button
                  onClick={() => setIsEditingAddress(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-500">
                  Street Address
                </label>
                <p className="text-xl max-sm:text-lg text-gray-800">
                  {address.street || "Not provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">City</label>
                <p className="text-xl max-sm:text-lg text-gray-800">
                  {address.city || "Not provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">State</label>
                <p className="text-xl max-sm:text-lg text-gray-800">
                  {address.state || "Not provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Zip Code</label>
                <p className="text-xl max-sm:text-lg text-gray-800">
                  {address.zipCode || "Not provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Country</label>
                <p className="text-xl max-sm:text-lg text-gray-800">
                  {address.country}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Password Change and Logout Buttons */}
        <div className="flex justify-between md:py-6 max-sm:pt-4">
          {JSON.parse(sessionStorage.getItem("user") || "") ? (
            <div
              className="flex flex-row gap-2 border-2 border-secondary px-6 py-3 rounded-full text-white cursor-pointer max-sm:text-sm transition-colors duration-200 bg-secondary"
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/";
              }}
            >
              <Link to="javascript:void(0)" className={`test-white`}>
                <Power className="h-5 w-5" />
              </Link>
              <p>Logout</p>
            </div>
          ) : null}
          <button
            onClick={() => setIsPasswordModalOpen(true)}
            className="px-6 py-3 border-2 border-[#1572E8] max-sm:text-sm rounded-full bg-[#1572E8] text-white transition-colors duration-200"
          >
            Change Password
          </button>
        </div>
      </div>
      <Footer />

      {/* Family Member Modal */}
      {isFamilyModalOpen && (
        <div className="fixed z-[9999] inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                Family Member Details
              </p>
              <button
                onClick={() => setIsFamilyModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleFamilyMemberSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Relation
                  </label>
                  <select
                    value={newFamilyMember.relation}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        relation: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  >
                    <option value="">Select</option>
                    <option value="Wife">Wife</option>
                    <option value="Husband">Husband</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={newFamilyMember.dateOfBirth}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={newFamilyMember.firstName}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={newFamilyMember.lastName}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newFamilyMember.email}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(999) 999-9999"
                    value={newFamilyMember.mobile}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        mobile: e.target.value,
                      }))
                    }
                    className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Create account for the member
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={newFamilyMember.createAccount}
                      onChange={() =>
                        setNewFamilyMember((prev) => ({
                          ...prev,
                          createAccount: true,
                        }))
                      }
                      className="text-[#1572E8] focus:ring-[#1572E8]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={!newFamilyMember.createAccount}
                      onChange={() =>
                        setNewFamilyMember((prev) => ({
                          ...prev,
                          createAccount: false,
                        }))
                      }
                      className="text-[#1572E8] focus:ring-[#1572E8]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#E67E22] text-white rounded-full hover:bg-[#E67E22]/90 transition-colors duration-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsFamilyModalOpen(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed z-[9999] inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                Change Password
              </p>
              <button
                onClick={() => setIsPasswordModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Old Password
                </label>
                <input
                  type="password"
                  value={passwords.old}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, old: e.target.value }))
                  }
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, new: e.target.value }))
                  }
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Password must be 6 to 20 characters long with at least one
                  digit, one uppercase and one lowercase letter.
                </p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      confirm: e.target.value,
                    }))
                  }
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#E67E22] text-white rounded-full hover:bg-[#E67E22]/90 transition-colors duration-200"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
