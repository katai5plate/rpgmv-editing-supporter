const randomText = () => Math.random().toString(36).slice(2).toUpperCase();
export const genKey = () => ({
  key: new Array(3).fill(0).map(randomText).join(""),
});
