"use strict"
const Table = require('cli-table');

class View {
    static show_all_data(data){
        console.log(data);
    }
    // static viewAuthor(data){
    //     console.log(data)
    //     var table = new Table({
    //         head: ['ID', 'First Name', 'Last Name', 'Religion']
    //       , colWidths: [10, 10]
    //     });
    //     console.log(table.toString());
    // }
    // static addSuccess(){
    //     console.log(`Data berhasil dimasukan ke dalam database`)
    // }
    // static deleteSuccess(){
    //     console.log(`Data berhasil dihapus dari dalam database`)
    // }
    // static updateSuccess(){
    //     console.log(`Database telah berhasil di update dengan data baru`)
    // }
//     static help() {
//         console.log(`
// === documentation ==========================
// author add  ->  add<space> "data yang ingin dimasukan"
// author read_one  ->  read_one<space> "masukkan id author"
// author real_all ->  read_all
// author update ->  update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
// author delete  ->  delete<space> "masukan id author"
// tag add  -> add<space> "data yang ingin dimasukan"
// tag read_one  ->  read_one<space> "masukkan id tag"
// tag real_all ->  read_all
// tag update -> update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
// tag delete  ->  delete<space> "masukan id tag"
// article add  -> add<space> "data yang ingin dimasukan"
// article read_one  ->  read_one<space> "masukkan id article"
// article real_all ->  read_all
// article update -> update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
// article delete  ->  delete<space> "masukan id article"`)
    // }
}

module.exports = View;
