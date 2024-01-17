// promise:It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully
// Here are some of the benefits of using promises in JavaScript:
        // They make your code more readable and easier to understand.
        // They help you to avoid callback hell.
        // They can be used to implement complex asynchronous operations in a simple way.


let promise=new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },1000)
})
promise.then(
    (value) => {
        console.log("Fulfilled:", value);
    },
    (reason) => {
        console.error("Rejected:", reason);
    }
)
promise.catch((error)=>{
    console.error("Caught an error:", error);})



let promise1=Promise.resolve(1);
let promise2=Promise.resolve(2);
let promise3=Promise.resolve(3);
// Promise.all changes state to resolved if all prmises resolved successfully if only one promise rejected then state will be rejected
Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log("All resolved",value)
}).catch((error)=>{
    console.log("one promises rejected",error)
})