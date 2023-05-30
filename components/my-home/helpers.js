export const listMap = (values) => {
  const listMapped = values.map((item) => ({ ...item, active: false }));

  return listMapped;
};
