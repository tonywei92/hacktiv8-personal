### Release 0
```SQL
SELECT
	crops.name AS Vegetable, buy, sell, profitPerDay AS "profit/d", daysToGo, 30 / daysToGo * profitPerDay AS profitPerMonth, seasons.name AS Season
FROM crops
JOIN seasons ON crops.idSeason = seasons.id
ORDER BY profitPerMonth DESC
LIMIT 5
```
### Release 1
```SQL
SELECT
	seasons.name AS Season, count(seasons.name) AS Total, sum(buy) AS Budget
FROM crops
JOIN seasons ON crops.idSeason = seasons.id
GROUP BY seasons.name
ORDER BY seasons.id
```

### Release 2
``` SQL
SELECT
crops.name ||" (sell: "|| crops.sell || ")" AS Vegetable, seasons.name AS Season
FROM crops
JOIN seasons ON crops.idSeason = seasons.id
WHERE crops.name LIKE "_u%"
```