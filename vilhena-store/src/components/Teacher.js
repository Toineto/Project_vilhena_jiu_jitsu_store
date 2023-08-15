import React from 'react';
import '../styles/TeacherList.css';

const Teacher = ({ name, graduation, Register, local, imageUrl }) => {
  return (
    <div className="teacher-card">
        <a href={name}><img className="teacher-img" src={imageUrl} alt={name} /></a>
      <div className='information-profs'>
        <h2>{name}</h2>
        <br />
        <p>{graduation}</p>
        <br />
        <p>{Register}</p>
        <br />
        <p>{local}</p>
      </div>
    </div>
  );
};

export default Teacher;
