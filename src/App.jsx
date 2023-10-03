import Demo from "./components/Demo/Demo";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Hero/>
          <Demo />
        </div>
      </main>
    </>
  );
}

export default App;
