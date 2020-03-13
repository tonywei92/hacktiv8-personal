let dataPerson = [{
    name: 'Alan',
    golonganDarah: '',
    status: ''
}, {
    name: 'Bolt',
    golonganDarah: '',
    status: ''
}, {
    name: 'Charly',
    golonganDarah: '',
    status: ''
}, {
    name: 'Daniel',
    golonganDarah: '',
    status: ''
}, {
    name: 'Ester',
    golonganDarah: '',
    status: ''
}, {
    name: 'Frans',
    golonganDarah: '',
    status: ''
}, {
    name: 'George',
    golonganDarah: '',
    status: ''
}, {
    name: 'Hans',
    golonganDarah: '',
    status: ''
}, {
    name: 'Intan',
    golonganDarah: '',
    status: ''
}, {
    name: 'Jack',
    golonganDarah: '',
    status: ''
}, {
    name: 'Kyle',
    golonganDarah: '',
    status: ''
}, {
    name: 'Laura',
    golonganDarah: '',
    status: ''
}, {
    name: 'Mona',
    golonganDarah: '',
    status: ''
}, {
    name: 'Nancy',
    golonganDarah: '',
    status: ''
}, {
    name: 'Oliver',
    golonganDarah: '',
    status: ''
}, {
    name: 'Patrick',
    golonganDarah: '',
    status: ''
}, {
    name: 'Queen',
    golonganDarah: '',
    status: ''
}, {
    name: 'Rust',
    golonganDarah: '',
    status: ''
}, {
    name: 'Scala',
    golonganDarah: '',
    status: ''
}, {
    name: 'Tesla',
    golonganDarah: '',
    status: ''
}, {
    name: 'Uranium',
    golonganDarah: '',
    status: ''
}, {
    name: 'Vans',
    golonganDarah: '',
    status: ''
}, {
    name: 'Wick',
    golonganDarah: '',
    status: ''
}, {
    name: 'Xavier',
    golonganDarah: '',
    status: ''
}, {
    name: 'Yongki',
    golonganDarah: '',
    status: ''
}, {
    name: 'Zend',
    golonganDarah: '',
    status: ''
}];

function cekDarah(korban, pendonor) {
    let donorkan = false;
    if(korban.status == 'hidup' &&  pendonor.status == 'hidup') {
        if( pendonor.golonganDarah == 'A' && (korban.golonganDarah == 'A' || korban.golonganDarah == 'AB')) {
            donorkan = true;
        } else if( pendonor.golonganDarah == 'B' && (korban.golonganDarah == 'B' || korban.golonganDarah == 'AB')) {
            donorkan = true;
        } else if( pendonor.golonganDarah == 'AB' && (korban.golonganDarah == 'AB')) {
            donorkan = true;
        } else if( pendonor.golonganDarah == 'O') {
            donorkan = true;
        }
        //console.log('==========>', pendonor.name[0],korban.name[0]);
    
        if( pendonor.rest == 0 && !korban.DayInTransfusion) {
            donorkan = true;
        } else {
            donorkan = false;
        }
        //console.log('==========>', pendonor.name,korban.name,donorkan);
        if(donorkan) {
             pendonor.rest = 3;
             pendonor. pendonorLife--;
            if( pendonor. pendonorLife <= 0) {
                 pendonor.status = 'meninggal';
            }
        }
    }
    return donorkan;
}

function yangTersisa(recipientUniversal, pendonor) {
   let listHidupKorban = recipientUniversal.filter(e => e.status == 'hidup');
   let listHidupPendonor =  pendonor.filter(e => e.status == 'hidup');
   console.log('Yang tersisa:');
   console.log('');
   console.log(listHidupKorban.concat(listHidupPendonor));
   
   //assign golonganDarah
   dataPerson.forEach( e => {
       if('O,Q,S,U,W,Y'.split(',').indexOf(e.name[0])!= -1) {
           e.golonganDarah = 'A';
       } else if('N,P,R,T,V,X'.split(',').indexOf(e.name[0])!= -1) {
           e.golonganDarah = 'B';
       } else if('B,D,F,H,J,L'.split(',').indexOf(e.name[0])!= -1) {
           e.golonganDarah = 'AB';
       } else {
           e.golonganDarah = 'O';
       }
       e.status = 'hidup';
   })
   
   let korban = dataPerson.filter(data => "B,C,E,G,K,M,Q,S,W".split(',').indexOf(data.name[0])!= -1);
   let  pendonor = dataPerson.filter(data => "B,C,E,G,K,M,Q,S,W".split(',').indexOf(data.name[0])== -1);
   // let perawat = 5;
   let timeLife = 30;
   
   
   //recipientUniversal jika tidak didonorkan dari pendonor dalam waktu 2 hari akan mati,
   korban.forEach(e => {
       e.tidakTransfusi = 0;
       e.DayInTransfusion = false;
   })
   //setiap  pendonor akan mati setelah dua kali mendonorkan recipientUniversal,
   //jika setiap  pendonor butuh waktu 3 hari untuk rest / istirahat
    pendonor.forEach((e => { 
       e. pendonorLife = 2; 
       e.rest = 0}
       ))
   
   for (let i = 0; i < timeLife; i++) {
       if(i%7 == 0) {
           let list = korban.filter(data => data.status == "hidup");
           console.log('Minggu ke-',i/7, ' butuh donor darah :');
           console.log(list);
           //yangTersisa(korban, pendonor)
       }
   
       if(i%2 == 0) {
           korban.forEach(e => e.tidakTransfusi = 0);
       }
       
       for (let j = 0; j <  pendonor.length; j++) {
           let bisaCek = false;
           if( pendonor[j].rest == 0) {
               bisaCek = true;
           } else {
                pendonor[j].rest--;
           }
           for (let k = 0; k < korban.length; k++) {
               if(bisaCek) {
                  let checked = cekDarah(korban[k], pendonor[j]);
                  if(checked) {
                   korban[k].DayInTransfusion = true;
                   break;
                  } 
               }
           }    
       }
   
       korban.forEach(e => {
           if(e.DayInTransfusion == false) {
               e.tidakTransfusi++;
               if(e.tidakTransfusi>=2) {
                   korban.status = 'mati';
               }
           }
           e.DayInTransfusion = false
       })
   }
}


    
yangTersisa();


