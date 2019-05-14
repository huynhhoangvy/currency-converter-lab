// let userAmount = prompt("insert amount of money");
// let inputCurrency = prompt("insert input currency");
// let outputCurrency = prompt("insert output currency");

// converter(userAmount, inputCurrency, outputCurrency);

// function formatAmount(amount) {
//     return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// }

// function converter(amount, inputCurrency, outputCurrency) {
//     if (isNaN(amount)) {
//         alert("input must be a number")
//         return;
//     } else {
//         let finalOutputCurrency = outputCurrency.toLowerCase();
//         let finalInputCurrency = inputCurrency.toLowerCase();
//         if (finalInputCurrency === "vnd") {
//             switch (finalOutputCurrency) {
//                 case "usd":
//                     // return "${amount} VND equal ${formatAmount(amount / 23216))} USD";
//                     document.getElementById("result").innerHTML = (amount + " VND equal " + formatAmount(amount / 23216) + " USD")
//                     break;
//                 case "krw":
//                     // return "${amount} VND equal ${(formatAmount(amount / 16.62))}";
//                     document.getElementById("result").innerHTML = (amount + " VND equal " + formatAmount(amount / 16.62) + " KRW")
//                     break;
//                 case "idr":
//                     // return "${amount} VND equal ${(formatAmount(amount / 1.61))}";
//                     document.getElementById("result").innerHTML = (amount + " VND equal " + formatAmount(amount / 1.61) + " IDR")
//                     break;
//                 case "eur":
//                     // return "${amount} VND equal ${(formatAmount(amount / 26212))}";
//                     document.getElementById("result").innerHTML = (amount + " VND equal " + formatAmount(amount / 26212) + " EUR")
//                     break;
//                 default:
//                     return "Not supported";
//             }
//         } else if (finalInputCurrency === "usd") {
//             switch (finalOutputCurrency) {
//                 case "vnd":
//                     // return "${amount} USD equal ${(formatAmount(amount * 23216))} VND";
//                     document.getElementById("result").innerHTML = (amount + " USD euqal " + formatAmount(amount * 23216) + " VND")
//                     break;
//                 case "krw":
//                     // return "${amount} USD equal ${(formatAmount(amount * 1189))} KRW";
//                     document.getElementById("result").innerHTML = (amount + " USD euqal " + formatAmount(amount * 1189) + " KRW")
//                     break;
//                 case "idr":
//                     // return "${amount} USD equal ${(formatAmount(amount * 14195))} IDR";
//                     document.getElementById("result").innerHTML = (amount + " USD euqal " + formatAmount(amount * 14195) + " IDR")
//                     break;
//                 case "eur":
//                     // return "${amount} USD equal ${(formatAmount(amount * 0.89))} EUR";
//                     document.getElementById("result").innerHTML = (amount + " USD euqal " + formatAmount(amount * 0.89) + " IDR")
//                     break;
//                 default:
//                     return "Not supported";
//             }
//         } else if (finalInputCurrency === "krw") {
//             switch (finalOutputCurrency) {
//                 case "vnd":
//                     // return "${amount} KRW equal ${(formatAmount(amount / 0.051))} VND";
//                     document.getElementById("result").innerHTML = (amount + " KRW equal " + formatAmount(amount / 0.051) + " VND")
//                     break;
//                 case "usd":
//                     // return "${amount} KRW equal ${(formatAmount(amount / 1189))} USD";
//                     document.getElementById("result").innerHTML = (amount + " KRW equal " + formatAmount(amount / 1189) + " USD")
//                     break;
//                 case "idr":
//                     // return "${amount} USD equal ${(formatAmount(amount / 0.082))} IDR";
//                     document.getElementById("result").innerHTML = (amount + " KRW equal " + formatAmount(amount / 0.082) + " IDR")
//                     break;
//                 case "eur":
//                     // return "${amount} USD equal ${(formatAmount(amount / 1136))} EUR";
//                     document.getElementById("result").innerHTML = (amount + " KRW equal " + formatAmount(amount / 0.082) + " IDR")
//                     break;
//                 default:
//                     return "Not supported";
//             }
//         } else if (finalInputCurrency === "idr") {
//             switch (finalOutputCurrency) {
//                 case "vnd":
//                     // return "${amount} IDR equal ${(formatAmount(amount / 0.62))} VND";
//                     document.getElementById("result").innerHTML = (amount + " IDR equal " + formatAmount(amount / 0.62) + " VND")
//                     break;
//                 case "usd":
//                     // return "${amount} IDR equal ${(formatAmount(amount / 14495))} USD";
//                     document.getElementById("result").innerHTML = (amount + " IDR equal " + formatAmount(amount / 14495) + " USD")
//                     break;
//                 case "krw":
//                     // return "${amount} IDR equal ${(formatAmount(amount * 0.082))} KRW";
//                     document.getElementById("result").innerHTML = (amount + " IDR equal " + formatAmount(amount / 0.082) + " KRW")
//                     break;
//                 case "eur":
//                     // return "${amount} IDR equal ${(formatAmount(amount / 16282))} EUR";
//                     document.getElementById("result").innerHTML = (amount + " IDR equal " + formatAmount(amount / 16282) + " EUR")
//                     break;
//                 default:
//                     return "Not supported";
//             }
//         } else if (finalInputCurrency === "eur") {
//             switch (finalOutputCurrency) {
//                 case "vnd":
//                     // return "${amount} EUR equal ${(formatAmount(amount * 26122))} VND";
//                     document.getElementById("result").innerHTML = (amount + " EUR equal " + formatAmount(amount * 26122) + " VND")
//                     break;
//                 case "usd":
//                     // return "${amount} EUR equal ${(formatAmount(amount / 0.89))} USD";
//                     document.getElementById("result").innerHTML = (amount + " EUR equal " + formatAmount(amount * 0.89) + " USD")
//                     break;
//                 case "krw":
//                     // return "${amount} EUR equal ${(formatAmount(amount * 1136))} KRW";
//                     document.getElementById("result").innerHTML = (amount + " EUR equal " + formatAmount(amount * 1136) + " KRW")
//                     break;
//                 case "idr":
//                     // return "${amount} EUR equal ${(formatAmount(amount * 16282))} IDR";
//                     document.getElementById("result").innerHTML = (amount + " EUR equal " + formatAmount(amount * 16282) + " IDR")
//                     break;
//                 default:
//                     return "Not supported";
//             }
//         }
//     }
// }

