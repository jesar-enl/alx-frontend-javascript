export default function getStudentIdsSum(getListStudent) {
  return getListStudent.reduce(
    (accumulator, currrentValue) => accumulator + currrentValue.id,
    0
  );
}
