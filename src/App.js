import Footer from "./Footer";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const App = () => {
  return ( 
    <div className=" font-poppin">
      <Navbar />
      <Homepage />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}
export default App;
