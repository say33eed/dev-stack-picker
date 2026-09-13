import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

type TechnologiesSectionProps = {
    technologies: Technology[];
};

const TechnologiesSection = ({
    technologies,
}: TechnologiesSectionProps) => {
    return (
        <section id="technologies" className="bg-white">
            <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8">
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
                <div className="grid items-start gap-5 lg:grid-cols-[1fr_250px]">
                    
                    {/* Technology cards */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </div>

                    
                    {/* Your Stack */}
                    
                    <StackSidebar />
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;