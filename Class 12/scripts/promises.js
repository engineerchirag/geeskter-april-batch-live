function executePromise() {
  var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let add = 1 + 12;
      resolve(add);
      // reject("Promise rejected")
    }, 3000);
  });

  myPromise
    .then((data) => {
      console.log("Compute 1", data);
      return data * 5;
      // console.log("Not invoked imediately");
    })
    .then((data1) => {
      console.log("Compute 2", data1);
      // return data / 5
      throw Error("Error computing");
    })
    .then((data2) => {
      console.log("Compute 3", data2);
      console.log(data2);
    })
    .catch((error) => {
      console.error(error);
    });
}
