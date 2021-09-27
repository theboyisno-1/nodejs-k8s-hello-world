const express = require('express');

const app = express();
const host = "0.0.0.0";
const port = process.env.NODE_ENV || 3000;

// set headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// calculate primes between 0 to iteration range with multiplier
function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = Math.round(i * (multiplier * Math.random()));
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                // not prime
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
    }
    return primes;
}

// request handler for 'prime' endpoint 
const getPrimes = async (req, res) => {
    const multiplier = 1000000000;
    let iteration = Math.ceil(Math.random() * (500 - 100) + 100);
    let result = await calculatePrimes(iteration, multiplier);
    res.json({"Iterations": iteration, "Multiplier": multiplier, "Primes": result});
}

// send primes between a range: This is to put load on server
app.get('/prime', getPrimes);

// greet with current timestamp
app.get('/greet', (req, res) => {
    const currTime = new Date();
    res.send(`Hello from the other side! Current time is ${currTime}`);
});

// send 200 OK for health-check
app.get('/health-check', (req, res) => {
    res.sendStatus(200);
});

// send 404 for any other route
app.get('*', (req, res) => {
    res.send('404').status(404).end();
});

// start listening
app.listen(port, host, () => {
    console.log(`Greeting app listening at http://${host}:${port}`);
});
