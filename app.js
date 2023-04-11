//Write a function that creates a closure and returns a function that can adda specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it

function createAdder(numToAdd) {
    // numToAdd is captured by the closure
    return function(num) {
      return num + numToAdd;
    };
}

const addFive = createAdder(5);

console.log(addFive(10)); // Output: 15
console.log(addFive(100)); // Output: 105

//Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

function searchArray(array, value) {
    // Base case: the array is empty, so the value isn't found
    if (array.length === 0) {
      return false;
    }
    
    // Recursive case: check if the first element of the array is the value
    if (array[0] === value) {
      return true;
    }
    
    // Recursive case: remove the first element of the array and search the rest
    return searchArray(array.slice(1), value);
}

const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3)); // Output: true
console.log(searchArray(arr, 6)); // Output: false


//Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
    const newParagraph = document.createElement('p');
    const textNode = document.createTextNode(text);
    newParagraph.appendChild(textNode);
    document.body.appendChild(newParagraph);
}

addParagraph('This is a new paragraph.');

//Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

function addListItem(text) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);
    ul.appendChild(li);
}
addListItem('New list item');


//Write a function that changes the background color of an HTML element.The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');

//Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
const myObject = {name: 'John', age: 30};
saveObjectToLocalStorage('myKey', myObject);

const storedObject = JSON.parse(localStorage.getItem('myKey'));
console.log(storedObject); // {name: 'John', age: 30}

//Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    return storedObject ? JSON.parse(storedObject) : null;
}

const myObject = getObjectFromLocalStorage('myKey');
console.log(myObject); // the object stored with the 'myKey' key


//Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
      }
    }
    
    // Retrieve the object from localStorage and return it as a new object
    const retrievedObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return retrievedObj;
}

const myObj = { 
    name: 'John',
    age: 30,
    email: 'john@example.com'
};
const retrievedObj = saveObjectToLocalStorage(myObj);
console.log(retrievedObj); // the object retrieved from localStorage

  
