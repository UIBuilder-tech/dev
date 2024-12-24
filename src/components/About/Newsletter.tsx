import { FormEvent, useState } from "react";
import newsletter from "../../assets/newsletterImg.png";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <section
      className="relative  flex w-full flex-row items-center justify-center"
      style={{
        backgroundImage: `url(${newsletter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container overflow-hidden">
        <div className="">
          {/* Left Content */}

          <div className="md:h-[460px] desktop-1900:h-[550px] flex flex-col lg:flex-row items-center justify-left md:pl-20">
            <div className="flex flex-col justify-center md:space-y-6 desktop-1200:space-y-2 px-10 md:max-w-[50%] lg:pr-8 max-sm:py-8">
              <h2 className="text-3xl md:text-5xl md:text-6xl text-white mb-4 desktop-1200:text-4xl desktop-1500:text-5xl">
                Newsletter
              </h2>

              <p className="text-md md:text-xl text-white leading-relaxed max-w-3xl pb-4 md:pb-10 desktop-1200:text-lg desktop-1200:leading-6">
                Be a catalyst—become a CHF member—and receive updated news about
                the programmes, events and more. Inspire your friends, family
                members, colleagues and neighbors to support the effort in your
                neighborhood, at your convenience.
              </p>

              <form onSubmit={handleSubmit} className="relative md:max-w-xl max-sm:flex max-sm:flex-row max-sm:items-center ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-2/3 md:px-6 md:py-4 py-2 px-2 max-sm:text-sm rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <button
                  type="submit"
                  className="md:absolute md:right-[12.5rem] md:top-1/2 md:-translate-y-1/2 bg-gray-200 hover:bg-gray-300 transition-colors p-2.5 rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
