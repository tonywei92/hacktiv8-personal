const property = require('../models/Property')
const people = require('../models/People')
class Property{
  
  static add(data){
    data = {
      street: data[0],
      number: data[1],
      type: data[2],
      price: data[3],
    };
    // console.log(data);
    
    property.findWhere('street', data.street, function(err, result){
      if(err) console.log(`error : ${err}`)
      else{
        let isDuplicate = 0
        if(result.length > 0){
          for(let key in result){
            if(result[key].number == data.number){
              console.log(`Duplicate property`);
              return
            }
          }
        }
        if(isDuplicate === 0){
          property.add(data, function(err){
            if(err) console.log(`error : ${err}`)
            else {
              console.log(`Success add property ${data['$type']} at ${data['$street']}, No ${data['$number']}`);
              property.findAll(function(err, result){
                if(err) console.log(`err : ${err}`)
                else console.log(`a total of ${result.length} registered properties`)
              })
            }
          })
        }
      }
    })
  }

  static sale(data){
    property.listProperty('sale', data[0], data[1],(err, properties)=>{
      if(err) console.log(`err : ${err}`);
      else{
        let i = 1;
        for(let key in properties){
          let _property = properties[key]
          console.log(`${i++}. ${_property.type} at ${_property.street}, No ${_property.number} price ${_property.price}`)
        }
        console.log(`${i-1} property available`);
      }
    })
  }

  static soldout(data){
    property.listProperty('soldout', data[0], data[1],(err, properties)=>{
      if(err) console.log(`err : ${err}`);
      else{
        let i = 1;
        let sales = 0
        for(let key in properties){
          let _property = properties[key]
          console.log(`${i++}. ${_property.type} at ${_property.street}, No ${_property.number} price ${_property.price}`)
          sales += _property.price;
        }
        console.log(`${i-1} sold out property, total sales ${sales}`);
      }
    })
  }

  static buy(data){
    property.findWhere('id', data[0],(err,properties)=>{
      if(err) console.log(err)
      else{
        console.log(`person`);
        console.log(properties[0]);
        
        
        if(properties[0] === undefined){
          console.log('No propety available')
        }
        else if(properties[0].personId){
          console.log('Property has been sold out')
        }
        else if((properties[0].price*0.3) > data[4]){
          console.log('Minimum down payment 30% of property price')
        }
        else{
          people.findWhere('idCard', data[1], (err, people)=>{
            if(err) console.log(err)
            else if(people[0] === undefined){
              people.add({
                idCard: data[1],
                firstName: data[2],
                lastName: data[3],
                credit: properties[0].price - data[4]
              }, function(err){
                if(err) console.log(err)
                else{
                  properties[0].personId = this.lastID
                  properties[0].generateCertificate(data[0])
                  console.log(properties[0]);
                  property.save(properties[0], function(err){
                    if(err) console.log(err);
                    else{
                      console.log(`succeed buy home`);
                    }
                  })
                }
              })
            }
            else{
              if(people[0].credit > 0){
                console.log(`You already have unpayed property`);
              }
              else{
                properties[0].personId = people[0].id
                properties[0].generateCertificate(people[0].firstName)
                people[0].credit = properties[0].price - data[4]
                property.save(properties[0], function(err){
                  if(err) console.log(err)
                  else{
                    people.save(people[0], function(err){
                      if(err) console.log(err)
                      else{
                        console.log(`succeed buy home`);
                      }
                    })
                  }
                })
              }
            }
          })
        }
      }
    })
  }

}
module.exports = Property