// API services for students
export const getStudents = async () => {
  // Placeholder API call
  return [
    { id: 1, name: 'Student 1', grade: 'Grade 1' },
    { id: 2, name: 'Student 2', grade: 'Grade 2' },
  ];
};

export const createStudent = async (student: { name: string; grade: string }) => {
  // Placeholder
  return { id: Date.now(), ...student };
};