test = async () => {
  console.log("testing Promise");
  await promiseA.then(x => { console.log(x)}).catch(e => console.log(e));//.finally(console.log("testing done"));
  a();
}

// test2(){
//   true : setTimeout(return 1, 
// }

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
  true ? setTimeout(() =>  resolutionFunc("SUCCESS"), 3000) : setTimeout(() => rejectionFunc("FAIL"), 3000);
});

a = () => console.log(1+2);

