const StackSidebar = () => {
  return (
    <aside className="h-fit rounded-[14px] border border-[#e7edf5] bg-white p-[18px] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
      <h3 className="text-[17px] font-semibold text-[#111827]">
        Your Stack
      </h3>

      <p className="mt-1 text-[12px] text-[#94a3b8]">
        No technologies selected yet.
      </p>

      <div className="mt-5 flex min-h-[90px] items-center justify-center rounded-[10px] border border-dashed border-[#dbe3ee] px-4">
        <p className="text-center text-[13px] text-[#94a3b8]">
          Your stack is empty.
        </p>
      </div>
    </aside>
  );
};

export default StackSidebar;