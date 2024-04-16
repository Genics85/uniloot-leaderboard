import NavigationBar from "./components/NavigationBar";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <div className="px-5 overflow-hidden min-h-screen flex flex-col bg-gradient-to-b from-[#030012] via-brand-blue via-90% to-[#030012] ">
      <div className="z -z-0 size-[600px] hidden lg:block -top-[200px] -left-[100px] absolute radial-gradient-pink"></div>
      <div className="z -z-0 size-[600px] hidden lg:block -top-[400px]  left-1/2 -translate-x-1/2 overflow-hidden absolute radial-gradient-blue"></div>
      <div className="z -z-0 size-[600px] hidden lg:block -top-[200px] -right-0 overflow-hidden absolute radial-gradient-pink"></div>
      <NavigationBar />
      <LeaderBoard />
    </div>
  );
}

export default App;
