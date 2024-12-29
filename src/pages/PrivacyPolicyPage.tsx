import React from "react";
import Footer from "../components/Footer/Footer";
import { Asterisk } from "lucide-react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <div className="container mx-auto pt-28 px-4 py-12 sm:px-6 lg:px-8 max-w-[1200px]">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-6 text-[#1B365D]">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Chitrapur Heritage Foundation USA, Inc. is committed to protecting
            your privacy and ensuring the security of your personal information.
          </p>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg font-normal text-gray-800">
                      a. Personal Information
                    </p>
                    <p>
                      We collect personal information that you voluntarily
                      provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Mailing address</li>
                      <li>
                        Any other information you provide through forms on our
                        Site
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We use your information for the following purposes:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>To process donations and payments</li>
                      <li>To send you receipts and confirmations</li>
                      <li>
                        To provide updates on our programs and initiatives
                      </li>
                      <li>To improve our Site and services</li>
                      <li>To comply with legal and regulatory obligations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    3. How We Share Your Information
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg font-normal text-gray-800">
                      a. With Service Providers
                    </p>
                    <p>
                      We may share your information with third-party service
                      providers, including Salesforce for data management and
                      Stripe for payment processing, to perform services on our
                      behalf.
                    </p>

                    <p className="text-lg font-normal text-gray-800">
                      b. As Required by Law
                    </p>
                    <p>
                      We may disclose your information if required to do so by
                      law or in response to valid requests by public
                      authorities.
                    </p>

                    <p className="text-lg font-normal text-gray-800">
                      c. Business Transfers
                    </p>
                    <p>
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred to the acquiring
                      entity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    4. Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We use cookies and similar technologies to enhance your
                      experience on our Site. Cookies allow us to track and
                      analyze usage data to improve functionality.
                    </p>
                    <p className="text-lg font-normal text-gray-800">
                      Managing Cookies:
                    </p>
                    <p>
                      You can adjust your browser settings to refuse cookies or
                      alert you when cookies are being sent. However, some
                      features of our Site may not function properly without
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional sections following the same pattern... */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    10. Contact Us
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us at:
                    </p>
                    <div className="space-y-2">
                      <p>Email: contactus@chfusa.org</p>
                      <p>Address: 711 Daylily Drive, Langhorne, PA 19047</p>
                      <p>Phone: (215) 666-3200</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Compliance Section */}
            <section>
              <div className="flex items-start gap-2">
                <Asterisk className="w-5 h-5 mt-1.5 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-normal mb-4 text-gray-900">
                    Compliance with Stripe
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      This Privacy Policy aligns with Stripe's requirements for
                      data transparency and processing. It ensures users
                      understand how their data is collected, stored, shared,
                      and secured when making payments or interacting with our
                      Site.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
