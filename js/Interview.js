


function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sentences = S.split(/[,.?]/);
    let numArray = [];
    console.log(sentences);

    for (var i = 0;i < sentences.length; i++) {
        let thisSentence = sentences[i];
        let words = thisSentence.split(' ');
        wordCount = words.length;
        console.log()
        numArray.push(wordCount);
    }


    let longest = Math.max(...numArray);
    return longest;
}
let testMe = 'We test coders. Give us a try?';
