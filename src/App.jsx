import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Context from "./context/Context";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Context.Provider value={{ modalActive, setModalActive }}>
        <Header />
        <Slider />
        <Services />
        <Footer />
        <Modal />
      </Context.Provider>
    </>
  );
};

export default App;
