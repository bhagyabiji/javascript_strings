sentance = 'good morning all'
//wap to print all vowels from the given string

vowels = ['a','e','i','o','u','A','E','I','O','U']

newArray = Array.from(sentance)
o = []
for(let char of newArray){
    if(vowels.includes(char)){
        o.push(char)
    }
}
console.log(o);

console.log('---------------------------');

Array.from(sentance).filter((char) => vowels.includes(char)).forEach((item) => console.log(item))


console.log('---------------------------');

//wap to check whether a given string is a palindrome or not
// malayalam

str = 'malayalam'
pal = ''

for(i=str.length-1;i>=0;i--){
    pal += str[i]
}
console.log(pal==str?'Is a palindrome':'Not a palindrome');

console.log('---------------------------');