import { useEffect, useState } from "react";
import { PencilIcon, UserPlusIcon, XIcon } from "lucide-react";
import { UseDataContext } from "../components/context/DataContext";

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
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const { data } = UseDataContext()
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails | null>(null);
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
    setIsPasswordModalOpen(false);
  };

  const handleFamilyMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle family member addition logic here
    setIsFamilyModalOpen(false);
  };

  useEffect(() => {
    console.log('====================================');
    console.log(data.userData);
    console.log('====================================');
    setPersonalDetails(data.userData)
  }, [data.userData])

  const changeHandler = (e) => {
    const { name, value } = e.target
    setPersonalDetails((v:PersonalDetails) => ({ ...v, [name]: value }))
  }
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Personal Details Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Personal Details</h2>
          <div className="flex gap-4">
            <button
              className="flex items-center text-[#1572E8] hover:text-[#1572E8]/90"
              onClick={() => setIsEditingPersonal(!isEditingPersonal)}
            >
              <PencilIcon className="w-4 h-4 mr-2" />
              Edit Info
            </button>
            <button
              className="flex items-center px-4 py-2 border border-[#E67E22] text-[#E67E22] rounded hover:bg-[#E67E22] hover:text-white"
              onClick={() => setIsFamilyModalOpen(true)}
            >
              <UserPlusIcon className="w-4 h-4 mr-2" />
              Add Member
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isEditingPersonal ? (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value={personalDetails?.FirstName}
                  onChange={changeHandler}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value={personalDetails?.LastName}
                  onChange={changeHandler}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={personalDetails?.Email}
                  onChange={changeHandler}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={personalDetails?.Phone}
                  onChange={changeHandler}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button
                  onClick={() => setIsEditingPersonal(false)}
                  className="px-4 py-2 bg-[#E67E22] text-white rounded hover:bg-[#E67E22]/90"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingPersonal(false)}
                  className="px-4 py-2 bg-[#F4F5F7] rounded hover:bg-[#F4F5F7]/90"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            personalDetails &&
            <>
              {/* {JSON.stringify(personalDetails)} */}
              <div className="space-y-2">
                <label className="block text-sm text-gray-500">
                  First Name
                </label>
                <p className="text-lg">{personalDetails.FirstName}</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-500">Last Name</label>
                <p className="text-lg">{personalDetails.LastName}</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-500">
                  Email Address
                </label>
                <p className="text-lg">{personalDetails.Email}</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-500">
                  Mobile Number
                </label>
                <p className="text-lg">{personalDetails.Phone}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Home Address</h2>
          {!isEditingAddress && (
            <button
              className="flex items-center text-[#1572E8] hover:text-[#1572E8]/90"
              onClick={() => setIsEditingAddress(true)}
            >
              <PencilIcon className="w-4 h-4 mr-2" />
              Edit Address
            </button>
          )}
        </div>

        {isEditingAddress ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Street Address
                </label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, street: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, city: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <select
                  value={address.state}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, state: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                >
                  <option value="">Select</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                  <option value="tx">Texas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Zip Code</label>
                <input
                  type="text"
                  value={address.zipCode}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, zipCode: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  value={address.country}
                  disabled
                  className="w-full p-2 border rounded bg-gray-100"
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
              <label htmlFor="billing">
                Billing Address is same as Home Address
              </label>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsEditingAddress(false)}
                className="px-4 py-2 bg-[#E67E22] text-white rounded hover:bg-[#E67E22]/90"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditingAddress(false)}
                className="px-4 py-2 bg-[#F4F5F7] rounded hover:bg-[#F4F5F7]/90"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500">
                Street Address
              </label>
              <p className="text-lg">{address.street || "Not provided"}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500">City</label>
              <p className="text-lg">{address.city || "Not provided"}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500">State</label>
              <p className="text-lg">{address.state || "Not provided"}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500">Zip Code</label>
              <p className="text-lg">{address.zipCode || "Not provided"}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500">Country</label>
              <p className="text-lg">{address.country}</p>
            </div>
          </div>
        )}
      </div>

      {/* Password Change Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsPasswordModalOpen(true)}
          className="px-4 py-2 border border-[#1572E8] text-[#1572E8] rounded hover:bg-[#1572E8] hover:text-white"
        >
          Change Password
        </button>
      </div>

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Change Password</h2>
              <button onClick={() => setIsPasswordModalOpen(false)}>
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Old Password
                </label>
                <input
                  type="password"
                  value={passwords.old}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, old: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, new: e.target.value }))
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
                <p className="text-sm text-gray-500">
                  Password must be 6 to 20 characters long with at least one
                  digit, one uppercase and one lowercase.
                </p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
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
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#E67E22] text-white rounded hover:bg-[#E67E22]/90"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Family Member Modal */}
      {isFamilyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Family Member Details</h2>
              <button onClick={() => setIsFamilyModalOpen(false)}>
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleFamilyMemberSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Relation</label>
                  <select
                    value={newFamilyMember.relation}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        relation: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  >
                    <option value="">Select</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
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
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
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
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    value={newFamilyMember.lastName}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={newFamilyMember.email}
                    onChange={(e) =>
                      setNewFamilyMember((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
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
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1572E8]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
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
                  className="px-4 py-2 bg-[#E67E22] text-white rounded hover:bg-[#E67E22]/90"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsFamilyModalOpen(false)}
                  className="px-4 py-2 bg-[#F4F5F7] rounded hover:bg-[#F4F5F7]/90"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
