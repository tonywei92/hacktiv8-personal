class Patient {
  constructor(name, age, gender, type, budgetMax, diagnosis, pilihanKamar) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type = type;
    this.budgetMax = budgetMax;
    this.diagnosis = diagnosis;
    this.totalDayTreatment = 0;
    this.pilihanKamar = pilihanKamar;
    this.isCheckOut = false;
  }
}

class PatientBpjs extends Patient {
  constructor(name, age, gender, diagnosis, pilihanKamar) {
    super(name, age, gender, 'bpjs', 2000000, diagnosis, pilihanKamar);
  }
}

class PatientAsuransi extends Patient {
  constructor(name, age, gender, diagnosis, pilihanKamar) {
    super(name, age, gender, 'asuransi', 5500000, diagnosis, pilihanKamar);
  }
}

/**
diagnosis
 - Diare: 2 hari
 - Muntaber: 3 hari
 - Demam Berdarah: 4 hari
 - Tipes: 7 hari
 - Selain itu cuma 1 hari

 Tipe kamar ada 3
  - Kelas 2 per hari 350000
  - Kelas 1 per hari 750000
  - VIP per hari 1500000

  BPSJ maksimal di kamar Kelas 1, jika memilih VIP tampilkan 'Mohon maaf anda layanan kamar ini tidak tersedia'

**/
class RumahSakit {
  constructor() {
    this.patient = [];
  }

  checkIn(name, age, gender, typePatient, diagnosis, pilihanKamar) {
    let pasien = null;
    if (typePatient === 'bpjs') {
      if (pilihanKamar === 'Kelas 1' || pilihanKamar === 'Kelas 2') {
        pasien = new PatientBpjs(name, age, gender, diagnosis, pilihanKamar);
      } else {
        return 'Mohon maaf anda layanan kamar ini tidak tersedia';
      }
    } else if (typePatient === 'asuransi') {
      pasien = new PatientAsuransi(name, age, gender, diagnosis, pilihanKamar);
    } else {
      pasien = new Patient(name, age, gender, "mandiri", '', diagnosis, pilihanKamar);
    }
    this.patient.push(pasien);
    return 'Pasien telah terdaftar';
  }

  nextDay() {
    for (var i = 0; i < this.patient.length; i++) {
      let totalBayar = 0;
      let remaining = 0;

      if (this.patient[i].pilihanKamar === 'VIP') {
        totalBayar = 1500000;
      } else if (this.patient[i].pilihanKamar === 'Kelas 1') {
        totalBayar = 750000;
      } else if (this.patient[i].pilihanKamar === 'Kelas 2') {
        totalBayar = 350000;
      }

      switch (this.patient[i].diagnosis) {
        case 'diare':
          if (this.patient[i].totalDayTreatment === 2) {
            this.patient[i].isCheckOut = true;
          } else {
            this.patient[i].totalDayTreatment++;
          }
          break;
        case 'muntaber':
          if (this.patient[i].totalDayTreatment === 3) {
            this.patient[i].isCheckOut = true;
          } else {
            this.patient[i].totalDayTreatment++;
          }
          break;
        case 'demam berdarah':
          if (this.patient[i].totalDayTreatment === 4) {
            this.patient[i].isCheckOut = true;
          } else {
            this.patient[i].totalDayTreatment++;
          }
          break;
        case 'tipes':
          if (this.patient[i].totalDayTreatment === 7) {
            this.patient[i].isCheckOut = true;
          } else {
            this.patient[i].totalDayTreatment++;
          }
          break;
        default:
          if (this.patient[i].totalDayTreatment === 1) {
            this.patient[i].isCheckOut = true;
          } else {
            this.patient[i].totalDayTreatment++;
          }
          break;
      }

      if (this.patient[i].isCheckOut) {
        totalBayar = (this.patient[i].totalDayTreatment * totalBayar);
        remaining = this.patient[i].budgetMax - totalBayar;
        console.log("**************************INVOICE****************************");
        console.log(`Pasien: \n Nama: ${this.patient[i].name} \n Umur: ${this.patient[i].age} \n Diagnosa: ${this.patient[i].diagnosis} \n telah menjalani perawatan selama ${this.patient[i].totalDayTreatment} hari.`);
          if (remaining >= 0) {
            console.log(`Untuk biaya administrasi telah dilunasi oleh pihak ${this.patient[i].type}`);
          } else {
            console.log(`Total Pembayaran sebesar Rp ${totalBayar} \n Pihak ${this.patient[i].type} telah meng-cover sebesar Rp ${this.patient[i].budgetMax}. \n Biaya administrasi yang harus dibayarkan sebesar Rp ${Math.abs(remaining)}`);
          }
        console.log("*************************************************************");
      }
    }

    //remove data PASIEN
    this.removePatient();
  }

  removePatient() {
    this.patient = this.patient.filter(p => {
      return p.isCheckOut === false;
    })
  }

  showPatient() {
    console.log("LIST PASIEN: ");
    for (var i = 0; i < this.patient.length; i++) {
      console.log(`${i+1}. ${this.patient[i].name} (${this.patient[i].diagnosis} hari ke ${this.patient[i].totalDayTreatment})`);
    }
  }
}

let rs = new RumahSakit();

rs.checkIn('Dia', 17, 'male', 'bpjs', 'muntaber', 'Kelas 1');
rs.checkIn('Sia', 15, 'female', 'bpjs', 'diare', 'Kelas 2');
rs.checkIn('Lia', 28, 'male', 'asuransi', 'tipes', 'VIP');

rs.showPatient();
rs.nextDay();
rs.nextDay();
rs.showPatient();
rs.nextDay();
rs.checkIn('Gea', 28, 'male', 'bpjs', 'tipes', 'Kelas 1');
rs.showPatient();
rs.nextDay();
rs.nextDay();
rs.showPatient();
rs.nextDay();
rs.nextDay();
rs.nextDay();
rs.showPatient();
rs.nextDay();
rs.nextDay();
rs.nextDay();
rs.nextDay();
