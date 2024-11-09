export const saveToLocalStorage = (key, data) => {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const clearLocalStorage = () => {
  localStorage.clear();
  alert('Local Storage has been cleared.');
};
