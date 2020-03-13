const Customer = require('./models/Customer')
const Order = require('./models/Order')
const View = require('./views/index')



class Controller {
  static customers(){
    Customer.all(function(err, rows){
      if(err) View.error(err)
      else View.customers(rows)
    })
  } 

  // <customerName> <day> <itemName> <pricePerPiece> <qty>
  static createOrder(customerName, day, itemName, price, quantity){
    Customer.findOne({
      name: customerName
    }, function(err, customer){
      if(err) View.error(err)
      else if(!customer) View.error(`Customer tidak ditemukan`)
      else {

        Order.countBy({
          customerId: customer.id,
          day: day,
        }, function(err, result){

          result.sumQuantity = result.sumQuantity || 0

          if(err) View.error(err)
          else if(result.sumQuantity >= 20 || Number(quantity) > 5 || (result.sumQuantity + Number(quantity) > 5) ){
            View.error("Maaf, pesanan tidak bisa dilakukan karena sudah melebihi batas maksimal kuantitas")
          } 
          else {
            const objParams ={
              customerId: customer.id,
              quantity: Number(quantity),
              day: Number(day),
              status: 'processed',
              totalPrice: quantity * price,
              itemName,
            }

            result.sumQuantity = result.sumQuantity + Number(quantity)
            
            Order.create(objParams, function(err){
              if(err) View.error(err)
              else View.createdOrder(customer, day, result)
            })
          }
        })

      }
    })
  }

  static orders(customerName, day = 1){
    Customer.findOne({
      name: customerName
    }, (err, customer) => {
      if(err) View.error(err)
      else if(!customer) View.error(`Customer tidak ditemukan`)
      else {
        Order.findAll({
          customerId: customer.id,
          day: day
        }, (err, orders) => {
          if(err) View.error(err)
          else if(orders.length === 0) View.error(`Customer ${customer.name} tidak mempunyai order di hari #${day}`)
          else{
            Order.countBy({
              customerId: customer.id,
              day: Number(day)
            }, (err, result) => {
              if(err) View.error(err)
              else View.orders(customer, day, orders, result.totalOrders, result.sumPrice, result.sumQuantity)
            })
          }
        })
      }
    })
  }

  static completeOrder(orderId){
    Order.findOne({
      id: orderId
    }, (err, order) =>{
      if(err) View.error(err)
      // else if(order.status === 'completed'){
      //   View.error(`Mohon maaf, pesanan [id-${orderId}] ${order.itemName} sudah diselesaikan sebelumnya.`)
      // }
      else {
        Customer.findOne({
          id: order.customerId
        }, 
        (err, customer) =>{
          if(err) console.log(err)
          else {
            Order.update({
              id: orderId
            }, {
              status: 'completed'
            }, 
            (err) => {
              if(err) console.log(err)
              else{
                View.success(`Pesanan [id-${orderId}] ${order.itemName} atas nama ${customer.name} sudah bisa diambil`)
              }
            })
          }
        })
      }
    })
   
  }

  static deleteCustomer(customerName){
    Customer.findOne({name: customerName}, (err, customer) =>{
      if(err) View.error(err)
      else if(!customer){
        View.error("Customer tidak ditemukan")
      }
      else{
        Customer.delete({
          id: customer.id
        }, (err, cChanges) =>{
          if(err) View.error(err)
          Order.delete({
            customerId: customer.id
          }, (err, oChanges) =>{
            if(err) View.error(err)
            else{ 
              View.success(`Berhasil menghapus customer ${customerName} dan ${oChanges} ordernya.`)
            }
          })
        })
      }
    })

  }

  static omzet(day){
    const paramsWhere = day ? {day: Number(day)} : {} 

    Order.countBy(paramsWhere, (err, result) => {
      if(err) View.error(err)
      else if(day) View.success(`Omzet hari #${day} adalah Rp. ${result.sumPrice || 0}`)
      else View.success(`Total Omzet di dalam 7 hari ini adalah Rp. ${result.sumPrice || 0}`)
    })
  }
}

module.exports = Controller