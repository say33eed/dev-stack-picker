// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { ToastContainer } from 'react-toastify'
// import type { Technology } from "./types/technology";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//     <ToastContainer />
//   </StrictMode>,
// )



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import type { Technology } from "./types/technology";

const root = createRoot(document.getElementById("root")!);

const loadTechnologies = async () => {
  try {
    root.render(
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">Loading technologies...</p>
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
          Failed to load technologies.
        </p>
      </div>
    );
  }
};

loadTechnologies();