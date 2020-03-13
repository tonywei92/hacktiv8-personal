/*
	sebuah function arrayPanjangGanjil menerima array yang berisi string
	function ini akan mengembalikan array yang berisi data yang hanya memiliki
  jumlah karakter bernilai ganjil.

	Note:
	Wajib menggunakan metode recursive

	Contoh
	console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat']));

	Hasil
	['dua', 'empat']
*/

function arrayPanjangGanjil(datas){
	var result = [];
	for (var i = 0; i < datas.length; i++) {
		if(datas[i].length % 2 ===1){
			result.push(datas[i]);
		}
	}
	return result;
}

console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat'])); // ['dua', 'empat']
console.log(arrayPanjangGanjil(['banyak', 'jalan', 'menuju', 'roma'])) // [ 'jalan' ]
console.log(arrayPanjangGanjil(['Hab', 'geduld', 'alle', 'dinge', 'sind', 'schwierig', 'bevor', 'sie', 'leicht', 'werden'])) // [ 'Hab', 'dinge', 'schwierig', 'bevor', 'sie' ]
