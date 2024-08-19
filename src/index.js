module.exports = function toReadable (number) {
    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (number < 10) {
        return units[number];
    }
    else if (number < 20) {
        return teens[number - 10];
    }

    else if (number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + units[number % 10] : "");
    }

    else if (number < 1000) {
        return hundreds[Math.floor(number / 100)] + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
    }
    else {
        return 'too big number';
    }
}
