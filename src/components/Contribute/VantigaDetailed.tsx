import grantsIcon from "../../assets/grantsIcon.svg";

export default function VantigaDetailed({ data }) {
  return (
    <div className="max-w-7xl desktop-1900:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-center text-3xl sm:text-5xl text-[#1B4F72] mb-4 desktop-1200:text-4xl desktop-1500:text-5xl desktop-1900:text-6xl desktop-1200:mb-4 desktop-1500:mb-6 desktop-1900:mb-8">
        {data.vantigaTitle}
      </h1>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto desktop-1200:text-xs desktop-1500:text-sm desktop-1900:text-lg">
        {data.vantigaDescription}
      </p>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 desktop-1200:gap-16 desktop-1900:gap-24">
          {
            data.vantigaList.map((item, index) => (
              <div key={`vantiga-${index}`}>
                <p className="text-xl desktop-1500:text-xl desktop-1200:text-[16px] font-semibold mb-6">
                  {item.title}
                </p>
                <div className="space-y-6 py-4">
                  {
                    item.list.map((listItem, i) => (
                      <div key={`subitem_${i}`} className="flex gap-3 desktop-1200:gap-4 desktop-1500:gap-5 desktop-1900:gap-6">
                        <img
                          src={grantsIcon}
                          alt="grantsIcon"
                          className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-1"
                        />
                        <p className="text-sm desktop-1500:text-sm desktop-1200:text-xs sm:text-base text-gray-600">
                          {listItem.text}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>
        <div className="absolute top-[2.75rem] left-0 right-0 h-0.5 bg-[#E67E22] desktop-1200:top-[2.75rem] desktop-1500:top-[3rem] desktop-1900:top-[3.25rem]"></div>
      </div>
    </div>
  );
}
