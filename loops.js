//============================================================
// Loops

// Question 3
// Write a program to print numbers from 12 to 33 and
// also at the end print the sum of all these numbers.

function loopNumbers() {
  let count = 0;
  for (let i = 12; i <= 33; i++) {
    console.log(i);
    count += i;
  }
  console.log(count);
}

// loopNumbers();

//============================================================
// Question 6
// Write a program to print 1-100 prime numbers
// Prime numbers are only divisible by 1 or itself

function isPrime() {
    var maxNum = 100; // find prime from 1 to 100
    var counter = 0; // Increase with prime finding
    var primeNumbers = "Prime Numbers:" // Disply print label
    // i = 2 bcoz prime numbers start with 2
    for(let i=2; i <=maxNum; i++ ){
        counter = 0;
        for(let j=2; j<=maxNum; j++){
            if(i>=j && i%j == 0){
                counter++;
            }
        }if(counter == 1){
            primeNumbers = primeNumbers + i + " ";
        }
    } console.log(primeNumbers);
}
// isPrime();
 
//======================================

function isPrime(){
    let num = 100;
    let counter = 0;
    let primeNumbers = 'prime number'
    for(let i =2; i<=num; i++){
        for(let j=2; j<=num; j++){
            if(i>=j && j%i == 0){
                counter++
            }
        }
    }if(counter == 1){
        primeNumbers = primeNumbers + i + " "
    } console.log(primeNumbers)
}

//isPrime();

///==============================
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
 // console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
 // console.log([4, 5, 8, 12].find(isPrime)); // 5