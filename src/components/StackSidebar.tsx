import type { Technology } from "../types/technology";

type StackSidebarProps = {
    selectedTechnologies: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

const StackSidebar = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    return (
        <aside className="h-fit rounded-[14px] border border-[#e7edf5] bg-white p-[18px] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">

            {/* Stack heading */}
            <h3 className="text-[17px] font-semibold text-[#111827]">
                Your Stack
            </h3>

            {/* Selected count */}
            <p className="mt-1 text-[12px] text-[#94a3b8]">
                {selectedTechnologies.length === 0
                    ? "No technologies selected yet."
                    : selectedTechnologies.length === 1
                        ? "1 Technology Selected"
                        : `${selectedTechnologies.length} Technologies Selected`}
            </p>

            {/* Empty state */}
            {selectedTechnologies.length === 0 ? (
                <div className="mt-5 flex min-h-[90px] items-center justify-center rounded-[10px] border border-dashed border-[#dbe3ee] px-4">
                    <p className="text-center text-[13px] text-[#94a3b8]">
                        Your stack is empty.
                    </p>
                </div>
            ) : (
                <div className="mt-5">

                    {/* Selected technologies */}
                    <div className="space-y-2">
                        {selectedTechnologies.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center gap-3 rounded-[8px] border border-[#e7edf5] bg-[#fbfdff] px-3 py-3"
                            >
                                {/* Technology icon */}
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-8 w-8 object-contain"
                                />

                                {/* Technology information */}
                                <div className="min-w-0 flex-1">
                                    <p className="text-[13px] font-semibold text-[#111827]">
                                        {technology.name}
                                    </p>

                                    <p className="mt-[2px] text-[11px] text-[#94a3b8]">
                                        {technology.category}
                                    </p>
                                </div>

                                {/* Remove one technology */}
                                <button
                                    type="button"
                                    onClick={() => onRemove(technology.id)}
                                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[14px] text-[#94a3b8] transition-colors duration-200 hover:bg-[#fef2f2] hover:text-[#ef4444]"
                                    aria-label={`Remove ${technology.name}`}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Remove All */}
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-4 w-full cursor-pointer rounded-[6px] border border-[#ef4444] py-[10px] text-[12px] font-medium text-[#ef4444] transition-colors duration-200 hover:bg-[#fef2f2]"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </aside>
    );
};

export default StackSidebar;