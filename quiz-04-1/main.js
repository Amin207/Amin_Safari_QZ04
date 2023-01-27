const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const showURL = document.getElementById("URL_SHOWUP");

const renderTable = () => {
  showURL.innerHTML = `/quiz-04-1/index.html?${params.toString()}`;
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
  for (
    let i = handleFirstIndex();
    i <= handleFirstIndex() + (getLimit() - 1);
    i++
  ) {
    tableBody.innerHTML += `
				  <tr>
					  <th scope="row">${rowCount}</th>
					  <td>${tours[i].id}</td>
					  <td>${tours[i].name}</td>
					  <td>${tours[i].location}</td>
					  <td>${tours[i].price}</td>
					  <td>${tours[i].maxGroupSize}</td>
					  <td>${tours[i].difficulty}</td>
					  <td>${tours[i].duration}</td>
					  <td>${tours[i].ratingsAverage}</td>
					  <td>${tours[i].ratingsQuantity}</td>
				  </tr>`;
    rowCount += 1;
  }
};

const params = new URLSearchParams(window.location.search);

const getPage = () => {
  if (params.get("page") === null) {
    return 1;
  } else {
    return params.get("page");
  }
};

const setPage = (num) => {
  params.set("page", num);
};

const getLimit = () => {
  if (params.get("limit") === null) {
    return 999;
  } else {
    return params.get("limit");
  }
};

const setLimit = (num) => {
  params.set("limit", num);
};

const handleFirstIndex = () => {
  return (getPage() - 1) * getLimit();
};

console.log("**************");
console.log(params.toString());
console.log("Page: ", getPage());
console.log("Limit: ", getLimit());
console.log("**************");

renderTable();
