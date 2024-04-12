import NavigationBar from "./components/NavigationBar";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-b from-[#030012] via-brand-blue via-90% to-[#030012]">
      <NavigationBar/>
      <LeaderBoard/>
    </div>
  );
}

export default App;
