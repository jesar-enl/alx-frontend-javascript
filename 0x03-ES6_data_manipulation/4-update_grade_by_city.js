export default function updateStudentGradeByCity(
  getStudentList,
  city,
  newGrade
) {
  return getStudentList
    .filter((student) => student.location === city)
    .map((student) => {
      const std_grade = newGrade.find(
        (grade) => grade.studentId === student.id
      );
      const grade = std_grade ? std_grade.grade : 'N/A';

      return { ...student, grade };
    });
}
