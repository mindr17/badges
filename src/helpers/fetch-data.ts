export const fetchData = async () => {
  const data = await import('../badges-db.json');

  return data;
};
