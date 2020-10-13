run = () => {
  function7();
}

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
  true ? setTimeout(() =>  resolutionFunc("SUCCESS"), 3000) : setTimeout(() => rejectionFunc("FAIL"), 3000);
});

// regular async function
async function function1() {
  console.log("Function 1");
  console.log("--- Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
}

// arrow async function
function2 = async () => {
  console.log("Function 2");
  console.log("--- Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
};

// then, catch, finally
function3 = async () => {
  console.log("Function 3");
  console.log("--- Start ---");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e)).finally(console.log("Finally code here"));
  console.log("--- End ---");
};

// missing async
function4 = () => {
  console.log("Function 4");
  console.log("--- Start ---");
  promiseA.then(x => { console.log(x)}).catch(e => console.log("Failed with msg: ", e));
  console.log("--- End ---");
};

// chained promises
function5 = async () => {
  console.log("Function 5");
  console.log("--- Start ---");
  await promiseA
  .then(x => x+' -> CALL1')
  .then(y => y+' -> CALL2')
  .then(z => z+' -> CALL3')
  .then(res => console.log(res))
  console.log("--- End ---");
};

// rejected promise chain
function6 = async () => {
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

 
// callback function
function7 = () => {
  console.log("Function 6");
  console.log("--- Start ---");
  let os = 'no_value';
  const res = fetchValue(upperCaseName, os);
  console.log("Your OS name: ", res);
  console.log("--- End ---");
}

fetchValue = (callback, os) => {
  console.log('Calling fetchValue()')
  setTimeout(() => os = navigator.oscpu, 3000);
  return callback(os);
}

upperCaseName = (str) => {
  console.log('Calling upperCaseName()');
  str += '_TEST';
  console.log(str);
  return str;
}