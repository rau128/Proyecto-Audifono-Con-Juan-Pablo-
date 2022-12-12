import EligeTusTechPro from "./components/EligeTusTechPro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import SeccionIconos from "./components/SeccionIconos";
import SobreLosTechPro from "./components/SobreLosTechPro";

function App() {
  return (
    <div className="App">
      <Header />
      <SeccionIconos />
      <SobreLosTechPro />
      <EligeTusTechPro />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
