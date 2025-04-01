const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

	const getSum = () => {
	//Add your code here
		  const priceElements = document.querySelectorAll(".price");
		// Calculate the total by summing the prices
		let totalPrice = 0;
		priceElements.forEach(priceElement => {
			const price = parseFloat(priceElement.textContent);// Convert text to number
			if(price)
			{
				totalPrice += price;
			}
		});

		// Add a new row to the table showing the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr"); // Create a new row
  const totalCell = document.createElement("td"); // Create a new cell for the row
  totalCell.setAttribute("colspan", "2"); // Span across 2 columns
  totalCell.textContent = `Total Price: Rs${totalPrice.toFixed(2)}`; // Display total price
  totalRow.appendChild(totalCell); // Add the cell to the row
  table.appendChild(totalRow); // Append the row to the table
		
};
	
getSumBtn.addEventListener("click", getSum);
	
