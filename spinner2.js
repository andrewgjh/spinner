const spinner = (numRotation) => {
  const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  for (let i = 0; i < 4 * numRotation; i++) {
    setTimeout(() => {
      process.stdout.write(array[i % array.length]);
    }, 200 * i);
  }
};
