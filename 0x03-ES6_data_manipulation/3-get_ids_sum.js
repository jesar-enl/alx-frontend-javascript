export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce(
    (accumulator, currrentValue) => accumulator + currrentValue.id,
    0
  );
}
