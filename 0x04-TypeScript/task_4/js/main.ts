/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

import CppModule = Subjects.Cpp;
import JavaModule = Subjects.Java;
import ReactModule = Subjects.React;
import TeacherInterface = Subjects.Teacher;

// Create and export constants for each subject class instance
export const cpp = new CppModule();
export const java = new JavaModule();
export const react = new ReactModule();

// Create and export a teacher object with experienceTeachingC = 10
export const cTeacher: TeacherInterface = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
