function calculate(operation) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    let result;
    
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    result = num1 + num2
    
    document.getElementById("result").textContent = result;

    // phase 2 

    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;
    let result2;

    const num3 = parseFloat(input3);
    const num4 = parseFloat(input4);
    result = num3 - num4
    
    document.getElementById("result2").textContent = result;
}
