const Company = require('./models/Company')
const Employee = require('./models/Employee')
const View = require('./View')

class Controller{
  static register(input){
    // node index.js register <companyId> <employeeName> <sallary>
    if(!input[1] || !input[2] || !input[3])
      View.success(`Silahkan isi company id dan empployee name`);
    else
      Company.findById(input[1],(err, company)=>{
        if(err)View.error(err)
        else{
          Employee.create({
            name: input[2],
            companyId: company.id
          }, (err, employee)=>{
            if(err)
              View.success(`gagal register ${input[2]} ke ${company.name}`)
            else {
              employee.username = employee.name+employee.id
              employee.update((err, data)=>{
                if(err){
                  View.error(err)
                }
                else{
                  View.success(data)
                }
              })
              View.success(`Sukses mendaftakan ${employee.name} ke ${company.name}`);
            }
          })
        }
      })
  }

  static jobDone(input){
    //node index.js "job done" <username\'s employee> <point>
    if(!input[1] || !input[2] )
      View.success(`silahkan isi username dan hasil penilaian`);
    else if(input[2] < 1 || input[2] > 4)
      View.success(`rating hanya boleh 1, 2, 3, atau 4`);
    else
      Employee.find('username', input[1], (err, employee)=>{
        if(err)
          View.error(err);
        else{
          if(employee.jobDone===0)
            employee.kpi = input[2]
          else
            employee.kpi = Math.round( (Number(employee.kpi) + Number(input[2])) /2)
          employee.jobDone++
          employee.update((err, data)=>{
            if(err)
              View.error(err)
            else
              View.success(`${data.name} complete job with current kpi rate ${data.rate}`)
          })
        }
      })
  }

  static evaluation(input){
    if(!input[1] || !input[2])
      View.error(`Silahkan memasukkan perusahaan dan username karyawan`)
    else
      Company.findById(input[1], (err, company)=>{
        if(err){
          if(err === 'Data not found'){
            View.success(`Perusahaan ini tidak ditemukan`)
          }
        }
        else{
          Employee.find('username', input[2], (err, employee)=>{
            if(err === `Data not found`)
              View.success(`username tidak ditemukan`);
            else if(err)
              View.error(err)
            else{
                if(employee.companyId != input[1]){
                  View.success(`Tidak ada karyawan dengan username ${input[2]}`);
                }
                else if(employee.kpi < 3 || employee.jobDone < 5){
                  employee.sp++
                  if(employee.sp > 2){
                    employee.companyId = 0
                  }
                  employee.update((err, data)=>{
                    if(err)
                      View.error(err)
                    else if(employee.sp !== 3)
                      View.success(`${employee.name} mendapatkan sp ${employee.sp}`);
                    else 
                      View.success(`${employee.name} mendapatkan sp 3 dan dikeluarkan dari perusahaan ${company.name}`);
                  })
                }
              }
          })
        }
      })
    
  }
}
module.exports = Controller