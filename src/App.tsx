import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";

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

      <Footer />
    </>
  );
}

export default App;