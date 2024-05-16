import Logo from "./page/Logo";
import Navbar from "./page/Navbar";
import Description from "./page/Description";
import Schema from "./page/Schema";
import HowWork from "./page/HowWork";
import Company from "./page/Company";
// import BasicForm from "./page/BasicForm";
import BasicForm from "./page/BasicForm";
import Contact from "./page/Contact";
import Footer from "./page/Footer";

function App() {
  return (
    <div className=" ">
      <Navbar />

      <Logo />

      <div id="schema" />
      <Schema />
      <div id="howWork" />
      <HowWork />
      <div id="company" />
      <Company />
      <div className="bg-white" id="form" />
      <BasicForm />
      <div id="contact" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
