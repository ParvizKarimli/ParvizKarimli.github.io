var myHeading = document.querySelector('h1');

document.querySelector('html').onclick = function() {
	if (myHeading.textContent == "The Internet") {
		myHeading.textContent = "Hello world!";
	} else {
		myHeading.textContent = "The Internet";
	}
};


var myImg = document.querySelector('img');

function changeImgFn() {
	var mySrc = myImg.getAttribute('src');
	if (mySrc === "images/Internet_map_1024.jpg") {
		myImg.setAttribute('src', "images/1024px-Applications-internet.svg.png");
	} else {
		myImg.setAttribute('src', "images/Internet_map_1024.jpg");
	}
}

myImg.onclick = function() {
	changeImgFn();
};


var myBtn = document.querySelector("button");
var myCode = document.querySelector("code");

function setName() {
	var myName = prompt("Enter name: ");
	localStorage.setItem('name', myName);
	myCode.textContent = "My name is " + myName;
}

if (!localStorage.getItem('name')) {
	setName();
} else {
	var storedName = localStorage.getItem('name');
	myCode.textContent = "My stored name is " + storedName;
}

myBtn.onclick = function() {
	setName();
};