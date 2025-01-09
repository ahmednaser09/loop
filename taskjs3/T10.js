function convertToRoman(num) {
    
    const romanUnits = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
    const romanTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; 
    const romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]; 
    const romanThousands = ["M", "MM", "MMM"]; 

    let result = "";

    const thousands = Math.floor(num / 1000);
    if (thousands > 0) {
        result += romanThousands[thousands - 1];
        num %= 1000;
    }

   
    const hundreds = Math.floor(num / 100);
    if (hundreds > 0) {
        result += romanHundreds[hundreds - 1];
        num %= 100;
    }

    
    const tens = Math.floor(num / 10);
    if (tens > 0) {
        result += romanTens[tens - 1];
        num %= 10;
    }

  
    if (num > 0) {
        result += romanUnits[num - 1];
    }

    return result;
}


document.writeln(convertToRoman(1989));
document.writeln(convertToRoman(2456)); 
document.write(convertToRoman(1234)); 
let head= document.getElementById('head');

console.log(head);

let span=document.getElementsByClassName('My-span')[0];
function changeSpan(){
    span.style.color='red';
}
console.log(span);


let tag=document.getElementsByTagName('p')[1];
tag.style.color='blue';
console.log(tag);

let head1=document.querySelector('.My-span');
console.log(head1);

let body=document.body;
body.style.backgroundColor='pink';
console.log(body);


let link=document.links[0];
link.href = "https://www.youtube.com/";
console.log(link.href);


let form=document.forms;
function enteryourname(){
    console.log('enter your name')

}