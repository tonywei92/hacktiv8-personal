const Customer = require("../models/Customer")
const Order = require("../models/Order")
const View = require("../views/View")

class Controller {
  static showAllOrder (customerName, day) {
    Customer.findOne(customerName, function(err, dataCustomer){
      if (err) {
        View.showError(err)
      } else {
        if (!dataCustomer) {
          View.showError("Customer tidak ditemukan")
        } else {
          Order.findAll(dataCustomer, day, function(err, dataOrders){
            if (err) {
              View.showError(err)
            } else {
              if (dataOrders.length === 0) {
                View.showError(`Customer ${customerName} tidak mempunyai pesanan di hari-ke ${day}`)
              } else {
                View.showOrder(dataOrders)
              }
            }
          })
        }
      }
    })
  }

  static UpdateOrder(id) {
    Order.findOne(id, function(err, dataOrder) {
      if (err) {
        View.showError(err)
      } else {
        if (!dataOrder) {
          View.showError("Pesanan tidak terdaftar")
        } else {
          console.log(dataOrder.customerId)
          Customer.findById(dataOrder.customerId, function(err, dataCustomer) {
            if (err) {
              View.showError(err)
            } else {
              Order.UpdateOrder(id, function(err){
                if (err) {
                  View.showError(err)
                } else {
                  View.showMessage(`Pesanan [id-${dataOrder.id}] ${dataOrder.itemName} atas nama ${dataCustomer.name} sudah bisa diambil`)
                }
              })
          
            }
          })
        }
      }
    }) 
  }

  static createOrder(customerName, day, itemName, pricePerItem, quantity) {
    if (day > 7) {
      View.showError("Penjualan hanya sampai hari ke-7")
    }
    Customer.findOne(customerName, function(err, dataCustomer) {
      if (err) {
        View.showError(err)
      } else {
        if (!dataCustomer) {
          View.showError(`Customer dengan nama ${customerName} tidak terdaftar`)
        }
        Order.countMaxOrder(dataCustomer.id, day, function(err, dataCount) {
          if (err) {
            View.showError(err)
          } else {
            let limit = +quantity + dataCount.quantity
            console.log(limit > 4)
            if (dataCount.quantity > 5 || limit > 5) {
              View.showError(`Hi ${dataCustomer.name}, pesanan kamu tidak bisa diproses karena sudah melebihi batas maksimal jumlah per hari.`)
            } else {
              Order.createOrder(customerName, day, itemName, pricePerItem, quantity, function(){

              // Hi Isro, pesanan kamu sedang diproses ya.. 
              // Untuk hari ke-1 ini, kamu sudah memesan sebanyak 3 boba item
              // Kamu masih bisa memesan sekitar 2 boba item lagi.
              })
            }
          }
        })
      }
    })
  }
}

module.exports = Controller