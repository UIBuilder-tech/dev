import { Mail } from "lucide-react";
import grantsIcon from "../../assets/grantsIcon.svg";

export default function VantigaDetailed() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-center text-3xl sm:text-5xl text-[#1B4F72] mb-4">
        Vantiga
      </h1>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto">
        Vantiga refers to the annual contributions made by the Chitrapur
        Saraswat community members to support the Chitrapur Math and its various
        initiatives.
      </p>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* What We Do & Don't Fund */}
          <div>
            <p className="text-xl font-semibold mb-6">What is Vantiga</p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  Vantiga refers to the annual contributions made by the
                  Chitrapur Saraswat community members to support the Shri
                  Chitrapur Math and its various initiatives. This practice is
                  an important aspect of community engagement and support, as it
                  enables the Math to sustain its activities, including
                  spiritual programs, cultural preservation, hospitality
                  services, and community welfare efforts. Vantiga reflects the
                  commitment of community members to their spiritual heritage
                  and their role in contributing to the ongoing work of the Math
                  in serving the needs of the Chitrapur Saraswat community.
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold">
                    Recommended Contribution:
                  </span>{" "}
                  It's suggested that every member contributes Vantiga
                  equivalent to 1% of their income. Alternatively, a minimum
                  amount of $1.50 per day per family ($500 annually) is proposed
                  as a possible contribution.
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold">Types of Contributions:</span>{" "}
                  Contributions to Vantiga support various aspects of Seva
                  (service) at the Math, preserving heritage and traditions. The
                  ways to contribute include financial donations and possibly
                  other forms of support like volunteering or participating in
                  activities.
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  Overall, Vantiga plays a crucial role in maintaining the
                  spiritual and cultural practices at the Shri Chitrapur Math as
                  well as providing a welcoming environment for any Chitrapur
                  Saraswat member to visit and comfortably stay at the Math
                  facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Selection Criteria */}
          <div>
            <p className="text-xl font-semibold mb-6">What is Math Maryādā</p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  The Chitrapur Saraswat community is constantly expanding to
                  include members from other communities. To enable them to feel
                  a part of our rich culture and traditions and be engaged in
                  the Chitrapur Math’s activities, these members can do annual
                  contributions through the means of Math Maryada.
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-full text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600">
                  <span className="font-semibold">This is relevant for:</span>
                </p>
              </div>
              <div className="flex gap-3 ml-6 pl-2">
                <p className="text-sm sm:text-base text-gray-600">
                  a) Non-Chitrapur Saraswat men, after their marriage to
                  Chitrapur Saraswat ladies;
                </p>
              </div>
              <div className="flex gap-3 ml-6 pl-2">
                <p className="text-sm sm:text-base text-gray-600">
                  b) Any individuals or groups who are becoming increasingly
                  connected with the Math and who look for spiritual connection.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mb-6">Who can pay Vantigā</p>
            <div className="space-y-6">
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600 font-semibold">
                  Who can pay Vantigā:
                </p>
              </div>
              <ul className="list-disc ml-10 text-sm sm:text-base text-gray-600">
                <li>Adult Bhānap</li>
                <li>
                  Adult Bhānap lady, even if married outside the community
                </li>
              </ul>
              <div className="flex gap-3">
                <img
                  src={grantsIcon}
                  alt="grantsIcon"
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm sm:text-base text-gray-600 font-semibold">
                  Who can pay Math Maryada (Equivalent to Vantiga{" "}
                  <span className="text-secondary font-semibold">*</span>):
                </p>
              </div>
              <ul className="list-disc ml-10 text-sm sm:text-base text-gray-600">
                <li>Non-Bhānap husband of Bhānap lady</li>
                <li>Children of Non-Bhānap father</li>
                <li>Minor (whether Bhānap or not)</li>
                <li>(on behalf of) a Deceased devotee</li>
              </ul>
            </div>
            <p className="mt-10 text-sm sm:text-base text-gray-600">
              <span className="text-secondary font-semibold">*</span> However,
              payment will be treated as Math Maryādā
            </p>
          </div>
        </div>
        <div className="absolute top-[2.75rem] left-0 right-0 h-0.5 bg-[#E67E22]"></div>
      </div>
    </div>
  );
}
