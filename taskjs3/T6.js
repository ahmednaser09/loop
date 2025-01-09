var AR1=[1,2,3,4,5,6,7]
var largest = AR1[0]

for( var x=1; x< AR1.length ; x++){
    if (AR1[x] > largest ){
        largest = AR1[x];
    }

}
document.write(largest);