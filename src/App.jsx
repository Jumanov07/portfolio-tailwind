import { useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  const [language, setLanguage] = useState(false);

  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-[1440px] overflow-x-hidden pt-10">
        <Header language={language} setLanguage={setLanguage} />

        <main>
          <Banner language={language} />
          <About language={language} />
          <Services language={language} />
          <Projects language={language} />
          <Contacts language={language} />
        </main>

        <Footer language={language} />
      </div>
    </div>
  );
};

export default App;