// function convertToVnd(){
//     const conversion = 23216;
//     let amount = document.getElementById("amount").value;
//     vndAmount = amount * conversion;
//     document.getElementById("result").innerHTML = (amount + "$ equal " + vndAmount + "VND")
// }

function getInfo(){
    const start0 = document.getElementById("start").value;
    const end0 = document.getElementById("end").value;
    const amount = document.getElementById("amount").value;
    const value = calculate(amount, start0, end0)
    document.getElementById("result").innerHTML = value + "${end0}"
}


function calculate(){

    if (start0 === "vnd" && end0 === "usd") {
        result = amount / 23216;
        document.getElementById("result").innerHTML = (amount + "VND equal " + result + "USD")
    } else if (star0 === "usd" && end0 === "vnd") {
        result = amount * 23216;
        document.getElementById("result").innerHTML = (amount + "USD equal " + result + "VND")
    } else if (star0 === "eur" && end0 === "vnd") {
        result = amount * 26275;
        document.getElementById("result").innerHTML = (amount + "EUR equal " + result + "VND")
    } else if (star0 === "eur" && end0 === "usd") {
        result = amount * 1.12;
        document.getElementById("result").innerHTML = (amount + "EUR equal " + result + "USD")
    } else if (star0 === "vnd" && end0 === "eur") {
        result = amount / 26275;
        document.getElementById("result").innerHTML = (amount + "VND equal " + result + "EUR")
    } else if (star0 === "usd" && end0 === "eur") {
        result = amount / 1.12;
        document.getElementById("result").innerHTML = (amount + "USD equal " + result + "EUR")
    }
}

