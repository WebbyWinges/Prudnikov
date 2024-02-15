import Logo from "./page/Logo";
import Navbar from "./page/Navbar";
import Description from "./page/Description";
import Schema from "./page/Schema";
import HowWork from "./page/HowWork";
import Company from "./page/Company";
import BasicForm from "./page/BasicForm";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Logo />
      <Description />
      <Schema />
      <HowWork />
      <Company />
      {/* <BasicForm /> */}
    </div>
  );
}

export default App;
