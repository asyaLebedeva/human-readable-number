module.exports = function toReadable (number) {
    let simple = function(number) {
        switch (number) {
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
    
      let tens = function(number) {
         if (number >= 0 && number <= 19) {
                return `${simple(number)}`;
          } else if (number >= 20 && number < 30) {
                return `twenty ${simple(number % 10)}`;
          } else if (number >= 30 && number < 40) {
                return `thirty ${simple(number % 10)}`;
          } else if (number >= 40 && number < 50) {
                return `fourty ${simple(number % 10)}`;
          } else if (number >= 50 && number < 60) {
                return `fifty ${simple(number % 10)}`;
          } else if (number >= 60 && number < 70) {
                return `sixty ${simple(number % 10)}`;
          } else if (number >= 70 && number < 80) {
                return `seventy ${simple(number % 10)}`;
          } else if (number >= 80 && number < 90) {
                return `eighty ${simple(number % 10)}`;
          } else if (number >= 90 && number < 100) {
                return `ninety ${simple(number % 10)}`;
          } else {
                return "This is not a digit";
          };
      };
    
      let hundreds = function(number) {
          if (number === 100) {
                return "one hundred";
          } else if (number > 100 && number < 200) {
                return `one hundred ${tens(number % 100)}`;
          } else if (number === 200) {
                return "two hundred";
          } else if (number > 200 && number < 300) {
                return `two hundred ${tens(number % 100)}`;
          } else if (number === 300) {
                return "three hundred";
          } else if (number > 300 && number < 400) {
                return `three hundred ${tens(number % 100)}`;
          } else if (number === 400) {
                return "four hundred";
          } else if (number > 400 && number < 500) {
                return `four hundred ${tens(number % 100)}`;
          } else if (number === 500) {
                return "five hundred";
          } else if (number > 500 && number < 600) {
                return `five hundred ${tens(number % 100)}`;
          } else if (number === 600) {
                return "six hundred";
          } else if (number > 600 && number < 700) {
                return `six hundred ${tens(number % 100)}`;
          } else if (number === 700) {
                return "seven hundred";
          } else if (number > 700 && number < 800) {
                return `seven hundred ${tens(number % 100)}`;
          } else if (number === 800) {
                return "eight hundred";
          } else if (number > 800 && number < 900) {
                return `eight hundred ${tens(number % 100)}`;
          } else if (number === 900) {
                return "nine hundred";
          } else if (number > 900 && number < 1000) {
                return `nine hundred ${tens(number % 100)}`;
          } else if (number === 1000) {
                return "one thousand";
          } else {
                return "This is not a digit";
        };
      };
      
      if (number >= 0 && number < 100) {
          return tens(number);
      } else if (number >= 100 && number < 1000) {
          return hundreds(number);
      } else {
          return "Try to enter another value";
      }
};
