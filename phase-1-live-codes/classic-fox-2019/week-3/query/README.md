# Harvestmoon Query
> ⏰ Time Estimation: ~30 mins

**dilarang menggunakan view, sub-query**

refrensi: 
https://www.harvestmoonbacktonatureguide.com/crops.html


## Release 0

tampilkan 5 data, urutkan dari pro/mo tertinggi:
- Vegatable: nama crops
- buy
- sell
- pro/d: profitPerDay
- daysTG: daysToGo
- pro/mo: profit/Month dengan perhitungan: `pro/d * (30 hari / daysTG)`
- Season

hasilnya sebagai berikut:
```
Vegetable       buy     sell    pro/d   daysTG  pro/mo  Season
--------------------------------------------------------------
sweetPotato	300	120	282	6	1410	fall
greenPaper	150	40	252	8	756	fall
turnip  	120	60	84	5	504	spring
eggplant	120	80	148	10	444	fall
spinach 	200	80	87	6	435	fall
```

## Release 1
tampilkan jumlah crops dari masing-masing Season serta total harga beli (Budget) dari masing-masing Season itu. Urutkan dari Season spring -> fall

hasilnya sebagai berikut:
```
Season   Total   Budget
------------------------
spring	  5	 1120
summer	  5	 2150
fall	  5	 1070
hothouse  1	 1000
```


## Release 2

tampilkan semua Vegetable yang memiliki huruf u di huruf ke-2 nya. sertakan informasi harga jual!

hasilnya sebagai berikut:

```
Vegetable               Season
------------------------------- 
turnip (sell: 60)	spring
cucumber sell: 60)	spring
pumpkin (sell: 250)	summer
```