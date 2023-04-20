function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    result = num1 + num2
    
    document.getElementById("result").textContent = result;
}