// 1. Date Object:
// a) Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function whichDayItIs(dateString) {
    const day = new Date(dateString).getDay();
    const daysOfAWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const nameOfTheDay = daysOfAWeek[day];
    return nameOfTheDay;
}

// b. Implement the function to display the day of the week for the current date.

const date = "2023-06-20"
whichDayItIs(date);
// console.log(whichDayItIs(date));



// 2. Math Object:
// a) Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function getSquareRoot(arrayOfNumbers) {
    let sumOfSquareNumber = 0;
    for (const number of arrayOfNumbers) {
        const sqrOfNumber = Math.pow(number, 2);
        sumOfSquareNumber = sumOfSquareNumber + sqrOfNumber;
    }
    const squareRoot = Math.sqrt(sumOfSquareNumber);
    return squareRoot;
}

// b)  Implement the function to display the square root of the sum of squares for an array of numbers.

const numbers = [2, 2];
getSquareRoot(numbers);
// console.log(getSquareRoot(numbers));

// 3. Numbers:
// a)  Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

function isPrimeNum(num) {

    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

// b) Implement the function to check if a given positive integer is a prime number

const intNumber = 51;
isPrimeNum(intNumber);
// console.log(isPrimeNum(51));


// 4.Window Object:
// a) Create a function that opens a new window with a specified URL and dimensions (width and height).

function openNewWindow(url, width, height) {
    const windowDimension = `width=${width},height=${height}`
    window.open(url, "_blank", windowDimension);
}

// b) Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
// openNewWindow("https://www.example.com", 800, 600);


// 5.Navigator Object:
// a) Write a JavaScript function that detects the user's browser name and version using the navigator object.


function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;

    if (userAgent.indexOf("Firefox") !== -1) {
        browserName = "Firefox";
        browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)[1];
    } else if (userAgent.indexOf("Chrome") !== -1) {
        browserName = "Chrome";
        browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)[1];
    } else if (userAgent.indexOf("Safari") !== -1) {
        browserName = "Safari";
        browserVersion = userAgent.match(/Version\/([0-9.]+)/)[1];
    } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+(\.\d+)?)/)[1];
    } else {
        browserName = "Unknown";
        browserVersion = "N/A";
    }

    return {
        name: browserName,
        version: browserVersion
    };
}

// b. Implement the function to display the user's browser name and version.

const browserInfo = getBrowserInfo();
console.log(browserInfo.name, browserInfo.version);



// 6.Geolocation:
// a) a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
}


getCurrentLocation()
    .then(location => {
        console.log("Latitude:", location.latitude);
        console.log("Longitude:", location.longitude);
    })
    .catch(error => {
        console.error("Error retrieving location:", error.message);
    });


// 7.JS Common Events: Implement a webpage with the following functionality:


// a) When the user clicks anywhere on the page, display an alert with the coordinates(x, y) of the click.
// Event listener for mouse click
document.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    // alert(`Clicked at coordinates (X: ${x}, Y: ${y})`);
});


// b) When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
// Event listener for key press
document.addEventListener('keydown', function (event) {
    const keyCode = event.keyCode || event.which;
    // alert(`Pressed key with code: ${keyCode}`);
});

// c) When the user moves the mouse over an image, change the image source to another image of your choice.

// Event listener for mouseover on image
function handleMouseOver(event) {
    const imageElement = event.target;
    imageElement.src = './img/dog.jpg';
}

// Event listener for mouseout on image
function handleMouseOut(event) {
    const imageElement = event.target;
    imageElement.src = './img/cat.jpeg';
}

// Add event listeners
window.addEventListener('load', function () {
    const imageElement = document.getElementById('img-change');
    imageElement.addEventListener('mouseover', handleMouseOver);
    imageElement.addEventListener('mouseout', handleMouseOut);
});


// 8.HTML DOM Document:

// b) Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
// Event handler for button click
function handleClick() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'Button clicked!';
}


// 9.JS DOM Working with Form Input function
// Function to validate the form on submit
function validateForm() {
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous error messages
    clearErrors();

    // Initialize error flag
    let hasError = false;

    // Validate Name
    if (name === '' || !/^[a-zA-Z]+$/.test(name)) {
        displayError('nameError', 'Please enter a valid name (only letters allowed)');
        hasError = true;
    }

    // Validate Email
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        displayError('emailError', 'Please enter a valid email address');
        hasError = true;
    }

    // Validate Password
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        displayError('passwordError', 'Please enter a valid password (minimum 8 characters, one uppercase letter, one lowercase letter, and one digit)');
        hasError = true;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match');
        hasError = true;
    }

    // Prevent form submission if there are errors
    if (hasError) {
        e.preventDefault();
    }
}

// Function to display an error message
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}


// 10.b) DOM Manipulate CSS Class function

// Function to add the "highlight" class to the paragraph
function addHighlightClass() {
    const paragraph = document.getElementById('paragraph');
    paragraph.classList.add('highlight');
}

// 11.b) Create Element & Append Element: Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.
// Function to create and append list items
function createListItems() {
    const ul = document.getElementById('myList');

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = i + '. ' + 'list number' + ' ' + i;
        ul.appendChild(li);
    }
}


// 12.b) DOM Change Attribute Value: Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.
// Function to change the source URL of the image
function changeImageSource() {
    const image = document.getElementById('change-image');
    image.src = './img/dog.jpg';
}


// 13.b) DOM Query Selector: Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.
// Function to select paragraphs with a specific class and change their text color
function changeTextColor() {
    const paragraphs = document.querySelectorAll('.myClass');

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'red';
    }
}


// 14.AJAX Get Request: Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
async function getList() {
    const url = "https://api.example.com/data";
    let res = await fetch(url);
    if (res.status == 200) {
        console.log(res.data);
    } else {
        console.log('error');
    }
}

// 15.AJAX Post Request:
function sendPostRequest() {
    const url = "https://api.example.com/submit";
    const data = {
        name: "John Doe",
        email: "johndoe@example.com"
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch((error) => console.log(error));
}

