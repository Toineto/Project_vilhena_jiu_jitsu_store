import React from 'react';
import '../styles/TeacherList.css';

const Teacher = ({ name, graduation, Register, local, imageUrl }) => {
  return (
    <div className="teacher-card">
      <img className="teacher-img" src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{graduation}</p>
      <p>{Register}</p>
      <p>{local}</p>
    </div>
  );
};

export default Teacher;
