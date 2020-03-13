class View {
  static customers(customers){
    customers.forEach((customer, index) => {
      console.log(`${index+1}. ${customer.name}`)
    })
  }

  static orders(customer, day, orders, allOrder, allPrice, allQuantity){
    console.log("\n\n")
    console.log("=======================================================")
    console.log(`---------           BOBA FESTIVE          -------------`)
    console.log("-------------------------------------------------------")
    console.log(`Day: ${day}`)
    console.log(`Nama Customer: ${customer.name}`)
    console.log(`Total Order: ${allOrder}`)
    console.log("-------------------------------------------------------")
    orders.forEach((order) =>{
      console.log(`[id-${order.id}]  ${order.itemName}      ${order.quantity}        ${order.totalPrice || 0}    ${order.status} `)
    })
    console.log(`\n`)
    console.log("-------------------------------------------------------")
    console.log(`Total     Quantity: ${allQuantity || 0}    Price: ${allPrice || 0}`)
    console.log("=======================================================")
    console.log("\n\n")
  }

  static error(message){
    console.log("ERROR")
    console.log("================")
    console.log(message)
    return
  }

  static success(message){
    console.log("SUCCESS")
    console.log("================")
    console.log(message)
  }

  static createdOrder(customer, day, result){
    console.log(`Hi ${customer.name}, pesanan kamu sedang diproses, ya.. `)
    console.log("===============")
    console.log(`Untuk hari #${day} ini, kamu sudah memesan sebanyak ${result.sumQuantity} boba item`)
    console.log(`Kamu masih bisa mengorder sekitar ${5 - result.sumQuantity} boba item lagi, loh!`)
    console.log("================")
    console.log("Ditunggu pesanannya ya!")
  }
}


module.exports = View 