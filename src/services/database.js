// Service de base de données côté client avec localStorage
let students = JSON.parse(localStorage.getItem('dramaClubStudents') || '[]');

// Générer un ID unique
const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const getStudents = async () => {
  // Retourne les étudiants depuis localStorage
  return students;
};

export const addStudent = async (studentData) => {
  const newStudent = {
    ...studentData,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  students.push(newStudent);
  localStorage.setItem('dramaClubStudents', JSON.stringify(students));
  
  return { 
    success: true, 
    insertedId: newStudent.id,
    student: newStudent
  };
};

export const searchStudents = async (searchTerm) => {
  if (!searchTerm) return students;
  
  return students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const deleteStudent = async (studentId) => {
  students = students.filter(student => student.id !== studentId);
  localStorage.setItem('dramaClubStudents', JSON.stringify(students));
  return { success: true };
};
