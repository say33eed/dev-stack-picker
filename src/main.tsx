
import loadingLogo from "./assets/logo-text.png";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import type { Technology } from "./types/technology";

const root = createRoot(document.getElementById("root")!);

const loadTechnologies = async () => {
  try {
    root.render(
      <div className="flex gap-1.5 min-h-screen items-center justify-center">
        <img src={loadingLogo} alt="Logo" />
        <h2 className="text-lg font-medium  text-gray-500">Loading...</h2>
      </div>
    );

    const response = await fetch("/technologies.json");

    const data: Technology[] = await response.json();

    root.render(
      <StrictMode>
        <App technologies={data} />
      </StrictMode>
    );
  } catch (error) {
    console.error("Failed to load technologies:", error);

    root.render(
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-red-500">
          Error! Failed to load.
        </p>
      </div>
    );
  }
};

loadTechnologies();