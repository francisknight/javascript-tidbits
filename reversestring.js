let mystring = "sunny";

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString(mystring);

/* Notes 
	Step 1. Use the split() method to return a new array
	Step 2. Use the reverse() method to reverse the new created array
	Step 3. Use the join() method to join all elements of the array into a string
	Step 4. Return the reversed string
*/
