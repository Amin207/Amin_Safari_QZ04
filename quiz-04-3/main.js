const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const showURL = document.getElementById("URL_SHOWUP");

const renderTable = () => {
  showURL.innerHTML = `/quiz-04-1/index.html?${params.toString()}`;
  tableHead.innerHTML = `
		<tr>
			${!rm("no") ? `<th scope="col">No.</th>` : ""}
			${!rm("id") ? `<th scope="col">Tour ID</th>` : ""}
			${!rm("name") ? `<th scope="col">Name</th>` : ""}
			${!rm("location") ? `<th scope="col">Location</th>` : ""}
			${!rm("price") ? `<th scope="col">Price</th>` : ""}
			${!rm("groupsize") ? `<th scope="col">Group Size</th>` : ""}
			${!rm("difficulty") ? `<th scope="col">difficulty</th>` : ""}
			${!rm("duration") ? `<th scope="col">duration</th>` : ""}
			${!rm("ratingsaverage") ? `<th scope="col">Ratings Average</th>` : ""}
			${!rm("ratingsquantity") ? `<th scope="col">Ratings Quantity</th>` : ""}
		</tr>`;

  let rowCount = 1;
  tours.forEach((tour) => {
    tableBody.innerHTML += `
			  <tr>
				  ${!rm("no") ? `<th scope="row">${rowCount}</th>` : ""}
				  ${!rm("id") ? `<td>${tour.id}</td>` : ""}
				  ${!rm("name") ? `<td>${tour.name}</td>` : ""}
				  ${!rm("location") ? `<td>${tour.location}</td>` : ""}
				  ${!rm("price") ? `<td>${tour.price}</td>` : ""}
				  ${!rm("groupsize") ? `<td>${tour.maxGroupSize}</td>` : ""}
				  ${!rm("difficulty") ? `<td>${tour.difficulty}</td>` : ""}
				  ${!rm("duration") ? `<td>${tour.duration}</td>` : ""}
				  ${!rm("ratingsaverage") ? `<td>${tour.ratingsAverage}</td>` : ""}
				  ${!rm("ratingsquantity") ? `<td>${tour.ratingsQuantity}</td>` : ""}
			  </tr>`;

    rowCount += 1;
  });
};

const params = new URLSearchParams(window.location.search);
let removables = [];

const getFields = () => {
  const fieldsValue = params.get("fields");
  let fieldsArr = [];

  fieldsValue.split(",").forEach((e) => {
    fieldsArr.push(e.toLowerCase());
  });

  return fieldsArr;
};

getFields().forEach((e) => {
  if (e.includes("-")) {
    removables.push(e.replace(/[-]/, ""));
  }
});

const handleRemovables = (str) => {
  if (removables.includes(str)) {
    return true;
  } else {
    return;
  }
};

const rm = (str) => {
  return handleRemovables(str);
};

console.log("**************");
console.log(params.toString());
console.log(getFields());
console.log("**************");

renderTable();
