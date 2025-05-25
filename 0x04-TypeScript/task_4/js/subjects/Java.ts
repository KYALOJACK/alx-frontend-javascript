/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  // Declaration merging: add optional property to Teacher
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
