export const noSelect = {
  webkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};

export const capitalize = (stringIn) => {
  return `${stringIn.charAt(0).toUpperCase()}${stringIn.slice(1)}`;
};
