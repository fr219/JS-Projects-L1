const buttonValues = [
    "AC","+/-","%","÷",
    "7","8","9","×",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
]

const rightSymbols = ["÷", "×", "-", "+", "="]
const topSymbols = ["AC", "+/-", "%"]

//get the dispaly element 
const dispaly = document.getElementById('display')

//A,B will hold the 1st and 2nd values to make an operation on them 
let A = 0
let B = null
let operator = null

function clearAll() {
    A = 0
    B = null
    operator = null
}

for (let i=0; i < buttonValues.length; i++) { //here we're going to iterate thought each element in buttonValues  
    //create a button tag <button></button> for each element first
    let value = buttonValues[i]
    let button = document.createElement('button')
    button.innerText = value

    //styling the right and top buttons  
    if (value == "0") {
        button.style.width = "200px"
        button.style.gridColumn = "span 2"
    }
    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500"
    }
    if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2"
        button.style.color = "#1C1C1C"
    }

    //process button click
    button.addEventListener("click", function() {
        //check if it was an operator butto
        if (rightSymbols.includes(value)){

        }
        else if (topSymbols.includes(value)) {
            if (value == "AC") {
                clearAll()
                dispaly.value = ""
            }
            else if (value == "+/-") {
                if (dispaly.value != "" && dispaly.value != "0") {
                    if (dispaly.value[0] == "-") { //remove (-)
                        dispaly.value = dispaly.value.slice(1)
                    }
                    else {
                        dispaly.value = "-" + dispaly.value
                    }
                } 
            }
            else if (value == "%") {
                dispaly.value = Number(dispaly.value)/ 100 
            }
        }
        else { //numbers 
            if (value == ".") {
                //display.value is what we're seeing in the input display & the current value is a decimal place 
                if (dispaly.value != "" && !dispaly.value.includes(value)) { //preven the user from adding more than one '.' 
                    dispaly.value += value
                }
            }
            else if (dispaly.value == "0") {
                dispaly.value = value //handle an edge case where the user might enter mulltiple zeros at the begining 
            }
            else {
                dispaly.value += value //we're adding this button value which is a number into the display 
            }
        }
    })

    //add it under div #buttons inside calculator 
    document.getElementById('buttons').appendChild(button)
}