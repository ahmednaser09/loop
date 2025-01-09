var AR1=[2,3,4,5,6]
var smallest = AR1[0]

for( var x=1; x< AR1.length ; x++){
    if (AR1[x] < smallest ){
        smallest = AR1[x];
    }

}
document.write(smallest);