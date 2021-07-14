function ayncAwait() {
  let getAllEmplyeesUrl = `https://reqres.in/api/users`;
  fetch(getAllEmplyeesUrl).then(async (response) => {
    let empResponse = await response.json();
    console.log(empResponse);
    let secondResponse = await job();
    console.log(secondResponse);
  });
}

async function job() {
  let response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resloved after 5s");
    }, 5000);
  });
  return response;
}
