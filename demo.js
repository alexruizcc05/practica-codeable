//@ts-check
async() => {
    const orders = [];
    const customers = [];
    const orderLimit = 5;
  
    async function fetchOrders() {
      const response = await fetch("http://demo/api/v1/orders", {
        method: "GET",
      });
      const orderData = await response.json();
      orders.push(orderData); // Esto podría causar un error porque push espera un array de elementos
    }
  
    function calculateTotalOrders() {
      let totalOrders = 0;
      for (let j = 0; j < customers.length; j++) {
        totalOrders += customers[j].ordersCount;
      }
      return totalOrders;
    }
  
    function addOrder(customerIndex) {
      if (calculateTotalOrders() <= orderLimit) {
        orders.push(customers[customerIndex]);
      }
    }
  
    await fetchOrders();
    addOrder(0);
    addOrder(1);
    const totalOrders = calculateTotalOrders();
    console.log(totalOrders);
    const employee = {
      firstName: "Juan",
      lastName: "Perez",
    };
    // const result = employee + orderLimit;
    // console.log(result);
  };