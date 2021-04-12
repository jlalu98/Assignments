function isPrime(num) {
    let primes=true;  
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            primes=false;
        }
    }
    if(primes){
        return true;
    }
    else{
        return false;
    }
}


function primeFinder(min, max) {
    let primes = [];
    let low = min;
    let high = Math.min(low + 100, max);
    let count = 0;

    return new Promise((resolve, reject) => {


        let id = setInterval(() => {

            count += 1;

            for (let i = low; i < high; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }
            low = high;
            high = Math.min(low + 100, max);

            if (low >= max) {
                clearInterval(intervalId);
                resolve(primes);
            }

            else if (count > 2000) {
                clearInterval(id);
                reject("There is a time Out!!!!");
            }

        }, 1);

    });
}

async function asyncFindPrimes(min, max) {

    return await primeFinder(min, max);


}

function findPrimes(min, max) {
    asyncFindPrimes(min, max).then(primes => { console.log(`Primes b/w ${min} & ${max} are : ${primes.length}`); })
        .catch(err => { console.log(`Primes b/w ${min} & ${max} : Error - ${err}`) });


}

findPrimes(2, 104);
findPrimes(2, 1000);
findPrimes(2, 10000000);
findPrimes(2, 100);