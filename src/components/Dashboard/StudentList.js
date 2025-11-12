import React from 'react';

const StudentList = ({ students }) => {
  if (students.length === 0) {
    return (
      <div className="no-students">
        <p>Aucun étudiant trouvé. Inscrivez un nouvel étudiant pour commencer !</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      <h3>Étudiants Inscrits ({students.length})</h3>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
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
                <span className="year-badge">Année {student.yearGroup}</span>
              </div>
            </div>
            
            <div className="student-details">
              <p><strong>Date de naissance:</strong> {student.dateOfBirth}</p>
              <p><strong>Mère:</strong> {student.motherName}</p>
              <p><strong>Père:</strong> {student.fatherName}</p>
              {student.note && (
                <p><strong>Note:</strong> {student.note}</p>
              )}
              <p className="registration-date">
                <small>Inscrit le: {new Date(student.createdAt).toLocaleDateString('fr-FR')}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
