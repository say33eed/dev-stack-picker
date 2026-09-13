import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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

        <section
          id="technologies"
          className="min-h-screen bg-white"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8">
            <h2 className="text-3xl font-bold">
              Technologies loaded: {technologies.length}
            </h2>
          </div>
        </section>




      </main>
    </>
  );
}

export default App;