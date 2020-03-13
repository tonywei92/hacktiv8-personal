var input = [
    {
        pertandingan: 'indonesia vs philipin',
        nama: 'adi',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'indonesia vs philipin',
        nama: 'budi',
        lokasi: 'tribun timur'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'dodo',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'edi',
        lokasi: 'tribun timur'
    },
    {
        pertandingan: 'malaysia vs singapura',
        nama: 'fajar',
        lokasi: 'tribun barat'
    },
    {
        pertandingan: 'indonesia vs philipin',
        nama: 'cici',
        lokasi: 'tribun timur'
    }
];
/**
[
  {
    pertandingan:  'indonesia vs philipin',
    tribun: 
       {
         'tribun barat' : 'adi |',
         'tribun timur': 'budi | cici |'
       } 
  },
  {
    pertandingan:  'malaysia vs singapura',
    tribun:
       {
         'tribun barat': 'dodo | fajar |',
         'tribun timur': 'edi |'
       } 
  }
])
*/
function tiketPertandingan(data) {
    var result = {};
    for (var i = 0; i < data.length; i++) {
        if(result[data[i].pertandingan] === undefined){
            result[data[i].pertandingan] = {
                pertandingan: data[i].pertandingan,
                tribun: {}
            }
        }
        if(result[data[i].pertandingan].tribun[data[i].lokasi] === undefined){
            result[data[i].pertandingan].tribun[data[i].lokasi] = "";
        }
        result[data[i].pertandingan].tribun[data[i].lokasi] += data[i].nama + " |";
    }
    var result2 = [];
    for(var x in result){
        result2.push(result[x]);
    }
    return result2;
}
console.log(tiketPertandingan(input));