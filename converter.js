function convert() {
    const fromUnit = document.getElementById("from-list").value;
    const toUnit = document.getElementById("to-list").value;
    const amount = document.getElementById("amount").value;
    const result = calculate(amount, fromUnit, toUnit).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.getElementById("result").innerHTML = result + " " + toUnit
}


function calculate(amount, fromUnit, toUnit) {

    if (fromUnit === "vnd" && toUnit === "usd") {
        result = amount / 23216;
        // document.getElementById("result").innerHTML = (amount + "VND equal " + result + "USD")
    } else if (fromUnit === "usd" && toUnit === "vnd") {
        result = amount * 23216;
        // document.getElementById("result").innerHTML = (amount + "USD equal " + result + "VND")
    } else if (fromUnit === "eur" && toUnit === "vnd") {
        result = amount * 26275;
        // document.getElementById("result").innerHTML = (amount + "EUR equal " + result + "VND")
    } else if (fromUnit === "vnd" && toUnit === "eur") {
        result = amount / 26275;
        // document.getElementById("result").innerHTML = (amount + "VND equal " + result + "EUR") 
    } else if (fromUnit === "eur" && toUnit === "usd") {
        result = amount * 1.12;
        // document.getElementById("result").innerHTML = (amount + "EUR equal " + result + "USD") 
    } else if (fromUnit === "usd" && toUnit === "eur") {
        result = amount / 1.12;
        // document.getElementById("result").innerHTML = (amount + "USD equal " + result + "EUR")
    }
    return result;
}
