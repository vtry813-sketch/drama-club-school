import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm.js';
import StudentList from './StudentList.js';
import SearchBar from './SearchBar.js';
import { getStudents, addStudent, searchStudents } from '../../services/database.js';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const studentsData = await getStudents();
      setStudents(studentsData);
    } catch (error) {
      console.error('Erreur lors du chargement des étudiants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
    
    // Mises à jour en temps réel - recharger toutes les 3 secondes
    const interval = setInterval(loadStudents, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const searchStudentsData = async () => {
      if (searchTerm) {
        const filtered = await searchStudents(searchTerm);
        setStudents(filtered);
      } else {
        loadStudents();
      }
    };
    
    searchStudentsData();
  }, [searchTerm]);

  const handleAddStudent = async (studentData) => {
    try {
      await addStudent(studentData);
      await loadStudents(); // Recharger pour obtenir la liste mise à jour
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
      alert('Erreur lors de l\'ajout de l\'étudiant');
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Tableau de Bord du Club de Théâtre</h1>
        <p>Gérez les inscriptions des étudiants en temps réel</p>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-section">
          <StudentForm onSubmit={handleAddStudent} />
        </div>
        
        <div className="dashboard-section">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Rechercher un étudiant par nom..."
          />
          
          {loading ? (
            <div className="loading">Chargement...</div>
          ) : (
            <StudentList students={students} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
