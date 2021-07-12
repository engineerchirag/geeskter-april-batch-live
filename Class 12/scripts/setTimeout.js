// setTimeout(() => {
//   // code executed after certain threshold
// }, threshold);

var myVarTimeOut;

var startTimeOut = () => {
    myVarTimeOut = setTimeout(() => {
    console.log("Logged after 3s");
  }, 3000);
};

var stopTimeOut = () => {
  clearTimeout(myVarTimeOut);
};
