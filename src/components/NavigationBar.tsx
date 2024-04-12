import logo from "../assets/uniloot_logo.svg";
import avatar from "../assets/avatar.png"

function NavigationBar() {
  return (
    <div className="container mt-5 mx-auto text-white flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="font-semibold text-[20px]">
          UNILLOT<span className="text-[#c61ed4]">B</span>OT
        </p>
      </div>
      <div className="flex gap-12 items-center">
        <button className="bg-gradient-to-r font-medium py-2 px-6 rounded-md text-[14px] from-[#9551f0] to-[#c61ed4] ">
          Refferal link
        </button>
        <div className="flex gap-2">
            <div>
                <img src={avatar} alt="" />
            </div>
            <p className="text-[16px] ">Andy</p>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
