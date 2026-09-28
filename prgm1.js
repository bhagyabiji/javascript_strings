str = 'Bhagya'

//startsWith()
console.log('----------using startsWith()----------');
console.log(str.startsWith('Bh'))

//endsWith()
console.log('----------using endsWith()----------');
console.log(str.endsWith('ya'))

//toUpperCase()
console.log('----------using toUpperCase()----------');
str1 = str.toUpperCase()
console.log(str1);

//toLowerCase
console.log('----------using toLowerCase()----------');
str2 = 'BIJI'
console.log(str2.toLowerCase());

//substring()
console.log('----------using substring()----------');
str3 = str.substring(0,4)
console.log(str3);

console.log('-----to get form a position to the end------');

str3 = str.substring(2)
console.log(str3);

//slice()
console.log('------using slice()---------');
str4 = str.slice(0,4)
console.log(str4);

console.log('------using -ve values------');
str5 = str.slice(-5,-2)
console.log(str5);

console.log('---------------');
str6 = str.slice(-5)
console.log(str6);

//using trim()
console.log('-------using trim()--------');
text = '              hel    lo          '
console.log(text.trim());


//using replace()
console.log('-------using replace()--------');
sentance = 'Welcome to Ooty, have a nice day at Ooty'
console.log(sentance.replace('Ooty','Udaipur'));


//using replaceAll()
console.log('-------using replaceAll()--------');
a = 'i work at myntra, office of myntra is far away'
console.log(a.replaceAll('myntra', 'google'));


//using Array.from()
console.log('-------using Array.from()--------');
s = Array.from(str)
console.log(s);

//using split()
console.log('------using split()----');
// m = 'TECHNOLAB'
// s = m.split('O')
// s = m.split('NO')
// s = m.split('')
m = 'LUMINAR TECHNOLAB'
s = m.split(' ')
console.log(s);

