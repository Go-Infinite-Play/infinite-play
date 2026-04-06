import { availability } from "@/lib/constants";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full ${
          availability.accepting
            ? "bg-emerald-500 animate-pulse"
            : "bg-yellow-500"
        }`}
      />
      <span className="text-sm text-muted-text">{availability.text}</span>
    </div>
  );
}
