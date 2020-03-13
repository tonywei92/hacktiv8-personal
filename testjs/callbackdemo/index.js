function beli(uang, obj, cb){
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        cb(kembalian, a)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item}, sisa uangnya cuma ${uang}`);
        cb(0, a)
      }
    }, obj.waktu);
  }
  
function jual(){


}

function test () {

}