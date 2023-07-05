interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
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
