export const noSelect = {
  webkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};

export const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    height: "0.8rem",
    width: "0.8rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "none",
    borderRadius: "1rem",
  },
};

export const capitalize = (stringIn) => {
  return `${stringIn.charAt(0).toUpperCase()}${stringIn.slice(1)}`;
};

const monthMapping = {
  "01": { full: "January", short: "Jan" },
  "02": { full: "February", short: "Feb" },
  "03": { full: "March", short: "Mar" },
  "04": { full: "April", short: "Apr" },
  "05": { full: "May", short: "May" },
  "06": { full: "June", short: "Jun" },
  "07": { full: "July", short: "Jul" },
  "08": { full: "August", short: "Aug" },
  "09": { full: "September", short: "Sep" },
  10: { full: "October", short: "Oct" },
  11: { full: "November", short: "Nov" },
  12: { full: "December", short: "Dec" },
};

export const formatDate = (dateString) => {
  if (dateString === "ongoing") return dateString;
  const parsed = dateString.split(" ");
  const segments = parsed[0].split("-");
  return `${monthMapping[segments[1]].short} ${segments[0]} ${
    parsed[1] ? parsed[1] : ""
  }`;
};
