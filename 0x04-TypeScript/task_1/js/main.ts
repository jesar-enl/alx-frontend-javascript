interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true,
};

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'Los Angeles',
  numberOfReports: 5,
};

console.log(director);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${formattedLastName}`;
};

console.log(printTeacher('John', 'Doe')); // Output: J. Doe
