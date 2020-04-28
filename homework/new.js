let num =[1,5,-9, 100, 45];
let max = 0;
for (let i = 0; i < num.length; i++) {
    
    if (num[i] < num[i + 1]){
        max = num[i + 1];
    }
    

    
    
}
console.log(max);
