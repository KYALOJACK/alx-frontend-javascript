/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  // Declaration merging: add optional property to Teacher
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
