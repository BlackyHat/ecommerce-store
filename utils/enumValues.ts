export const enumValues = (data: object) => {
  return Object.values(data).filter((value) => typeof value === "string");
};
