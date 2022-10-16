let timeCount = -100;
const spinnerList = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', "\n"];

for (const spinner of spinnerList) {
  timeCount += 200;
  setTimeout(() => {
    process.stdout.write(spinner);
  }, timeCount);
}