import Header from "./components/1.Header/Header";
import Hero from "./components/2.Hero/Hero";
import Service from "./components/3.Service/Service";
import Project from "./components/4.Project/Project";
import CeoMessage from "./components/5.CeoMessage/CeoMessage";
import Contact from "./components/6.Contact/Contact";
import Footer from "./components/7.Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Project />
      <CeoMessage />
      <Contact />
      <Footer />
    </>
  );
}
// This code defines the main App component for a React application.
// It imports a Header component and renders it within the App component.
// The Header component is expected to contain navigation and branding elements.
export default App;
