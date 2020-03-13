## Release 0

```sql
SELECT  distinct classes.name  FROM classes
INNER JOIN class_students on classes.id = class_students.classId
where schedule = 'Friday'
```

### Relase 1

```sql
select students.name as 'Student name', classes.name as 'Class Name', schedule as 'Schedule' from students
inner join class_students on class_students.studentId = students.id
inner join classes on class_students.classId = classes.id
where classes.name = 'Bahasa Korea'
and students.name like '__m%'
```

### Release 2

```sql
select *, count(schedule) as totalStudent from classes
left join class_students on classes.id = class_students.classId
group by classId, class_students.schedule
having totalStudent < 3
order by totalStudent desc
```
