RELEASE 0:
select
   c.id
   c.name,
   c.age,
   sum(t.quantity)
from
  customers c,
  transactions t
where
  c.id = t.customerId
group by c.id, c.name, c.age 
order by c.age desc;


RELEASE 1:
select
  *
from
  items
where
  price between 2000000 and 10000000
order by price asc;

RELEASE 2:
select
  *
from
  customers
where
  age in(19, 20, 23, 30)
order by age;

RELEASE 3:
select
  paymentMethod,
  count(*)
from
  Transactions
group by paymentMethod;


RELEASE 4:
select distinct(age) from Customers order by age;
