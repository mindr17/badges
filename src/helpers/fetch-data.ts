export const fetchData = async () => {
  const data = await import('../badges-db.json');

  // const response = await fetch(`${config.apiRoutesUrl}/api?type=db`);

  // const countData = await response.json();

  return data;
};
