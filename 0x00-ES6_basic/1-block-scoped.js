export default function taskBlock(trueOrFalse) {
  var task;
  var task2;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
