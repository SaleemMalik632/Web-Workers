# Web Workers Demo

This repository contains a simple demonstration of using web workers to generate a random array and calculate its sum. It provides implementations both with and without web workers for comparison.

Live Demo: [Web Workers Demo](https://web-workers-one.vercel.app)

## Overview

Web workers are a powerful feature in modern web browsers that allow JavaScript code to run in background threads, separate from the main execution thread. This can be particularly useful for offloading CPU-intensive tasks, such as data processing or calculations, to improve performance and responsiveness of web applications.

In this demo, we utilize web workers to:

1. Generate a random array of specified length.
2. Calculate the sum of the elements in the array.

## Features

- **Random Array Generation**: Utilizes web workers to asynchronously generate a random array of a given length.
- **Array Sum Calculation**: Calculates the sum of the elements in the array, both with and without web workers, showcasing the performance benefits of using web workers for CPU-intensive tasks.
- **Responsive UI**: The user interface is responsive and provides real-time feedback during array generation and sum calculation.

## Usage

To run the demo locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/SaleemMalik632/Web-Workers.git
