module.exports = {
  formatUang: function(uang) {

    // let money = uang.toString().split('').reverse();
    // let moneys= [];
    // for(let i = 0; i< money.length;i++){
    //   if((i+1) % 3 === 0 && (i+1) !== money.length){
    //     moneys.push(money[i]);
    //     moneys.push('.');
    //   }else{
    //     moneys.push(money[i]);
    //   }
    // }
    //
    // return `Rp${moneys.reverse().join('')}`;
    return uang.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'});
  }
}
