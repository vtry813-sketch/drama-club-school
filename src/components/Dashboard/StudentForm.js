import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    photo: '',
    motherName: '',
    fatherName: '',
    note: '',
    yearGroup: '6'
  });

  const yearGroups = ['6', '7', '8', '9', '10', '11'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      dateOfBirth: '',
      photo: '',
      motherName: '',
      fatherName: '',
      note: '',
      yearGroup: '6'
    });
  };

  return (
    <div className="student-form-card">
      <h3>Register New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Child's Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mother's Name *</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Father's Name *</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Year Group *</label>
            <select
              name="yearGroup"
              value={formData.yearGroup}
              onChange={handleChange}
              required
            >
              {yearGroups.map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Photo URL</label>
            <input
              type="url"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Notes about the Child</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
            placeholder="Any special notes, allergies, or important information..."
          />
        </div>

        <button type="submit" className="submit-btn">
          Register Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
