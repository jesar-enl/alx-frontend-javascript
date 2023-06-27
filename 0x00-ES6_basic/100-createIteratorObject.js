export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { value: undefined, done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployees = report.allEmployees[currentDepartment];

      if (currentEmployeeIndex >= currentEmployees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Recurse to move to the next non-empty department
      }

      const currentEmployee = currentEmployees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: currentEmployee, done: false };
    },
  };
}
