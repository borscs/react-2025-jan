//Primitives


let age: number;
age = 20;

let userName: string;
userName = "John";

let isTrue: boolean;
isTrue = true;

// More complex types

let hobbies: string[];
hobbies = ["January", "February", "March"];

let person: {
	name: string;
	age: number;
}

person = {
	name: 'ASD',
	age: 32
}

let persons: {
	name: string;
	age: number;
}[];

let course: string | number = 'React - The Complete Guide';
console.log(course);
course = 12345
console.log(course);

// Functions & types

function add(a: number, b: number) {
	return a + b;
}

// Generics

function insertArray<T>(arr: T[], value: T) {
	return [value, ...arr];
}

const demoArray = [1, 2, 3];

const updatedArray = insertArray(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertArray(['a', 'b', 'c'], '1') // ['d','a', 'b', 'c']
console.log(updatedArray);
console.log(stringArray);

