const workerFunction = () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        const randomArray = [];
        const { length } = e.data;
        for (let i = 0; i < length; i++) {
            const randomValue = Math.floor(Math.random() * 100); // Example: random values between 0 and 100
            randomArray.push(randomValue);
        }
        if (!e) return;
        postMessage(randomArray);
    });
};
export default workerFunction;
