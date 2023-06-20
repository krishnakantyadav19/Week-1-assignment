/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep(milliseconds) {
//     const start = new Date().getTime();
//     while (new Date().getTime() - start < milliseconds) {
//       // Busy-waiting
//     }
//   }

  
// console.log("Before sleep");
// sleep(3000); // Sleep for 3 seconds
// console.log("After sleep");
function sleep(milliseconds) {
    return new Promise((resolve,rejects)=>{
        const start = Date.now();
        while (Date.now() < start +milliseconds*1000) {
                  // Busy-waiting
                }
                resolve()
    })
}

sleep(5).then(() => {
    console.log("5 seconds have passed!");
  });
