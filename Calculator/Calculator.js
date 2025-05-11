const buttonValues = [
    "AC","+/-","%","÷",
    "7","8","9","×",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
]

const rightSymbols = ["÷", "×", "-", "+", "="]
const topSymbols = ["AC", "+/-", "%"]



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

    //add it under div #buttons inside calculator 
    document.getElementById('buttons').appendChild(button)
}