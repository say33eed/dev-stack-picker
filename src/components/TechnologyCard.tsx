import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
};

const getBadgeStyle = (badge: string) => {
  if (badge === "Versatile" || badge === "Standard") {
    return "bg-[#ecfdf5] text-[#10b981] border-[#d1fae5]";
  }

  if (badge === "Fast" || badge === "Ubiquitous") {
    return "bg-[#fff7ed] text-[#f97316] border-[#ffedd5]";
  }

  if (badge === "Cache") {
    return "bg-[#fef2f2] text-[#ef4444] border-[#fee2e2]";
  }

  if (badge === "Modern") {
    return "bg-[#ecfeff] text-[#06b6d4] border-[#cffafe]";
  }

  return "bg-[#eff6ff] text-[#0ea5e9] border-[#dbeafe]";
};

const TechnologyCard = ({
  technology,
}: TechnologyCardProps) => {
  return (
    <div className="flex min-h-[300px] flex-col rounded-[14px] border border-[#e7edf5] bg-white p-[18px] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">

      {/* Icon + badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        {technology.badge && (
          <span
            className={`rounded-full border px-3 py-[5px] text-[11px] font-medium leading-none ${getBadgeStyle(
              technology.badge
            )}`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      {/* Technology name */}
      <h3 className="mt-4 text-[18px] font-semibold leading-tight text-[#111827]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-[13px] leading-[1.55] text-[#71819a]">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="mt-3 border-t border-[#f1f5f9]" />

      {/* Information */}
      <div className="mt-3 flex items-center text-[12px] text-[#64748b]">
        <span className="rounded bg-[#f8fafc] px-2 py-1">
          {technology.category}
        </span>

        <span className="ml-6">
          {technology.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 font-medium text-[#475569]">
          <span className="text-[13px] text-[#fbbf24]">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        type="button"
        className="mt-4 w-full rounded-[6px] bg-[#0b1120] py-[11px] text-[13px] font-medium text-white"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;