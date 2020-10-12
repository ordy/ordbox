run = () => {
  function5();
}

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
  true ? setTimeout(() =>  resolutionFunc("SUCCESS"), 3000) : setTimeout(() => rejectionFunc("FAIL"), 3000);
});

// regular async function
async function function1() {
  console.log("Function 1");
  console.log("Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("End ---");
}

// Arrow async function
function2 = async () => {
  console.log("Function 2");
  console.log("Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("End ---");
};

// then, catch, finally
function3 = async () => {
  console.log("Function 3");
  console.log("Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e)).finally(console.log("Finally code here"));
  console.log("End ---");
};

// missing async
function4 = () => {
  console.log("Function 4");
  console.log("Start ---");
  promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("End ---");
};

// Chained promises
function5 = async () => {
  console.log("Function 5");
  console.log("Start ---");
  await promiseA
  .then(x => x )
  .then((y => { false ? y+'_CALL2' : "CALL_2 error" }), Error("err") )
  .then(z => z+'_CALL3')
  .then(res => console.log(res))
  .catch(e => console.log("Failed with msg: ", e));
  console.log("End ---");
};