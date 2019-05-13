let userAmount = prompt("insert amount of money");
let inputCurrency = prompt("insert input currency");
let outputCurrency = prompt("insert output currency");

converter(userAmount, inputCurrency, outputCurrency);

function formatAmount(amount) {
    return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function converter(amount, inputCurrency, outputCurrency) {
    if (isNaN(amount)) {
        alert("input must be a number")
        return;
    } else {
        let finalOutputCurrency = outputCurrency.toLowerCase();
        let finalInputCurrency = inputCurrency.toLowerCase();
        if (finalInputCurrency === "vnd") {
            switch (finalOutputCurrency) {
                case "usd":
                    // return "${amount} VND equal ${formatAmount(amount / 23216))} USD";
                    console.log(amount + " VND equal " + formatAmount(amount / 23216) + " USD")
                    break;
                case "krw":
                    // return "${amount} VND equal ${(formatAmount(amount / 16.62))}";
                    console.log(amount + " VND equal " + formatAmount(amount / 16.62) + " KRW")
                    break;
                case "idr":
                    // return "${amount} VND equal ${(formatAmount(amount / 1.61))}";
                    console.log(amount + " VND equal " + formatAmount(amount / 1.61) + " IDR")
                    break;
                case "eur":
                    // return "${amount} VND equal ${(formatAmount(amount / 26212))}";
                    console.log(amount + " VND equal " + formatAmount(amount / 26212) + " EUR")
                    break;
                default:
                    return "Not supported";
            }
        } else if (finalInputCurrency === "usd") {
            switch (finalOutputCurrency) {
                case "vnd":
                    // return "${amount} USD equal ${(formatAmount(amount * 23216))} VND";
                    console.log(amount + " USD euqal " + formatAmount(amount * 23216) + " VND")
                    break;
                case "krw":
                    // return "${amount} USD equal ${(formatAmount(amount * 1189))} KRW";
                    console.log(amount + " USD euqal " + formatAmount(amount * 1189) + " KRW")
                    break;
                case "idr":
                    // return "${amount} USD equal ${(formatAmount(amount * 14195))} IDR";
                    console.log(amount + " USD euqal " + formatAmount(amount * 14195) + " IDR")
                    break;
                case "eur":
                    // return "${amount} USD equal ${(formatAmount(amount * 0.89))} EUR";
                    console.log(amount + " USD euqal " + formatAmount(amount * 0.89) + " IDR")
                    break;
                default:
                    return "Not supported";
            }
        } else if (finalInputCurrency === "krw") {
            switch (finalOutputCurrency) {
                case "vnd":
                    // return "${amount} KRW equal ${(formatAmount(amount / 0.051))} VND";
                    console.log(amount + " KRW equal " + formatAmount(amount / 0.051) + " VND")
                    break;
                case "usd":
                    // return "${amount} KRW equal ${(formatAmount(amount / 1189))} USD";
                    console.log(amount + " KRW equal " + formatAmount(amount / 1189) + " USD")
                    break;
                case "idr":
                    // return "${amount} USD equal ${(formatAmount(amount / 0.082))} IDR";
                    console.log(amount + " KRW equal " + formatAmount(amount / 0.082) + " IDR")
                    break;
                case "eur":
                    // return "${amount} USD equal ${(formatAmount(amount / 1136))} EUR";
                    console.log(amount + " KRW equal " + formatAmount(amount / 0.082) + " IDR")
                    break;
                default:
                    return "Not supported";
            }
        } else if (finalInputCurrency === "idr") {
            switch (finalOutputCurrency) {
                case "vnd":
                    // return "${amount} IDR equal ${(formatAmount(amount / 0.62))} VND";
                    console.log(amount + " IDR equal " + formatAmount(amount / 0.62) + " VND")
                    break;
                case "usd":
                    // return "${amount} IDR equal ${(formatAmount(amount / 14495))} USD";
                    console.log(amount + " IDR equal " + formatAmount(amount / 14495) + " USD")
                    break;
                case "krw":
                    // return "${amount} IDR equal ${(formatAmount(amount * 0.082))} KRW";
                    console.log(amount + " IDR equal " + formatAmount(amount / 0.082) + " KRW")
                    break;
                case "eur":
                    // return "${amount} IDR equal ${(formatAmount(amount / 16282))} EUR";
                    console.log(amount + " IDR equal " + formatAmount(amount / 16282) + " EUR")
                    break;
                default:
                    return "Not supported";
            }
        } else if (finalInputCurrency === "eur") {
            switch (finalOutputCurrency) {
                case "vnd":
                    // return "${amount} EUR equal ${(formatAmount(amount * 26122))} VND";
                    console.log(amount + " EUR equal " + formatAmount(amount * 26122) + " VND")
                    break;
                case "usd":
                    // return "${amount} EUR equal ${(formatAmount(amount / 0.89))} USD";
                    console.log(amount + " EUR equal " + formatAmount(amount * 0.89) + " USD")
                    break;
                case "krw":
                    // return "${amount} EUR equal ${(formatAmount(amount * 1136))} KRW";
                    console.log(amount + " EUR equal " + formatAmount(amount * 1136) + " KRW")
                    break;
                case "idr":
                    // return "${amount} EUR equal ${(formatAmount(amount * 16282))} IDR";
                    console.log(amount + " EUR equal " + formatAmount(amount * 16282) + " IDR")
                    break;
                default:
                    return "Not supported";
            }
        }
    }
}