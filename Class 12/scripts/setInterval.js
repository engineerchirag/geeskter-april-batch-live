// setInterval(() => {
//   // code executed after certain threshold
// }, threshold);

var myVarInterval;

var startInterval = () => {
  myVarInterval = setInterval(() => {
    console.log("Logged after every 3s");
  }, 3000);
};

var stopInterval = () => {
  clearInterval(myVarInterval);
};
