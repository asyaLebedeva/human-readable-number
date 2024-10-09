module.exports = function toReadable (number) {
    let simple = function(num) {
        switch (num) {
         case 0:
           return "zero";
    
         case 1:
           return "one";
    
         case 2:
           return "two";
    
         case 3:
           return "three";
    
         case 4:
           return "four";
    
         case 5:
           return "five";
    
         case 6:
           return "six";
    
         case 7:
           return "seven";
    
         case 8:
           return "eight";
    
         case 9:
           return "nine";
    
         case 10:
           return "ten";
    
         case 11:
           return "eleven";
    
         case 12:
           return "twelve";
    
         case 13:
           return "thirteen";
    
         case 14:
           return "fourteen";
    
         case 15:
           return "fifteen";
    
         case 16:
           return "sixteen";
    
         case 17:
           return "seventeen";
    
         case 18:
           return "eighteen";
    
         case 19:
           return "nineteen";
        };
      };
    
      let tens = function(num) {
         if (num >= 0 && num <= 19) {
                return `${simple(num)}`;
          } else if (num >= 20 && num < 30) {
                return `twenty ${simple(num % 10)}`;
          } else if (num >= 30 && num < 40) {
                return `thirty ${simple(num % 10)}`;
          } else if (num >= 40 && num < 50) {
                return `fourty ${simple(num % 10)}`;
          } else if (num >= 50 && num < 60) {
                return `fifty ${simple(num % 10)}`;
          } else if (num >= 60 && num < 70) {
                return `sixty ${simple(num % 10)}`;
          } else if (num >= 70 && num < 80) {
                return `seventy ${simple(num % 10)}`;
          } else if (num >= 80 && num < 90) {
                return `eighty ${simple(num % 10)}`;
          } else if (num >= 90 && num < 100) {
                return `ninety ${simple(num % 10)}`;
          } else {
                return "This is not a digit";
          };
      };
    
      let hundreds = function(num) {
          if (num === 100) {
                return "one hundred";
          } else if (num > 100 && num < 200) {
                return `one hundred ${tens(num % 100)}`;
          } else if (num === 200) {
                return "two hundred";
          } else if (num > 200 && num < 300) {
                return `two hundred ${tens(num % 100)}`;
          } else if (num === 300) {
                return "three hundred";
          } else if (num > 300 && num < 400) {
                return `three hundred ${tens(num % 100)}`;
          } else if (num === 400) {
                return "four hundred";
          } else if (num > 400 && num < 500) {
                return `four hundred ${tens(num % 100)}`;
          } else if (num === 500) {
                return "five hundred";
          } else if (num > 500 && num < 600) {
                return `five hundred ${tens(num % 100)}`;
          } else if (num === 600) {
                return "six hundred";
          } else if (num > 600 && num < 700) {
                return `six hundred ${tens(num % 100)}`;
          } else if (num === 700) {
                return "seven hundred";
          } else if (num > 700 && num < 800) {
                return `seven hundred ${tens(num % 100)}`;
          } else if (num === 800) {
                return "eight hundred";
          } else if (num > 800 && num < 900) {
                return `eight hundred ${tens(num % 100)}`;
          } else if (num === 900) {
                return "nine hundred";
          } else if (num > 900 && num < 1000) {
                return `nine hundred ${tens(num % 100)}`;
          } else if (num === 1000) {
                return "one thousand";
          } else {
                return "This is not a digit";
        };
      };
      
      if (num >= 0 && num < 100) {
          return tens(num);
      } else if (num >= 100 && num < 1000) {
          return hundreds(num);
      } else {
          return "Try to enter another value";
      }
}
