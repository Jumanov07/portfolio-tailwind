import About from "./components/About";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-[1440px] overflow-x-hidden pt-10">
        <Header />

        <main>
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contacts />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
