import { Mail } from "lucide-react";
import grantsPointer from "../../assets/grantsPointer.svg";

export default function GrantsSection() {
  return (
    <div className="max-w-7xl desktop-1900:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
      <h1 className="text-center text-3xl sm:text-4xl text-primary mb-4 desktop-1900:text-5xl">
        CHF Grants
      </h1>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto desktop-1200:text-xs desktop-1500:text-sm desktop-1900:text-lg">
        CHF supports community service organizations in India whose goals and
        objectives closely match one of CHF's thematic areas.
      </p>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 desktop-1200:gap-16 desktop-1900:gap-24">
          {/* What We Do & Don't Fund */}
          <div>
            <p className="text-xl desktop-1500:text-xl desktop-1200:text-[16px] font-semibold mb-6">
              What We Do & Don't Fund
            </p>
            <div className="space-y-6 py-4">
              <div className="flex gap-3">
                <img
                  src={grantsPointer}
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                  CHF supports community service organizations in India whose
                  goals and objectives closely match one of CHF's thematic
                  areas.
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={grantsPointer}
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                  We do not provide grants to charities for expenses incurred in
                  the past or to political parties or political advocacy groups.
                </p>
              </div>
              {/* <div className="flex gap-3">
                <img loading="lazy" src={grantsPointer} className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1" />
                <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                  We do not provide grants for budget line items labeled as
                  "Operational Expenses," "Endowments" or for individuals; and
                  Fund Private Family Trust/Foundations, or political or
                  religious activities.
                </p>
              </div> */}
            </div>
          </div>

          {/* Conditions for Grants */}
          <div>
            <p className="text-xl font-semibold mb-6  desktop-1500:text-xl desktop-1200:text-[16px]">
              Conditions for Grants
            </p>
            <div className="flex items-start gap-3 py-4">
              <img
                src={grantsPointer}
                className="w-5 h-5 text-[#E67E22] flex-shrink-0 "
              />
              <div className="  space-y-2 rounded-sm">
                <p className="list-disc text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                  The beneficiary organization must provide:
                </p>
                <ul className="list-none desktop-1500:text-sm desktop-1200:text-xs space-y-2 text-sm sm:text-base text-gray-600">
                  <li>
                    Official receipt of the grant in the name of Chitrapur
                    Heritage Foundation
                  </li>
                  <li>
                    Progress reports, photographs, press cuttings, and video, or
                    other such material for our records.
                  </li>
                  <li>
                    Chitrapur Heritage Foundation's name prominently displayed
                    on any equipment sent by us.
                  </li>
                  <li>
                    For Sponsor-A- Student scheme and cash grants, appropriate
                    recognition, media publicity, and inclusion in annual
                    reports.
                  </li>
                  <li>A copy of the beneficiary's annual report.</li>
                  <li>
                    Audited financial statement of the beneficiary organization
                  </li>
                  <li>
                    A copy of the Current and Valid Tax Exemption Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selection Criteria */}
          <div>
            <p className="text-xl font-semibold mb-6  desktop-1500:text-xl desktop-1200:text-[16px]">
              Selection Criteria
            </p>
            <div className="space-y-4 py-4">
              <div className="flex gap-3">
                <img
                  src={grantsPointer}
                  className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                />
                <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                  In general, Chitrapur Heritage Foundation gives priority to
                  applications from our core community trusts and foundations.
                </p>
              </div>
              <ul className="space-y-2 text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600 ml-8">
                <li>
                  The organization has to have existed for a minimum of one (1)
                  year from the date of registration.
                </li>
                <li>
                  The organization must be registered as a non-profit that
                  implements social development projects in India, with no
                  political affiliations.
                </li>
                <li>The organization's physical address must be verifiable.</li>
                <li>
                  All registration documents such as 80G, FCRA, etc., must be
                  available upon request.
                </li>
                <li>
                  Organizations must have an Executive Board of Trustees that
                  maintains budgets, annual activity reports, and audited
                  financial statements. These must be available yearly upon
                  request.
                </li>
                <li>
                  The organization must fully comply with local and central
                  government regulations and labor laws.
                </li>
                <li>
                  The organization must have defined indicators that measure its
                  performance against its stated objectives.
                </li>
                <li>
                  Grant applicants must demonstrate the potential of continuing
                  the funded work in a self-renewing manner after funding from
                  Chitrapur Heritage Foundation ceases
                </li>
              </ul>
            </div>
          </div>
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
  );
}
