const SkillBox = ({ logo, skill, black, white }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={
        "box w-[11rem] h-[11rem] rounded-lg bg-" +
        black +
        " text-" +
        white +
        " flex justify-center items-center flex-col gap-4 p-1 shadow-2xl sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      }
    >
      <div
        className={
          "bg-" +
          white +
          " text-" +
          black +
          " flex justify-center items-center w-14 p-2 sm:w-12 rounded-full exsm:w-10 h-14 sm:h-12 exsm:h-10 text-6xl sm:text-4xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
