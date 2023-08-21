import React from 'react';
import '../styles/ProfessorDetails.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProfessorDetails = ({ professor }) => {
  return (
    <div className="professor-details">
      <div className="cover-photo">
        <img src={professor.coverPhoto} alt={`${professor.nome} - Foto de Capa`} />
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={professor.profilePicture} alt={`${professor.nome} - Foto de Perfil`} />
        </div>
        <div className="info">
          <h2>{professor.nome}</h2>
          <p>Horários de Aula: {professor.horarios}</p>
          <p>Dias de Aula: {professor.dias}</p>
          {/* Outras informações */}
        </div>
      </div>
      {/* Carrossel de fotos */}
      <div className="photo-carousel">
        <Carousel>
          <div>
            <img src="url-da-foto-1.jpg" alt="Foto 1" />
            <p className="legend">Legenda da Foto 1</p>
          </div>
          <div>
            <img src="url-da-foto-2.jpg" alt="Foto 2" />
            <p className="legend">Legenda da Foto 2</p>
          </div>
          {/* Adicione mais slides de fotos conforme necessário */}
        </Carousel>
      </div>
      <div className="school-location">
        <p>Local da Escola: {professor.local}</p>
      </div>
      <div className="floating-whatsapp">
        {/* Ícone do WhatsApp flutuante */}
      </div>
    </div>
  );
};

export default ProfessorDetails;
