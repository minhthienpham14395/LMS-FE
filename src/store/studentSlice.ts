// Student slice for state management
export interface StudentState {
  students: { id: number; name: string; grade: string }[];
}

const initialState: StudentState = {
  students: [],
};

export const studentSlice = {
  name: 'student',
  initialState,
  reducers: {
    setStudents: (state: StudentState, action: { payload: { id: number; name: string; grade: string }[] }) => {
      state.students = action.payload;
    },
    addStudent: (state: StudentState, action: { payload: { id: number; name: string; grade: string } }) => {
      state.students.push(action.payload);
    },
  },
};