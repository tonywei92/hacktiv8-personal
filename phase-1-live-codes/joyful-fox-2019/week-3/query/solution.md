# Hacktiv Fitness 

 ## Release 1

Tampilkan nama `student`, nama `course` dan `schedule` yang diikuti oleh murid pada tanggal `2019-10-14` dan `2019-10-16` diurutkan berdasarkan nama `student` secara `ascending`

```sql
  SELECT  Students.name as 'Student Name', Courses.name as 'Course Name', CourseStudents.schedule as 'Schedule' from Courses 
  INNER JOIN CourseStudents on Courses.id = CourseStudents.courseId
  INNER JOIN Students on Students.id = CourseStudents.studentId
  WHERE schedule in ('2019-10-16', '2019-10-14')
  ORDER BY Students.name
```


## Release 2

Tampilkan `course-course` yang memiliki `student` lebih dari 2

```sql
  SELECT Courses.name 'course', COUNT(*) as student FROM Courses
  INNER JOIN CourseStudents on Courses.id = CourseStudents.courseId
  GROUP BY CourseStudents.courseId
  HAVING student > 2
```

## Release 3
Tampilkan seluruh nama `student` yang berdomisili **bukan** di jakarta dan  `course-course` yang diikuti oleh murid tersebut bila ada.

```sql
  SELECT Students.name as 'Student Name', location, schedule, Courses.name as 'Course Name' FROM Students
  LEFT JOIN CourseStudents on CourseStudents.studentId = Students.id
  LEFT JOIN Courses on CourseStudents.courseId = Courses.id
  WHERE Students.location != 'jakarta'
```
