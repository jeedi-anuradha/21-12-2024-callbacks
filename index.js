


/**function processNumber(num,callback){
    callback(num);
}
processNumber(10,num=>console.log(num+num));

function foreachElement(arr,callback){
    callback(arr);
}
foreachElement([1,2,5,6,8],arr=>{
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
})

function sayHello(name,callback){
    setTimeout(()=>
        callback(`Hello ${name}`),1000)

}
sayHello('Anu',res=>console.log(res),);

function checkEven(num,callback1,callback2){
    if(num%2==0){
        callback1(num)
    }
    else{
        callback2(num);        
    }
}
let a=num=>{
    console.log(`Even number : ${num}`)
}
let b=num=>{
    console.log(`Odd number : ${num}`)
}
checkEven(16,a,b);*/

function performTask(num,callback1,callback2){
    let res=callback1(num)
    res=callback2(res)
    console.log(res)
}
let a=num=>num+5;
let b=res=>res*2;
performTask(4,a,b)


