export const getDate = () => new Date().getTime();

export const formatDate = value => {
  const dt = new Date(value);
  return dt.toLocaleString();
};
