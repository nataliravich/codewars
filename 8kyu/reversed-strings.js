/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str) {
	let res = '';
	for (let i = str.length - 1; i >= 0; i--) {
		res += str[i];
	} return res;
}

/* function reverseString(str) {
Step 1. Use the split() method to return a new array
var splitString = str.split(""); // var splitString = "hello".split("");
["h", "e", "l", "l", "o"]

Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
["o", "l", "l", "e", "h"]

Step 3. Use the join() method to join all elements of the array into a string
var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
"olleh"

Step 4. Return the reversed string
return joinArray; // "olleh"
}
reverseString("hello"); */

function reverseString(str) {
	return str.split("").reverse().join("");
}
reverseString("hello");

/* Метод .split() разбивает объект String на массив строк, разделяя строку на подстроки.
Метод .reverse() переворачивает массив на месте. Первый элемент массива становится последним, а последний — первым.
Метод .join() объединяет все элементы массива в строку. */