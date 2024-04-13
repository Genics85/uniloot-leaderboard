import star_avatar from "../assets/star_avatar.png";
import trophy from "../assets/Trophy.png";

function LeaderboardRank() {
  return (
    <div className="bg-gradient-to-br p-[2px] rounded-lg from-[#9255f2] w-[290px] h-[193px] to-brand-pink">
      <div className="relative bg-black w-full h-full p-4 rounded-md flex flex-col justify-between ">
        <div className="z-10 size-[60px] hidden lg:block top-1/4 -translate-y-1/4 right-1/2 blur-md absolute radial-gradient-pink"></div>
        <div className="z-10 size-[60px] hidden lg:block top-1/4 -translate-y-1/4 left-1/2 blur-sm absolute radial-gradient-blue"></div>
        <div className=" absolute h-1/2 rounded-t-md opacity-90 blur-sm w-full right-0 top-0 bg-[#0E052D]"></div>
        <div className="flex justify-between z-10 ">
          <div>
            <img src={star_avatar} alt="" />
          </div>
          <div className="flex flex-col justify-between ">
            <p className="text-slate-500 text-[36px]">1st</p>
            <div className="flex bg-gradient-to-br p-[2px] from-[#9255f2] to-brand-pink rounded-md ">
              <div className="bg-[#19092a] rounded-md w-full ">
                <p className="text-brand-pink px-4">X 85</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 font-medium">
            <p className="text-brand-pink ">Andy Dosty</p>
            <p className="text-white">First Runner</p>
          </div>
          <div className="self-end">
            <img src={trophy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardRank;
