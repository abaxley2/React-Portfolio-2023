// importing the necessary components
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
// import Work from "./components/Work";

// defining the main app component
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      {/* <Work /> */}
      <Contact />
    </div>
  );
}

// exporting the app component
export default App;
