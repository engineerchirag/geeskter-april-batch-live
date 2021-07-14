// GET
function getAllEmployees() {
  let getAllEmplyeesUrl = `https://reqres.in/api/users`;

  fetch(getAllEmplyeesUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// POST
function postAnEmployee() {
  let postEmployeeUrl = `https://reqres.in/api/users`;
  let sampleBody = {
    name: "John",
    job: "leader",
    id: "913",
    createdAt: "2021-07-14T15:03:28.903Z",
  };
  fetch(postEmployeeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sampleBody),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// PUT
function updateEmployeeData() {
  let updateEmployeeUrl = `https://reqres.in/api/users/2`;
  let sampleBody = {
    name: "John",
    job: "CTO",
    createdAt: "2021-07-14T15:03:28.903Z",
  };
  fetch(updateEmployeeUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sampleBody),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// DELETE -> Chage method to DELETE
