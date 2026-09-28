text = 'hai hello all hello world all'
//wap to get the word count fromt the given text
// o/p = {hai:1 , hello:2 , all:2 , world:1}

space = text.split(' ')
count = {}

// for(item of space){
//     if(item in count){
//         count[item] += 1
//     }
//     else{
//         count[item] =1
//     }
// }
// console.log(count);

console.log('------------');

text.split(' ').forEach((item) =>item in count?count[item] += 1:count[item] =1);
console.log(count);

console.log('------------');

//numArray = [10,20,30,20,40,50,50,60,10]
// wap to find the number count

numArray = [10,20,30,20,40,50,50,60,10]
count = {}

// for(item of numArray){
//     if(item in count){
//         count[item] += 1
//     }
//     else{
//         count[item] = 1
//     }
// }
// for(item in count){
//     console.log(`${item} => ${count[item]}`);
    
// }


numArray.forEach((item) => item in count?count[item]+=1:count[item]=1)
console.log(count);

console.log('---------------------');

//pattern = ABCBCAA
//find the 1st recursive letter (o/p - B)

pattern = 'ABCBCAA'
otp = {}
isPresent = false
// words = Array.from(pattern)
words = pattern.split('')

for(letter of words){
    if(letter in otp){
        console.log(`First recursive letter : ${letter}`);
        isPresent = true
        break
    }
    else{
        otp[letter]=1
    }
}

!isPresent && console.log('No recursion');


console.log('---------------------');




