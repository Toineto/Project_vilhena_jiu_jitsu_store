import React from 'react';
import Teacher from './Teacher';
import '../styles/TeacherList.css';
import Jef from '../img/teachers/jeffersonVilhena.png'
import pádua from '../img/teachers/Adriano.jpeg.png'
import Manoel from '../img/teachers/manoel-jeferson.jpeg.png'

const teachers = [
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - Nova Marabá',
    graduation: 'Faixa preta IV Grau',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Adriano Pádua',
    local: 'Paraná - Curitiba - bairro',
    graduation: 'Faixa preta III Grau.',
    Register: 'Registro CBJJ: 49860',
    imageUrl: pádua,
  },
  {
    name: 'Manoel Jeferson',
    local: 'Pará - Parauapebas - bairro',
    graduation: 'Faixa preta III Grau',
    Register: 'Registro CBJJ: 248733',
    imageUrl: Manoel,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
    graduation: 'Faixa preta IV Grau.',
    Register: 'Registro CBJJ: 28972',
    imageUrl: Jef,
  },
  {
    name: 'Jefferson Vilhena',
    local: 'Pará - Marabá - bairro',
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
