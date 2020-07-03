const questions = [
  {
    question: 'Where is Taj Mahal Located?',
    choices: ['Mumbai', 'Agra', 'New Delhi', 'None of these'],
    correct: 2,
    desc: 'Common Fact',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/taj.jpeg',
  },
  {
    question: 'Who won the IPL title 4 times?',
    choices: [
      'Mumbai Indians',
      'Chennai Super Kings',
      'Sunrisers Hyderabad',
      'Kolkata Knight Riders',
    ],
    correct: 1,
    desc: 'Mumbai Indians won IPL in 2013,2015,2017 and 2019.',
    image: 'None',
  },
  {
    question: 'Where is statue of Ahinsa located?',
    choices: ['Mysooree', 'Patna', 'Nashik', 'Thiruvananthapuram'],
    correct: 3,
    desc:
      'The Statue of Ahimsa (121 feet tall), depicts the first Jain Tirthankara, Rishabhanatha, is located at Mangi-Tungi, near Nashik in the Indian state of Maharashtra.',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/statue.jpg',
  },
  {
    question: "Which of the following is called 'City of Lakes' ?",
    choices: ['New Delhi', 'Mount Abu', 'Nainital', 'Udaipur'],
    correct: 4,
    desc:
      'Set around a series of artificial lakes, Udaipur is also known for its lavish royal residences',
    image: 'None',
  },
  {
    question: 'Which is the first smart city in world?',
    choices: ['New Jersey', 'Seoul', 'Vatican City', 'California'],
    correct: 2,
    desc:
      "Seoul has been immersed in smart technology for years, having been named the world's first smart city back in 2014.",
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/seoul.jpeg',
  },
  {
    question: 'Where is Gateway of India Located?',
    choices: ['Mumbai', 'Chennai', 'New Delhi', 'Hyderabad'],
    correct: 1,
    desc: 'Common Fact',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/gateway.jpeg',
  },
  {
    question: 'Which team won the IPL in 2019?',
    choices: [
      'Mumbai Indians',
      'Chennai Super Kings',
      'Sunrisers Hyderabad',
      'Kolkata Knight Riders',
    ],
    correct: 1,
    desc:
      'Mumbai Indians won IPL in 2019, defeating Chennai Super Kings in the finals.',
    image: 'None',
  },
  {
    question: 'Which is the tallest waterfalls in the world ?',
    choices: ['Jog Falls', 'Tugela Falls', 'Angel Falls', 'Victoria Falls'],
    correct: 3,
    desc:
      ' Angel Falls (Salto ÄÂngel) in Venezuela is the highest waterfall in the world. The falls are 3230 feet in height.',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/fall.jpeg',
  },
  {
    question: "Which of the following is called 'the Land of Rising Sun' ?",
    choices: ['India', 'China', 'U.S.A', 'Japan'],
    correct: 4,
    desc:
      'According to the words of the Japanese envoy himself, that name was chosen because the country was so close to where the sun rises. In any event, the name stuck, and for the last 1400 years or so, the world has referred to Japan as Nippon, the land of the rising sun.',
    image: 'None',
  },
  {
    question: 'Which is the southernmost point of India?',
    choices: ['Siachin', 'Indira Point', 'Thiruvananthapuram', 'Kanyakumari'],
    correct: 2,
    desc:
      "The southernmost point of the Indian territory is Indira Point in the Andaman & Nicobar Islands. It's Cape Comorin or Kanyakumari that is the southernmost point in mainland India.",
    image: 'None',
  },
  {
    question:
      'Which of the following functions treats its arguement string as if it had actually been coded at that point in the program?',
    choices: ['bind()', 'apply()', 'eval()', 'with()'],
    correct: 3,
    desc:
      "eval() is a function used to cheat lexical scope. For eg. eval('var a=2')",
    image: 'None',
  },
  {
    question:
      'What would be the output of following code? console.log(Number([]))',
    choices: ['NaN', '0', "'0'", "'NaN'"],
    correct: 2,
    desc: 'Common Fact',
    image: 'None',
  },
  {
    question: 'Which of the following is not an "ES6" feature ?',
    choices: [
      'let statement',
      'Promises',
      'arrow functions',
      'Strict Equality(===)',
    ],
    correct: 4,
    desc:
      'The Strict Equality feature was also in the older versions of Javascript. However, other features had been introduced in ES6 (2015) .',
    image: 'None',
  },
  {
    question:
      "What is the output of the code snippet? var obj={a:42,b:'hello'}; var b='a'; console.log(obj[b]+obj.b);",
    choices: ['42hello', 'hello42', '84', 'hellohello'],
    correct: 1,
    desc:
      "When[] is used to access property, the property name should be in double quotes or single quotes. Also, when '+' is used with a string, it is used as 'concatenation operator'",
    image: 'None',
  },
  {
    question: "Which of the following brands invented 'JavaScript'?",
    choices: ['Mozilla', 'Netscape', 'Opera', 'Google'],
    correct: 2,
    desc:
      'Netscape is a brand name associated with the development of the Netscape web browser. It created the JavaScript programming language, the most widely used language for client-side scripting of web pages, to be used in its Netscape browser, at first.',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/browser.jpg',
  },
  {
    question:
      "What is the output of below given code snippet? var a=[1,2,3]; var b=[1,2,3]; var c='1,2,3' console.log(a==c) console.log(b==c) console.log(a==b)",
    choices: [
      'true, true, false',
      'false, false, true',
      'true, true, true',
      'false, false, false',
    ],
    correct: 1,
    desc:
      "On comparing objects in JS (Arrays are also built-in objects in JS), values are actually held by references. So, only references are compared, not values. Arrays are by default, coerced to all values with comma, in a string, when compared with a string. For eg. [1,2,3] becomes '1,2,3'",
    image: 'None',
  },
  {
    question: 'If x!==x in JavaScript, find the value of x?',
    choices: ['undefined', 'NaN', 'null', 'window object'],
    correct: 2,
    desc:
      'NaN is not equal to NaN. This concept is used to polyfil the function for isNaN() for older browsers.',
    image: 'None',
  },
  {
    question: 'What would parseInt(1/0,19) return ?',
    choices: ['Infinity', 'NaN', '19', '18'],
    correct: 4,
    desc:
      "The second arguement of parseInt() is the radix value. When 1/0 is performed, it returns 'Infinity', the radix value being 19 (means symbols from 0-9 and a-i used), it returns 'i', so output is equivalent to decimal value of '18' ",
    image: 'None',
  },
  {
    question: 'Who developed JavaScript?',
    choices: [
      'Brendan Eich',
      'Guido van Rossum',
      'James Gosling',
      'Bjarne Stroustrup',
    ],
    correct: 1,
    desc:
      'Brendan Eich, a Netscape Communications Corporation programmer, created JavaScript in September 1995. ',
    image: 'https://quizzing.s3.ap-south-1.amazonaws.com/js_dev.jpeg',
  },
];
export default questions;
