// src/components/TeachersList.js
import React from 'react';
import Teacher from './Teacher';
import '../styles/TeacherList.css';
import Jef from '../img/teachers/jeffersonVilhena.png'

const teachers = [
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
];

const TeachersList = () => {
  return (
    <div className="teachers-container">
      {teachers.map((teacher, index) => (
        <Teacher
          key={index}
          name={teacher.name}
          local={teacher.local}
          graduation={teacher.graduation}
          Register={teacher.Register}
          imageUrl={teacher.imageUrl}
        />
      ))}
    </div>
  );
};

export default TeachersList;
