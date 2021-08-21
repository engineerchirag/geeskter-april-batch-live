// Sample project dashboard data
let projectDashBoardInfo = [
  {
    id: "1",
    projectName: "New Admin Design",
    startDate: "24/07/2021",
    status: "Completed",
    projectProgress: "100",
    teamMembers: [
      {
        name: "Pranshu Jain",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar6.png",
      },
      {
        name: "Vishwanath Telang",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar7.png",
      },
      {
        name: "Chandani Navadiya",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar8.png",
      },
    ],
  },
  {
    id: "2",
    projectName: "Landing Page Design",
    startDate: "12/07/2021",
    status: "Pending",
    projectProgress: "78",
    teamMembers: [
      {
        name: "Ash Kumar",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar6.png",
      },
      {
        name: "Prakhar Agrawal",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar7.png",
      },
    ],
  },
  {
    id: "3",
    projectName: "Multipurpose Landing Page Template",
    startDate: "10/07/2021",
    status: "Completed",
    projectProgress: "100",
    teamMembers: [
      {
        name: "Swapnil Mistry",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar6.png",
      },
      {
        name: "Vamsi Krishna",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar3.png",
      },
    ],
  },
  {
    id: "4",
    projectName: "Blog Template Design",
    startDate: "02/07/2021",
    status: "Completed",
    projectProgress: "100",
    teamMembers: [
      {
        name: "John Doe",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
      {
        name: "David Doe",
        thumbnail: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
    ],
  },
];

// Responsible for rendering list based on search functionality
let renderProjectList = (projectInfo) => {
  let tableBody = document.getElementsByTagName("tbody")[0];
  let tableBodyHtml = "";
  projectInfo.forEach((item, index) => {
    let projectBarCss =
      item.status === "Completed" ? "bg-success" : "bg-primary";
    let itemStatusCss =
      item.status === "Completed" ? "text-success" : "text-primary";
    let teamMenbersHtml = "";
    item.teamMembers.forEach((member, memberIndex) => {
      teamMenbersHtml += `
            <a href="javascript:;" title=${member.name} key=${memberIndex}>
            <img
            alt="Image placeholder"
            src=${member.thumbnail}
            class="avatar avatar-xl rounded-circle"
          />
            </a>
            `;
    });
    tableBodyHtml += `<tr key=${index}>
        <th scope="row">${item.id}</th>
        <td>${item.projectName}</td>
        <td>${item.startDate}</td>
        <td>
        <span class=${itemStatusCss}>${item.status}</span>
      </td>
      <td>
      <div class="team">
        ${teamMenbersHtml}
        </div>
      </td>
      <td>
      <p class="mb-0">Progress (${item.projectProgress}%)</p>
      <div class="progress">
        <div
          class="progress-bar ${projectBarCss}"
          role="progressbar"
          style="width: ${item.projectProgress}%"
          aria-valuenow=${item.projectProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </td>
    <td>
    <div class="action-buttons">
      <a href="javascript:;"><i class="fas fa-pencil-alt text-success h4 ml-3"></i></a>
      <a href="javascript:;"><i class="fas fa-times text-danger h4 ml-3"></i></a>
    </div>
</td>
        </tr>`;
  });
  tableBody.innerHTML = tableBodyHtml;
};

// Responsible for intial list rendering when tab is loaded for first time
renderProjectList(projectDashBoardInfo);

// Add event listner to input tag for searching in project dashboard
let serachInputTag = document.getElementById("search-box");
serachInputTag.addEventListener("input", () => {
    renderFilteredList()
})  

// Render the filter list on screen depanding on what is present in side an input tag
let renderFilteredList = () => {
    if (!serachInputTag.value) {
        renderProjectList(projectDashBoardInfo)
        console.log(projectDashBoardInfo)
        return
    }
    let filteredResults = projectDashBoardInfo.filter((item) => item.projectName.toLowerCase().includes(serachInputTag.value.toLowerCase()))
    renderProjectList(filteredResults)
}
