export default function BitexenWordmark({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const textColor = variant === "light" ? "#0F172A" : "#FFFFFF";
  const accent = "#0EA5E9";
  return (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight ${className}`}
      style={{ color: textColor }}
    >
      Bitexen<span style={{ color: accent }}>Mobile</span>
    </span>
  );
}
