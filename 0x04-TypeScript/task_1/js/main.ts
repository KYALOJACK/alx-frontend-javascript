interface Teacher {
  readonly firstName: string;          // only modifiable on initialization
  readonly lastName: string;           // only modifiable on initialization
  fullTimeEmployee: boolean;           // always defined
  yearsOfExperience?: number;          // optional
  location: string;                    // always defined
  [key: string]: any;                  // allow any additional properties like contract:boolean
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // additional property allowed
};

console.log(teacher3);
