import LeaderboardRank from "../components/LeaderboardRank";
import shrimp_icon from "../assets/levels/icons/shrimp_icon.svg";
import octopus_icon from "../assets/levels/icons/octopus_icon.svg";
import crab_icon from "../assets/levels/icons/crab_icon.svg";
import dolphin_icon from "../assets/levels/icons/dolphin_icon.svg";
import orca_icon from "../assets/levels/icons/orca_icon.svg";
import shark_icon from "../assets/levels/icons/shark_icon.svg";
import whale_icon from "../assets/levels/icons/whale_icon.svg";
import star_coin from "../assets/levels/star_coin.svg";
import { useState } from "react";
import { userData } from "../data/users";

const levelIcons = [
  shrimp_icon,
  octopus_icon,
  crab_icon,
  dolphin_icon,
  orca_icon,
  shark_icon,
  whale_icon,
];

type vipClubSection = "CLUBS" | "DETAILS";

function LeaderBoard() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [vipClub, setVipClub] = useState<vipClubSection>("CLUBS");
  const [level, setLevel] = useState<number>(1);
  const [selectedLevelCard, setSelectedLevelCard] = useState<number>(4);

  return (
    <div className=" container z-10 my-20 flex flex-col gap-y-28 items-center mx-auto">
      <div className="flex w-full items-center justify-center md:flex-row flex-col gap-10">
        <LeaderboardRank name="Andy Dosty" position="1st" runner="Winner" />
        <LeaderboardRank name="Mannesah" position="2nd" runner="First runner" />
        <LeaderboardRank name="Eugene" position="3rd" runner="Second runner" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-6 items-start w-full">
        <div className="bg-black w-full lg:w-[55%] space-y-4 p-4">
          <p className="text-[24px] font-medium text-white">LEADERBOARD</p>
          <table className="w-full text-left space-y-4 text-[#bebaba]">
            <thead className="text-[10px] md:text-[16px] font-semibold">
              <tr className=" flex justify-between px-2">
                <th className=" whitespace-nowrap">Rank</th>
                <th className="  whitespace-nowrap">User</th>
                <th className=" whitespace-nowrap">Points</th>
                <th className=" whitespace-nowrap">Level</th>
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {userData?.map((user, i: number) => {
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
                    } border-solid px-2 border-[3px] bg-[#0d1421] flex mb-3 justify-between `}
                  >
                    <td className="py-1">#{i + 1}</td>
                    <td className=" py-1 ">{user.name}</td>
                    <td className=" py-1 -ml-10">{user.points}</td>
                    <td className="py-1">
                      <img src={user.level} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-5 text-white w-full lg:w-[45%]">
          <div
            className={`${
              vipClub == "DETAILS" ? "flex" : "hidden"
            } justify-between items-center `}
          >
            <button className="bg-gradient-to-r font-medium py-2 px-2 rounded-md text-[13px] md:text-[20px] from-[#9551f0] to-brand-pink ">
              Shrimp: bronze vip 1
            </button>
            <div className="flex flex-col gap-1 w-[120px] md:w-[180px]">
              <div className="rounded-full p-[1px] w-full bg-gradient-to-r from-[#9551f0] to-brand-pink h-[15px] ">
                <div className="w-full rounded-full bg-brand-blue h-full">
                  <div className="w-[60%] bg-gradient-to-r from-[#9551f0] to-brand-pink rounded-full bg-brand-blue h-full"></div>
                </div>
              </div>
              <div className="flex justify-between text-[12px]">
                <p>Min</p>
                <p>50%</p>
                <p>Max</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              vipClub == "CLUBS" ? "flex" : "hidden"
            } text-[24px] font-medium`}
          >
            <p>VIP CLUB</p>
          </div>
          <div
            className={`p-1 bg-gradient-to-br ${
              vipClub == "CLUBS" ? "h-[540px]" : "h-[480px]"
            } h-[480px] rounded-md from-[#9551f0] to-brand-pink`}
          >
            <div className="w-full py-4 px-3 md:px-7 h-full bg-gradient-to-b rounded-md from-[#030012] via-brand-blue via-90% to-[#030012]">
              {/* Vip Club Details */}
              <div
                className={`${
                  vipClub == "DETAILS" ? "flex" : "hidden"
                } flex-col gap-6`}
              >
                <div className="flex gap-2 justify-between">
                  {levelIcons.map((icon: string, i: number) => {
                    return (
                      <button
                        onClick={() => {
                          setSelectedLevel(i);
                          setLevel(5 * i + 1);
                        }}
                        key={i}
                        className={`${
                          i == selectedLevel
                            ? "bg-gradient-to-b shadow-md shadow-[#95294c] from-[#fd1074] to-[#f186b3]"
                            : "bg-gradient-to-br from-[#9551f0] to-brand-pink"
                        }  p-[3px] rounded-full `}
                      >
                        <div className="bg-[#030012] rounded-full w-full p-[4px] md:p-3 h-full">
                          <img className="shrink-0" src={icon} alt="" />
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="w-full bg-gradient-to-r p-[1px] from-[#9551f0] to-brand-pink  rounded-full h-[40px] md:h-[50px]">
                  <div className="w-full flex gap-3 justify-between p-[5px] bg-[#090420]  rounded-full h-full">
                    {[level, level + 1, level + 2, level + 3, level + 4].map(
                      (vip: number, i: number) => {
                        return (
                          <button
                            onClick={() => setSelectedLevelCard(vip)}
                            key={i}
                            className="rounded-full w-full bg-gradient-to-r p-[1px] from-[#9551f0] to-brand-pink"
                          >
                            <div
                              className={`${
                                vip == selectedLevelCard
                                  ? "bg-gradient-to-r p-[2px] from-[#9551f0] to-brand-pink"
                                  : "bg-brand-blue"
                              } rounded-full flex items-center justify-center h-full w-full px-2 py-1 `}
                            >
                              <p className="text-center text-[11px] md:text-[16px] font-medium whitespace-nowrap">
                                VIP {vip}
                              </p>
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
                <div
                  className="
                  grid grid-cols-2 gap-5 mx-auto
                "
                >
                  <div className="bg-gradient-to-b p-[1px] from-[#ff0c72] rounded-md to-[#f289b5] h-[96px] md:h-[96px] md:w-[220px]">
                    <div className="w-full h-full bg-brand-blue rounded-md flex flex-col items-center justify-center">
                      <p className="font-bold text-[14px]">Level up bonus</p>
                      <p className="text-center text-[11px]">
                        Total price:{" "}
                        <span className="font-bold">0.5 uniloots</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b p-[1px] from-[#ff0c72] rounded-md to-[#f289b5] h-[96px] md:h-[96px] md:w-[220px]">
                    <div className="w-full h-full bg-brand-blue rounded-md flex flex-col items-center justify-center">
                      <p className="font-bold text-[14px]">Recharge</p>
                      <p className="text-center text-[11px]">
                        Activate your recharge and claim
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b p-[1px] from-[#ff0c72] rounded-md to-[#f289b5] h-[96px] md:h-[96px] md:w-[220px]">
                    <div className="w-full h-full bg-brand-blue rounded-md flex flex-col items-center justify-center">
                      <p className="font-bold text-[14px]">Weekly bonus</p>
                      <p className="text-center text-[11px]">
                        Recieve weekly bonuses of trading volume 1% approximate
                        based on your current trading volume
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b p-[1px] from-[#ff0c72] rounded-md to-[#f289b5] h-[96px] md:h-[96px] md:w-[220px]">
                    <div className="w-full h-full bg-brand-blue rounded-md flex flex-col items-center justify-center">
                      <p className="font-bold text-[14px]">Monthly bonus</p>
                      <p className="text-center text-[11px]">
                        Recieve weekly bonuses of trading volume 1% approximate
                        based on your current trading volume
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vip clubs  */}
              <div
                className={`${
                  vipClub == "CLUBS" ? "flex" : "hidden"
                } flex-col gap-6`}
              >
                <div className="flex justify-between">
                  <div className="flex gap-10 font-medium">
                    <div className="flex flex-col ">
                      <p>Rank</p>
                      <p className="text-[27px] font-bold">506</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Points</p>
                      <p className="text-[27px] font-bold">0</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Bonuses</p>
                      <p className="text-[27px] font-bold">0</p>
                    </div>
                  </div>
                  <div className=" rounded-full shrink-0 size-20 md:size-28 bg-gradient-to-b p-[4px] shadow-md shadow-[#95294c] from-[#fd1074] to-[#f186b3]">
                    <div className="w-full h-full bg-brand-blue rounded-full flex flex-col items-center justify-center">
                      <p className=" md:text-[28px] font-bold">X1.0</p>
                      <p className="font-medium">Points</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-[2px] bg-gradient-to-br h-[60px] rounded-md from-[#9551f0] to-brand-pink">
                    <div className="w-full font-medium flex py-4 px-3 rounded-md h-full bg-[#222226] justify-between items-center">
                      <p className="text-[11px] md:text-[16px] ">
                        Level Up Bonus
                      </p>
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Current VIP
                        </p>
                        <p className="text-[10px]">shrimp:bronze vip 1</p>
                      </div>
                      <button
                        onClick={() => setVipClub("DETAILS")}
                        className="bg-gradient-to-r flex whitespace-nowrap items-center gap-1 font-medium py-1 px-2 rounded-md text-[11px] md:text-[14px] from-[#9551f0] to-brand-pink w-[120px] md:w-[125px] "
                      >
                        <span className="shrink-0">
                          <img src={star_coin} alt="" />
                        </span>
                        View vip club
                      </button>
                    </div>
                  </div>
                  <div className="p-[2px] bg-gradient-to-br h-[60px] rounded-md from-[#9551f0] to-brand-pink">
                    <div className="w-full font-medium flex py-4 px-3 rounded-md h-full bg-[#222226] justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Recharge Now
                        </p>
                        <p className="text-[10px] leading-[10px]">
                          Current tier Basic <br /> Ready claim
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Trading Volume
                        </p>
                        <p className="text-[10px]">$1000</p>
                      </div>
                      <button className="w-[120px] justify-center bg-gradient-to-r flex items-center gap-1 font-medium py-1 px-2 rounded-md text-[11px] md:text-[14px] from-[#9551f0] to-brand-pink ">
                        <span>
                          <img src={star_coin} alt="" />
                        </span>
                        Claim Now
                      </button>
                    </div>
                  </div>
                  <div className="p-[2px] bg-gradient-to-br h-[60px] rounded-md from-[#9551f0] to-brand-pink">
                    <div className="w-full font-medium flex py-4 px-3 rounded-md h-full bg-[#222226] justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Weekly cashback
                        </p>
                        <p className="text-[10px] leading-[10px]">
                          Receive every friday <br /> The last weekly bonuses
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Trading Volume
                        </p>
                        <p className="text-[10px]">$1000</p>
                      </div>
                      <button className="w-[120px] justify-center bg-gradient-to-r flex items-center gap-1 font-medium py-1 px-2 rounded-md text-[11px] md:text-[14px] from-[#9551f0] to-brand-pink ">
                        <span>
                          <img src={star_coin} alt="" />
                        </span>
                        Claim Now
                      </button>
                    </div>
                  </div>
                  <div className="p-[2px] bg-gradient-to-br h-[60px] rounded-md from-[#9551f0] to-brand-pink">
                    <div className="w-full font-medium flex py-4 px-3 rounded-md h-full bg-[#222226] justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Monthly cashback
                        </p>
                        <p className="text-[10px] leading-[10px]">
                          Receive every 15th of month <br /> The last weekly
                          bonuses
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[11px] md:text-[16px]">
                          Trading Volume
                        </p>
                        <p className="text-[10px]">$1000</p>
                      </div>
                      <button className="w-[120px] justify-center bg-gradient-to-r flex items-center gap-1 font-medium py-1 px-2 rounded-md text-[11px] md:text-[14px] from-[#9551f0] to-brand-pink ">
                        <span>
                          <img src={star_coin} alt="" />
                        </span>
                        Claim Now
                      </button>
                    </div>
                  </div>
                  <button className="mt-5 self-start justify-center bg-gradient-to-r flex items-center gap-1 font-medium py-2 px-2 rounded-md text-[11px] md:text-[14px] from-[#9551f0] to-brand-pink ">
                    <span>
                      <img src={star_coin} alt="" />
                    </span>
                    Roll Competition
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <p className="text-[24px] font-medium">MY DAILY CHALLENGE</p>
            <div className="p-1 bg-gradient-to-br h-[260px] rounded-md from-[#9551f0] to-brand-pink">
              <div className="w-full flex md:flex-row flex-col-reverse gap-6 py-4 px-4 h-full bg-gradient-to-b rounded-md from-[#030012] via-brand-blue via-90% to-[#030012] justify-between items-start">
                <div className=" flex flex-col gap-2 font-medium mt-6">
                  <p className="text-[20px] ">CHALLENGE 1</p>
                  <div className="flex text-slate-300 gap-2 items-center">
                    <div className="size-4 bg-gradient-to-r p-[2px] from-[#9551f0] to-brand-pink"></div>
                    <p>Complete chanllenge for daily reward</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="size-4 bg-gradient-to-r p-[2px] from-[#9551f0] to-brand-pink"></div>
                    <p>Complete chanllenge for daily reward</p>
                  </div>
                </div>
                <div className=" rounded-full shrink-0 size-20 md:size-28 bg-gradient-to-b p-[4px] shadow-md shadow-[#95294c] from-[#fd1074] to-[#f186b3]">
                  <div className="w-full h-full bg-brand-blue rounded-full flex flex-col items-center justify-center">
                    <p className=" md:text-[28px] font-bold">X1.0</p>
                    <p className="font-medium">Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      a
    </div>
  );
}

export default LeaderBoard;
