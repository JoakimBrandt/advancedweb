document.addEventListener("submit", function() {
    event.preventDefault()
    
    const operand1 = document.getElementById("operand1").value
    const operand2 = document.getElementById("operand2").value
    const operation = document.getElementById("operation").value
    let result = 0

    switch (operation) {
        case "add":
            result = +operand1 + +operand2
            break

        case "sub":
            result = operand1 - operand2
            break
        
        case "mul":
            result = operand1 * operand2
            break
        
        case "div":
            
            if (operand2 == 0) {
                result = "Can't divide by zero!"
                break
            }
            else {
                result = operand1 / operand2
                break
            }

    
        default:
            result = "didnt work"
    }
    
    document.getElementById("result").innerText = result
})