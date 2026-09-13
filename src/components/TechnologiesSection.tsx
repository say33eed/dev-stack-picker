import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

type TechnologiesSectionProps = {
  technologies: Technology[];
};

const TechnologiesSection = ({
  technologies,
}: TechnologiesSectionProps) => {
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const duplicate = selectedTechnologies.filter(
      (item) => item.id === technology.id
    );

    if (duplicate.length > 0) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    const updatedTechnologies = selectedTechnologies.filter(
      (item) => item.id !== id
    );

    setSelectedTechnologies(updatedTechnologies);

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-5 md:px-8 md:py-16">
        
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-[28px] font-bold leading-tight text-[#111827] md:text-[32px]">
            Explore the{" "}
            <span className="brand-gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-[13px] text-[#64748b] md:text-[14px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + sidebar */}
        <div className="grid items-start gap-6 xl:grid-cols-[1fr_250px]">
          
          {/* Technology cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAddToStack}
                isAdded={
                  selectedTechnologies.filter(
                    (item) => item.id === technology.id
                  ).length > 0
                }
              />
            ))}
          </div>

          {/* Your Stack */}
          <StackSidebar
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </section>
  );
};

export default TechnologiesSection;