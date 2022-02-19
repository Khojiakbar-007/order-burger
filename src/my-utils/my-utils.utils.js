// Array methods
export const getLastEl = (arr, el) => {
  for (let i = arr.length - 1; i >= 0; i--) if (arr[i] === el) return el;
};

export const getLastElIndex = (arr, el) => {
  for (let i = arr.length - 1; i >= 0; i--) if (arr[i].id === el.id) return i;
};
