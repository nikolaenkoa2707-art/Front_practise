const companyBranches = polarExpressData.branches;

const tableBody = document.querySelector("#branchesTable tbody");

companyBranches.forEach(item => {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `
    <td>${item.city}</td>
    <td>${item.country}</td>
    <td>${item.address}</td>
    <td>${item.phone}</td>
    <td>${item.email}</td>
  `;

  tableBody.appendChild(tableRow);
});

const workingHoursBody = document.querySelector("#hoursTable tbody");

companyBranches.forEach(item => {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `
    <td>${item.city}</td>
    <td>${item.workingHours.monday}</td>
    <td>${item.workingHours.tuesday}</td>
    <td>${item.workingHours.wednesday}</td>
    <td>${item.workingHours.thursday}</td>
    <td>${item.workingHours.friday}</td>
    <td>${item.workingHours.saturday}</td>
    <td>${item.workingHours.sunday}</td>
  `;

  workingHoursBody.appendChild(tableRow);
});