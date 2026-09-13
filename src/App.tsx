import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import type { Technology } from "./types/technology";

type AppProps = {
  technologies: Technology[];
};

function App({ technologies }: AppProps) {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologiesSection technologies={technologies} />
      </main>
    </>
  );
}

export default App;