const achivementsList = [
  {
    metric: "Project",
    value: "100+",
  },
  {
    metric: "Users",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "100+",
  },
];

const Achivement = () => {
  return (
    <div className="py-8  xl:gap-16 sm:py-12 ">
      <div className="border-[#33353F] border rounded-2xl py-4 md:px-10 flex flex-row items-center justify-between">
        {achivementsList.map((achivement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:mx-4 mx-2 relative"
            >
              <div className=" rounded-full md:py-12 md:px-12 py-9 px-8 absolute cursor cursor-pointer hover:bg-[#1b1b5c36] transition-all duration-200"></div>
              <h2 className="text-base  md:text-4xl  font-bold">
                {achivement.value}
              </h2>
              <p className="text-[#ADB7BE] md:text-base text-sm">
                {achivement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achivement;
