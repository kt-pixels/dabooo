const sales_access_page = document.getElementById("sales_access_page");
const sales_access_btn = document.getElementById("sales_access_btn");
const home_page_container = document.getElementById("home_page_container");
const login_page_container = document.getElementById("login_page_container");

const backtohomepage = document.getElementById('backtohomepage')

sales_access_btn.addEventListener("click", () => {
  if (
    sales_access_page.style.display === "none" ||
    sales_access_page.style.display === ""
  ) {
    sales_access_page.style.display = "block";
    home_page_container.style.display = "none";
    login_page_container.style.display = "none";
  } else {
    sales_access_page.style.display = "block";
  }
});

backtohomepage.addEventListener('click', () => {
    if(home_page_container.style.display === "none" || home_page_container.style.display === ""){
    home_page_container.style.display = "block";
    sales_access_page.style.display = "none"
    }else{
        sales_access_page.style.display = "none"
    }
})

//

// const add_sale_btn = document.getElementById('add_sale_btn')

const salesKey = "salesData";
const currentMonthKey = "currentMonth";

// Initialize sales data if not present in localStorage
if (!localStorage.getItem(salesKey)) {
  localStorage.setItem(salesKey, JSON.stringify([]));
}

// Function to get all sales data
function getAllSalesData() {
  return JSON.parse(localStorage.getItem(salesKey));
}

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

// Function to get the current month in YYYY-MM format
function getCurrentMonth() {
  return new Date().toISOString().split("T")[0].slice(0, 7);
}

// Function to clear previous month's sales data
function clearPreviousMonthData() {
  const currentMonth = getCurrentMonth();
  const storedMonth = localStorage.getItem(currentMonthKey);

  if (storedMonth && storedMonth !== currentMonth) {
    // Clear previous month's data
    localStorage.setItem(salesKey, JSON.stringify([]));
  }

  // Update the stored month
  localStorage.setItem(currentMonthKey, currentMonth);
}

// Function to update sales display
function updateSalesDisplay() {
  const salesData = getAllSalesData();
  const salesDataContainer = document.getElementById("sales_data");
  const totalsContainer = document.getElementById("totals");
  salesDataContainer.innerHTML = "";

  const salesByDate = {};
  let totalSales = 0;
  let totalProfit = 0;

  // Organize sales data by date
  salesData.forEach((sale) => {
    if (!salesByDate[sale.date]) {
      salesByDate[sale.date] = { totalSales: 0, totalProfit: 0 };
    }
    salesByDate[sale.date].totalSales += sale.amount;
    salesByDate[sale.date].totalProfit += sale.profit;

    totalSales += sale.amount;
    totalProfit += sale.profit;
  });

  // Sort dates in descending order
  const sortedDates = Object.keys(salesByDate).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  // Display sales data
  sortedDates.forEach((date) => {
    // const salesOrProfit_container = document.createElement('div')
    const dateHeading = document.createElement("h2");
    dateHeading.className = "today_sales_heading";
    dateHeading.textContent = `On Date : ${date} : Sales`;

    const salesInfo = document.createElement("div");
    salesInfo.className = "saleInfo"
    salesInfo.innerHTML = `
          <p>Total Sales: ${salesByDate[date].totalSales}</p>
          <p>Total Profit: ${salesByDate[date].totalProfit}</p>
        `;

    salesDataContainer.appendChild(dateHeading);
    salesDataContainer.appendChild(salesInfo);
  });

  totalsContainer.innerHTML = `
      <p><b>Cumulatie Total Sales</b> : Rs. ${totalSales}</p>
      <p><b>Cumulatie Total Profits</b> : Rs. ${totalProfit}</p>
      `;
}

// Event listener for add sale button
document.getElementById("add_sale_btn").addEventListener("click", () => {
  const saleAmount = parseFloat(document.getElementById("sale_amount").value);
  const profitAmount = parseFloat(
    document.getElementById("profit_amount").value
  );

  if (isNaN(saleAmount) || isNaN(profitAmount)) {
    alert("Please enter valid amounts for sale and profit.");
    return;
  }

  const saleData = {
    date: getTodayDate(),
    amount: saleAmount,
    profit: profitAmount,
  };

  const salesData = getAllSalesData();
  salesData.push(saleData);
  localStorage.setItem(salesKey, JSON.stringify(salesData));

  updateSalesDisplay();

  document.getElementById("sale_amount").value = "";
  document.getElementById("profit_amount").value = "";
});

// Initial call to clear previous month's data if needed
clearPreviousMonthData();

// Initial update of sales display
updateSalesDisplay();
