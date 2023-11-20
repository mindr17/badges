export const getFromLocalStorage = (name: string) => {
  try {
    const inputValue = JSON.parse(localStorage.getItem(name) || '');

    if (!inputValue) return '';

    return inputValue;
  } catch (e) {
    console.error(e);

    return '';
  }
};

export const setToLocalStorage = (
  name: string,
  item: unknown
): boolean => {
  try {
    localStorage.setItem(name, JSON.stringify(item));

    return true;
  } catch (e) {
    console.error(e);

    return false;
  }
};
