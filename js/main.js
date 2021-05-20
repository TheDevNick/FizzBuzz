
/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5, print "Buzz" instead. Otherwise, print FizzBuzz

*/

// Not so great solution, just the first solution that came to mind 😭
for (i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('FizzBuzz')
    }
}

