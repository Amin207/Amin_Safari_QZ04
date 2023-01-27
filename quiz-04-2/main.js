const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const showURL = document.getElementById("URL_SHOWUP");

const renderTable = () => {
  showURL.innerHTML = `/quiz-04-2/index.html?${params.toString()}`;
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
  tours
    .sort((a, b) => {
      const x = a.price;
      const y = b.price;

      if (getSort() === "-price") {
        return x > y ? 1 : y > x ? -1 : 0;
      }
      if (getSort() === "price") {
        return x > y ? -1 : y > x ? 1 : 0;
      }
    })
    .forEach((tour) => {
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
    });
};

const params = new URLSearchParams(window.location.search);

const getSort = () => {
  if (params.get("sort") === null) {
    return "price";
  } else {
    return params.get("sort");
  }
};

const setSort = (string) => {
  params.set("sort", string);
};

console.log("**************");
console.log(params.toString());
console.log("sort: ", getSort());
console.log("**************");

renderTable();
