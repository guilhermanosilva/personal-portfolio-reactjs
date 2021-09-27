export default function useLocalStorage(key, value) {
  if (value) localStorage.setItem(key, value);

  return localStorage.getItem(key);
}
