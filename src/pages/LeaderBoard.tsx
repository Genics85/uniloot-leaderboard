import LeaderboardRank from "../components/LeaderboardRank";
import BLUE_DIAMOND from "../assets/levels/BLUE_DIAMOND.svg";
import shrimp_icon from "../assets/levels/icons/shrimp_icon.svg";
import octopus_icon from "../assets/levels/icons/octopus_icon.svg";
import crab_icon from "../assets/levels/icons/crab_icon.svg";
import dolphin_icon from "../assets/levels/icons/dolphin_icon.svg";
import orca_icon from "../assets/levels/icons/orca_icon.svg";
import shark_icon from "../assets/levels/icons/shark_icon.svg";
import whale_icon from "../assets/levels/icons/whale_icon.svg";

function LeaderBoard() {
  return (
    <div className="container mt-20 flex flex-col gap-16 items-center mx-auto">
      <div className="flex gap-10">
        <LeaderboardRank />
        <LeaderboardRank />
        <LeaderboardRank />
      </div>
      <div className="flex gap-6 items-start w-full">
        <div className="bg-black w-[55%] space-y-4 p-4">
          <p className="text-[24px] font-medium text-white">LEADERBOARD</p>
          <table className="w-full text-left text-[#bebaba]">
            <thead className="text-[10px] md:text-[16px] font-semibold">
              <tr className=" flex justify-between px-2">
                <th className=" whitespace-nowrap">Rank</th>
                <th className="  whitespace-nowrap">User</th>
                <th className=" whitespace-nowrap">Points</th>
                <th className=" whitespace-nowrap">Level</th>
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {[1, 2, 3, 4]?.map((_, i: number) => {
                return (
                  <tr
                    key={i}
                    className={`${
                      i == 0
                        ? "border-[#930303]"
                        : i == 1
                        ? "border-[#5028c3]"
                        : i == 2
                        ? "border-[#e9ed24]"
                        : "border-[#191e25]"
                    } border-solid px-2 border-[3px] bg-[#0d1421] flex mb-2 justify-between `}
                  >
                    <td className="py-3">#1</td>
                    <td className=" py-3 ">Andy Dosty</td>
                    <td className=" py-3 -ml-10">500000</td>
                    <td className="py-3">
                      <img src={BLUE_DIAMOND} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-5 text-white w-[45%]">
          <div className="flex justify-between items-center ">
            <button className="bg-gradient-to-r font-medium py-2 px-2 rounded-md text-[20px] from-[#9551f0] to-brand-pink ">
              Shrimp: bronze vip 1
            </button>
            <div className="flex flex-col gap-1 w-[180px]">
              <div className="rounded-full p-[2px] w-full bg-gradient-to-r from-[#9551f0] to-brand-pink h-[15px] ">
                <div className="w-full rounded-full bg-brand-blue h-full">
                  <div className="w-[60%] bg-gradient-to-r from-[#9551f0] to-brand-pink rounded-full bg-brand-blue h-full"></div>
                </div>
              </div>
              <div className="flex justify-between text-[12px]">
                <p>Min</p>
                <p>70%</p>
                <p>Max</p>
              </div>
            </div>
          </div>
          <div className="p-1 bg-gradient-to-br h-[480px] rounded-md from-[#9551f0] to-brand-pink">
            <div className="w-full h-full bg-gradient-to-b rounded-md from-[#030012] via-brand-blue via-90% to-[#030012]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
