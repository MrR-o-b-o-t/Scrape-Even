// get values from button click
function getValues() {
    //get values from page
    let startValue = document.getElementById("startValue").value
    let endValue = document.getElementById("endValue").value
    
    startValue = parseInt(startValue)
    endValue = parseInt(endValue)

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNums(startValue, endValue)
        displayNums(numbers)
    } else {
        alert("You must enter intergers")
    }
}

// generate numbers from start value to the end value
function generateNums(startValue, endValue) {

    let numbers = []

    for(let i = startValue; i <= endValue; i++) {
        numbers.push(i)
    }

    return numbers
}

// display numbers in bold
function displayNums(numbers) {
    let templateRows = "even"
    let className 
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if(number % 2 == 0) {
            className = "even"
        } else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }
    document.getElementById("results").innerHTML = templateRows
}