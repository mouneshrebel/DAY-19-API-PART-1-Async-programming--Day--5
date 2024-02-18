// API
const url = "https://bible-api.com/";

// VARIABLES
let bookName = document.getElementById("bookName");
let chapter = document.getElementById("chapter");
let verse = document.getElementById("verse");
let ref = document.getElementById("reference");
let content = document.getElementById("verse-container");
let versionname = document.getElementById("versionname");
let translationName = document.getElementById("translationName");

// SEARCH FUNCTION
function searchFunc() {
	let x = `${bookName.value} ${chapter.value}:${verse.value}?translation=${translationName.value};`;
	fetchVerse(x);
}

// FUNCTION TO GET DATA FROM SERVER
async function fetchVerse(id) {
	try {
		let res = await fetch(url + id);
		let data = await res.json();
		// console.log(data)
		update(data);
		versePlus = verse.value;
	} catch (error) {
		console.error(error);
	}
}

function update(data) {
	ref.innerHTML = data.reference || "NA";
	versionname.innerHTML = data.translation_name || "NA";
	content.innerHTML = data.text || "Over!";
}

// NEXT PREVIOUS BUTTONS FUNCTION
let versePlus = Number(verse.value);

function increment() {
	if (ref.innerHTML == "NA") {
		alert("There is no verse in this reference");
		versePlus = 0;
	}

	versePlus++;
	verse.value = versePlus;
	let x = `${bookName.value} ${chapter.value}:${versePlus}`;
	fetchVerse(x);
}

function decrement() {
	versePlus--;
	verse.value = versePlus;
	let x = `${bookName.value} ${chapter.value}:${versePlus}`;
	fetchVerse(x);
	if (versePlus <= 0) {
		alert("Increase the verse number to above 0");
	}
}

//DATALIST FOR BOOKS NAME
let bknArr = [
	"Genesis",
	"Exodus",
	"Leviticus",
	"Numbers",
	"Deuteronomy",
	"Joshua",
	"Judges",
	"Ruth",
	"1 Samuel",
	"2 Samuel",
	"1 Kings",
	"2 Kings",
	"1 Chronicles",
	"2 Chronicles",
	"Ezra",
	"Nehemiah",
	"Esther",
	"Job",
	"Psalms",
	"Proverbs",
	"Ecclesiastes",
	"Song of Solomon",
	"Isaiah",
	"Jeremiah",
	"Lamentations",
	"Ezekiel",
	"Daniel",
	"Hosea",
	"Joel",
	"Amos",
	"Obadiah",
	"Jonah",
	"Micah",
	"Nahum",
	"Habakkuk",
	"Zephaniah",
	"Haggai",
	"Zechariah",
	"Malachi",
	"Matthew",
	"Mark",
	"Luke",
	"John",
	"Acts",
	"Romans",
	"1 Corinthians",
	"2 Corinthians",
	"Galatians",
	"Ephesians",
	"Philippians",
	"Colossians",
	"1 Thessalonians",
	"2 Thessalonians",
	"1 Timothy",
	"2 Timothy",
	"Titus",
	"Philemon",
	"Hebrews",
	"James",
	"1 Peter",
	"2 Peter",
	"1 John",
	"2 John",
	"3 John",
	"Jude",
	"Revelation",
];
let dataList = document.getElementById("bookList");

for (let i = 0; i < bknArr.length; i++) {
	let bkn = document.createElement("option");
	bkn.setAttribute("id", bknArr[i]);
	dataList.appendChild(bkn);
	bkn.value = bknArr[i];
}
