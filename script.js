const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

	const getSum = () => {
	const priceElements = document.querySelectorAll(".price");
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);
    if(price) {
      totalPrice += price;
    }
  });

 
  const table = document.querySelector("table");
  let totalRow = table.querySelector(".total");
  if (!totalRow) {
    totalRow = document.createElement("tr");
    totalRow.className = 'total';
    const totalCell = document.createElement("td");
	  totalCell.id = 'ans';
    totalCell.setAttribute("colspan", "2");
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }
  totalRow.querySelector('td').textContent = `Total Price: 
                              Rs${totalPrice.toFixed(2)}`;
};
	
  getSumBtn.addEventListener("click", getSum);






	
