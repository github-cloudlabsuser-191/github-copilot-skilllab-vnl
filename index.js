// take a sentence as input
const sentence = "Hello, world!";

// reverse the input sentence
const reversedSentence = sentence.split("").reverse().join("");

// the start of the sentence must start with a capital
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);



const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ],
  [
    { name: 'Alice', age: 27 },
    { name: 'Eve', age: 32 },
    { name: 'Charlie', age: 40 }
  ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice', 'Eve', 'Charlie']

