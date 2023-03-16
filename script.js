const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//accepts an array of strings and returns a new array where each of the elements are lower-cased
function arrToLowerCase (arr) {
	const newArr = [];
	for (let item of arr) {
		newArr.push(item.toLowerCase());
	}
	return newArr;
}

const lowFruit = arrToLowerCase(fruit);

//accepts a string, an array of lower cased elements, and a string of elements with upper cases. Lowercases the string, then checks if any of the lowercased array elements contain that string. If any do, uses that element's index to return that same element from the regularly-cased array in a new array
function search(str, lowArr, regArr) {
	const results = [];
	const lowStr = str.toLowerCase();
	if (str) {
		for (let item of lowArr) {
			if (item.includes(lowStr)) {
				let idx = lowArr.indexOf(item);
				results.push(regArr[idx]);
			}
		}
		return results;
	}
}

/* removes all suggestions from HTML, takes what is typed in the input and creates a suggestions array by calling search on that string, then displays those suggestions by calling showSuggestions() */
function searchHandler(e) {
	suggestions.innerHTML = '';
	if (e.target.value !== '') {
		const typed = e.target.value; 
		const results = search(typed, lowFruit, fruit);
		showSuggestions(results, suggestions);
	}
}

/* creates new elements for each suggested fruit and displays them */
function showSuggestions(results) {
	for (let item of results) {
		const newSuggestion = document.createElement('li');
		newSuggestion.innerText = item;
		suggestions.append(newSuggestion);
	}
}

/* moves the innerText of the fruit suggestion clicked into the input field */
function useSuggestion(e) {
	const selectedFruit = e.target.innerText;
	input.value = selectedFruit;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);