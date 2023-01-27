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
  tours.forEach((tour) => {
    console.log(handleConditions(tour));
    if (handleConditions(tour)) {
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
  });
};

const params = new URLSearchParams(window.location.search);

const paramsObj = () => {
  let obj = {};
  Array.from(params).forEach((e) => {
    obj = { ...obj, [e[0]]: e[1] };
  });
  return obj;
};

const handleConditions = (tour) => {
  if (Object.keys(paramsObj()).length > 0) {
    let conditions;
    Object.keys(tour).forEach((e) => {
      if (
        Object.keys(paramsObj()).includes(e).toString() &&
        tour[e].toString() === paramsObj()[e]
      ) {
        conditions = conditions || tour[e].toString() === paramsObj()[e];
      }
    });
    return conditions;
  } else {
    return tour;
  }
};

console.log("**************");
console.log(params.toString());
console.log(paramsObj());
console.log("**************");

renderTable();
