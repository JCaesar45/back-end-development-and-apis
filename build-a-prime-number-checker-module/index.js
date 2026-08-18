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

// Export the function using module.exports
module.exports = {
  isPrime
};
