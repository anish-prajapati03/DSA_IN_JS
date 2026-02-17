let arr=[8,1,9,6,4,7];
n=arr.length;

for(let i=0 ; i<n-1 ; i++){
    let minindex =i ;
    for(let j=i+1 ; j<n ; j++){
        if(arr[minindex]>arr[j])
            minindex=j;
    }
    if(minindex!=i){
        let temp =arr[minindex];
        arr[minindex]=arr[i];
        arr[i]=temp;
    }

}
console.log(arr);
