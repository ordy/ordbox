runCallback = () => {
  functionCB1();
}

runAsync = () => {
  let fakeAPIcall = new Promise((resolutionFunc,rejectionFunc) => {
    true ? setTimeout(() =>  resolutionFunc("SUCCESS"), 3000) 
    : setTimeout(() => rejectionFunc("FAIL"), 3000);
  });
  fnIndex = document.getElementById("fn-select").value - 1;
  functionList[fnIndex](fakeAPIcall);
}

// callback function
const functionCB1 = () => {
  console.log("Function 1");
  console.log("--- Start ---");
  setTimeout(() => {
    fetchValue(upperCaseName)
  }, 3000);
  console.log(">>> End of function 1");
}
fetchValue = (callback) => {
  console.log(">>> Fetching data")
  callback(navigator.oscpu);
}
upperCaseName = (res) => {
  console.log(">>> Starting callback");
  console.log("Your OS name:", res.toUpperCase());
  console.log("--- End of Callback ---");
}

// regular async function
async function functionP1(promiseA) {
  console.log("Function 1");
  console.log("--- Start ---");
  await promiseA.then(x => {
    console.log(x)
  }).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
}

// arrow async function
const functionP2 = async (promiseA) => {
  console.log("Function 2");
  console.log("--- Start ---");
  await promiseA.then(x => {
    console.log(x)
  }).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
};

// then, catch, finally
const functionP3 = async (promiseA) => {
  console.log("Function 3");
  console.log("--- Start ---");
  await promiseA.then(x => {
    console.log(x)
  }).catch(e => console.log("Failed with msg: ", e)
  ).finally(console.log("Finally code here"));
  console.log("--- End ---");
};

// missing async
const functionP4 = (promiseA) => {
  console.log("Function 4");
  console.log("--- Start ---");
  promiseA.then(x => {
    console.log(x)
  }).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
};

// chained promises
const functionP5 = async (promiseA) => {
  console.log("Function 5");
  console.log("--- Start ---");
  await promiseA
  .then(x => x+' -> CALL1')
  .then(y => y+' -> CALL2')
  .then(z => z+' -> CALL3')
  .then(res => console.log(res))
  .catch(err => console.log("Failed with msg: ", err));
  console.log("--- End ---");
};

// rejected promise chain
const functionP6 = async (promiseA) => {
  console.log("Function 6");
  console.log("--- Start ---");
  const pass = true;
  await promiseA
  .then(a =>  pass ? a+' -> CALL1' : Promise.reject('Call A err'))
  .then(b => !pass ? b+' -> CALL2' : Promise.reject('Call B err'))
  .then(c =>  pass ? c+' -> CALL3' : Promise.reject('CAll C err'))
  .then(res => console.log(res))
  .catch(err => console.log("Failed with msg: ", err));
  console.log("--- End ---");
};
// Note:
// a catch will handle everything above
// multiple catch can be used per chain
// a catch can throw an error to another catch

const functionList = [
  functionP1,
  functionP2,
  functionP3,
  functionP4,
  functionP5,
  functionP6
];