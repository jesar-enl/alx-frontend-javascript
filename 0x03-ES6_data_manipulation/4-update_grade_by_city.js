export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const std_grade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      const grade = std_grade ? std_grade.grade : 'N/A';

      return { ...student, grade };
    });
}
