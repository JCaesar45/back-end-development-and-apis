const { isPrime } = require('./index');

console.log('=== Testing Prime Number Checker ===\n');

console.log('✅ Prime numbers (should return true):');
console.log('  isPrime(2):', isPrime(2));
console.log('  isPrime(3):', isPrime(3));
console.log('  isPrime(5):', isPrime(5));
console.log('  isPrime(7):', isPrime(7));
console.log('  isPrime(11):', isPrime(11));
console.log('  isPrime(13):', isPrime(13));
console.log('  isPrime(17):', isPrime(17));
console.log('  isPrime(19):', isPrime(19));

console.log('\n❌ Non-prime numbers (should return false):');
console.log('  isPrime(1):', isPrime(1));
console.log('  isPrime(4):', isPrime(4));
console.log('  isPrime(6):', isPrime(6));
console.log('  isPrime(8):', isPrime(8));
console.log('  isPrime(9):', isPrime(9));
console.log('  isPrime(10):', isPrime(10));
console.log('  isPrime(15):', isPrime(15));
console.log('  isPrime(21):', isPrime(21));

console.log('\n🔢 Edge cases:');
console.log('  isPrime(0):', isPrime(0));
console.log('  isPrime(-5):', isPrime(-5));
console.log('  isPrime(2.5):', isPrime(2.5));
