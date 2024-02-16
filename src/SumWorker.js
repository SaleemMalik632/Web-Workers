const workerFunction = () => {
  self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
    if (!e) return;
    const { randomArray } = e.data;
    // Calculate the sum of the array elements
    const sum = randomArray.reduce((acc, currentValue) => acc + currentValue, 0);
    postMessage(sum);
  });
};
export default workerFunction;
