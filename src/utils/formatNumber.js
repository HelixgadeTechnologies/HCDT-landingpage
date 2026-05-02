export const formatNumber = (num) => {
  if (num === null || num === undefined) return num;

  // Convert to number if it's a string, removing any commas first
  const parsedNum =
    typeof num === "string" ? parseFloat(num.replace(/,/g, "")) : Number(num);

  if (isNaN(parsedNum)) return num;

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(parsedNum);
};
