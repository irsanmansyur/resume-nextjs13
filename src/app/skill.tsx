export const Skill = () => {
  return (
    <div className="relative ">
      <h2 className="md:text-4xl font-bold flex md:items-center md:gap-4 flex-col md:flex-row ">
        <span className="font-extrabold md:text-5xl text-2xl text-primary">Develover</span>
        <div className="relative flex">
          <div className="skill text-2xl mt-2 text-transparent whitespace-nowrap font-monolisa relative">
            Frontend OR Backend
            <div className="skillCursor absolute top-0 left-0 w-0 h-full border-r-2 border-primary peer-" />
          </div>
        </div>
      </h2>
    </div>
  );
};
