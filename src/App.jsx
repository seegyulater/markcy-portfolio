// .jsx file is both an html and javascript file where in this file, we can write easily some html and javascript combine in our web development
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export default App;
