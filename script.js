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

    //phase 3
    const input5 = document.getElementById("input5").value;
    const input6 = document.getElementById("input6").value;
    let result3;

    const num5 = parseFloat(input5);
    const num6 = parseFloat(input6);
    result = num5 * num6
    
    document.getElementById("result3").textContent = result;
    
}
