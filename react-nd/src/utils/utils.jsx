export const saveToLocalStorage = (key, data) => {
    if (data) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        console.log(`No data to save to local storage for key: ${key}`);
    }
};
export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        console.log(`No data found in local storage for key: ${key}`);
        return null;
    }
};

export const clearLocalStorage = () => {
    localStorage.clear();
    alert("Local Storage has been cleared.");
};
