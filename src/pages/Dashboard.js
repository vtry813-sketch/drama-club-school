import React, { useState, useEffect } from 'react';
import StudentForm from '../components/Dashboard/StudentForm.js';
import StudentList from '../components/Dashboard/StudentList.js';
import SearchBar from '../components/Dashboard/SearchBar.js';
import { getStudents, addStudent } from '../services/database.js';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const loadStudents = async () => {
    try {
      const studentsData = await getStudents();
      setStudents(studentsData);
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
    
    // Real-time updates - reload every 5 seconds
    const interval = setInterval(loadStudents, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddStudent = async (studentData) => {
    try {
      await addStudent(studentData);
      await loadStudents(); // Reload to get updated list
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Drama Club Registration Dashboard</h1>
        <p>Manage student registrations in real-time</p>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-section">
          <StudentForm onSubmit={handleAddStudent} />
        </div>
        
        <div className="dashboard-section">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <StudentList students={filteredStudents} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
