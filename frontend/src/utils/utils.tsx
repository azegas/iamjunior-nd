// export const saveToLocalStorage = (key: string, data: any) => {
//   if (data) {
//     localStorage.setItem(key, JSON.stringify(data));
//   }
// };
// export const getFromLocalStorage = (key: string) => {
//   const data = localStorage.getItem(key);
//   if (data) {
//     return JSON.parse(data);
//   }
//   return null;
// };

export const clearLocalStorage = () => {
  localStorage.clear();
  alert('Local Storage has been cleared.');
};

export function formatErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unexpected error occured';
}
