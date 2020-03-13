/*
  Release 0
	Tampilkan data id storage, storage name dan quantity, untuk 4 storage berdasarkan quantity dan id storage terbesar
*/

SELECT 
	PO.storage_id id,
	S.name name,
	sum(PO.quantity) quantity
FROM purchase_orders PO
JOIN storages S
ON
	PO.storage_id = S.id
GROUP BY 
	PO.storage_id
ORDER BY
	quantity DESC,
	id DESC
LIMIT 4;

/*
	Release 1
	Tampilkan nama product, nama storage dan total purchase (perkalian quantity dan price)
	berdasarkan storage dan produknya yang total purchasenya antara 5 juta hingga 10 juta
	dan di urutkan berdasarkan total purchase terbesar 
*/

SELECT 
	s.name,
	p.name,
	sum(PO.quantity * PO.price) AS purchase
FROM purchase_orders PO
LEFT JOIN storages S
	ON S.id = PO.storage_id
LEFT JOIN products P 
	ON P.id = PO.product_id
GROUP BY 
	product_id,
	storage_id
HAVING
	purchase BETWEEN 5000000 AND 10000000
ORDER BY 
	purchase DESC