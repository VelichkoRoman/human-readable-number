module.exports = function toReadable (number) {
  
    const numBeforeTwentys = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    const numTens=[ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const strNum = number.toString().split('');
    // return 0
    if (number == 0) { return "zero";};
    
    // return 1-19 
    if (number <20) { return numBeforeTwentys[number];};

    // return tens (20, 30, 40, ...90)
    if (number >= 20 && number < 100 && number % 10 == 0) { return numTens[strNum[0]];};
    
    // return hundred (100, 200, 300, ...900)
    if (number >=100 && number <1000 && number % 100 == 0) { return numBeforeTwentys[strNum[0]] + ' hundred';};
    
    // return hundred (21-29, 31-39, ...99)
    if ( number >= 20 && number < 100) { return numTens[strNum[0]] + ' ' + numBeforeTwentys[strNum[1]];};

    // return hundred + (tens + beforeTwentys) (101-109...) + recursion (for return 11-19)
    if ( number >= 100 && number < 1000) { return numBeforeTwentys[strNum[0]] + ' hundred ' + toReadable (+(strNum[1] + strNum[2]));};
    
}
