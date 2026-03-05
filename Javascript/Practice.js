console.log("Start");
setTimeout(()=> {
    console.log("End");
    Promise.resolve().then(()=> console.log("Mid"));
}, 2000)
console.log("Close");