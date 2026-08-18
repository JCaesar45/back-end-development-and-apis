/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - Returns true if prime, false otherwise
 */
function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }
  
  // 2 is the only even prime number
  if (num === 2) {
    return true;
  }
  
  // Any other even number is not prime
  if (num % 2 === 0) {
    return false;
  }
  
  // Check odd divisors up to the square root of the number
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

<<<<<<< HEAD
// Export the function using module.exports
module.exports = {
  isPrime
};
=======
// Export the function directly
module.exports = isPrime;
>>>>>>> cbf6a2ccaa5b4596cf4c14db18b2c042c0918a97
