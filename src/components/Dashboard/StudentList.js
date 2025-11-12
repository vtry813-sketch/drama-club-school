import React from 'react';

const StudentList = ({ students }) => {
  if (students.length === 0) {
    return (
      <div className="no-students">
        <p>No students found. Register a new student to get started!</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <h3>Registered Students ({students.length})</h3>
      <div className="students-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <div className="student-header">
              {student.photo ? (
                <img src={student.photo} alt={student.name} className="student-photo" />
              ) : (
                <div className="student-photo-placeholder">
                  {student.name.charAt(0)}
                </div>
              )}
              <div className="student-info">
                <h4>{student.name}</h4>
                <span className="year-badge">Year {student.yearGroup}</span>
              </div>
            </div>
            
            <div className="student-details">
              <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
              <p><strong>Mother:</strong> {student.motherName}</p>
              <p><strong>Father:</strong> {student.fatherName}</p>
              {student.note && (
                <p><strong>Note:</strong> {student.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
