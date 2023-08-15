import React from 'react';
import ProfessorDetails from '../pages/ProfessorDetails'; // Certifique-se de que o caminho está correto

const professores = [
  {
    nome: 'Professor 1',
    coverPhoto: 'url-da-foto-de-capa.jpg',
    profilePicture: 'url-da-foto-de-perfil.jpg',
    horarios: 'Segunda e Quarta, 9h - 11h',
    dias: 'Segunda, Quarta e Sexta',
    local: 'Endereço da Escola',
    // ... outras informações
  },
  {
    nome: 'Professor 2',
    // Outras propriedades...
  },
  // ... outros professores
];

const Professores = () => {
  return (
    <div>
      <h1>Professores</h1>
      {professores.map((professor, index) => (
        <ProfessorDetails key={index} professor={professor} />
      ))}
    </div>
  );
};

export default Professores;
