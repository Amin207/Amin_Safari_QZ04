const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

const renderTable = () => {
  tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			<th scope="col">Tour ID</th>
			<th scope="col">Name</th>
			<th scope="col">Location</th>
			<th scope="col">Price</th>
			<th scope="col">Group Size</th>
			<th scope="col">difficulty</th>
			<th scope="col">duration</th>
			<th scope="col">Ratings Average</th>
			<th scope="col">Ratings Quantity</th>
		</tr>`;

  let rowCount = 1;
  for (const tour of tours) {
    tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;

    rowCount += 1;
  }
};

const params = new URLSearchParams(window.location.search);

const getPage = () => {
  return params.get("page");
};

const setPage = (num) => {
  params.set("page", num);
};

const getLimit = () => {
  return params.get("limit");
};

const setLimit = (num) => {
  params.set("limit", num);
};

console.log(params.toString());
console.log(getLimit());

renderTable();
