// API services for courses
export const getCourses = async () => {
  // Placeholder API call
  return [
    { id: 1, title: 'Coding Fundamentals', description: 'Learn basic coding' },
    { id: 2, title: 'Advanced Coding', description: 'Advanced topics' },
  ];
};

export const createCourse = async (course: { title: string; description: string }) => {
  // Placeholder
  return { id: Date.now(), ...course };
};