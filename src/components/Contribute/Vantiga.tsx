import sectionBorder from "../../assets/section-border.svg";
import donate from "../../assets/contribute-donate.svg";
import volunteer from "../../assets/contribute-volunteer.svg";
import involved from "../../assets/contribute-get-invloved.svg";

interface Props {
  title?: string;
  description?: string;
}

export default function Vantiga({
  title = "What is Vantiga?",
  description = "Vantiga refers to monetary contributions made by the Chitrapur Saraswat community members to support the Chitrapur Math and its various initiatives. This practice is an important aspect of community engagement and support, as it enables the Math to sustain its activities, including spiritual programs, cultural preservation, hospitality services and community welfare efforts. Vantiga reflects the commitment of community members to their spiritual heritage and their role in contributing to the ongoing work of the Math in serving the needs of the Chitrapur Saraswat community. It is suggested that every member contributes Vantiga equivalent to 1% of their income. Alternatively, a minimum amount of $1 per day per family ($365 annually) is proposed as a possible contribution.",
}: Props) {
  return (
    <section id="vantiga" className="relative bg-[#E67E22] py-16">
      <div className="container absolute -top-[70px] md:-top-[150px] right-0 left-0 mx-auto bg-white rounded-[30px] md:rounded-[50px] p-2 md:p-10 max-w-[90%] md:max-w-[75%]">
        <div className="flex flex-row justify-around md:gap-6 item-center text-center w-full">
          <div className="flex flex-col space-y-2 md:space-y-4 items-start p-2 md:p-4">
            <img src={donate} className="w-8 h-8 md:w-14 md:h-14" />
            <p className="md:text-2xl text-sm text-[#02306A] font-bold">
              Donate
            </p>
            <p className="text-start max-sm:text-xs">
              Contribute to various causes adopted by CHF. Your donation helps
              CHF support various causes globally.
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4 items-start p-2 md:p-4">
            <img src={volunteer} className="w-8 h-8 md:w-14 md:h-14" />
            <p className="md:text-2xl text-sm text-[#02306A] font-bold">
              Volunteer
            </p>
            <p className="text-start max-sm:text-xs">
              Contribute to various causes adopted by CHF. Your donation helps
              CHF support various causes globally.
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4 items-start p-2 md:p-4">
            <img src={involved} className="w-8 h-8 md:w-14 md:h-14" />
            <p className="md:text-2xl text-sm text-[#02306A] font-bold">
              Get Involved
            </p>
            <p className="text-start max-sm:text-xs">
              Contribute to various causes adopted by CHF. Your donation helps
              CHF support various causes globally.
            </p>
          </div>
        </div>
      </div>
      <div className="container relative mx-auto px-4 w-full py-14 md:py-20 mt-12">
        <div className="flex flex-col justify-center item-center text-center space-y-10 w-full">
          <h2 className="text-3xl md:text-5xl text-white">{title}</h2>
          <p className="text-sm md:text-lg text-white mx-auto md:w-[75%]">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom border pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-8 w-full bg-[url('../../assets/section-border.svg')] bg-repeat-x">
          <img src={sectionBorder} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
