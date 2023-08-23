import { useState, useEffect, useRef } from 'react'
import '../styles/ProfessorDetails.css';
import { motion } from 'framer-motion';


const ProfessorDetails = ({ professor }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


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
          <p>Registro: {professor.registro}</p>
          <p>Dias de Aula: {professor.dias}</p>
          <div className="school-location">
            <p>Local da Escola: {professor.local}</p>
          </div>
          {/* Outras informações */}
        </div>
      </div>
      {/* Carrossel de fotos */}
      <div>
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing" }}>
          <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{right: 0, left: width}}
          >
          <img className="imgc" src={professor.photoCarrossel1} alt="alt" />
          <img className="imgc" src={professor.photoCarrossel2} alt="alt" />
          <img className="imgc" src={professor.photoCarrossel3} alt="alt" />
          </motion.div>
        </motion.div>
      </div>
      <div className="floating-whatsapp">
        {/* Ícone do WhatsApp flutuante */}
      </div>
    </div>
  );
};

export default ProfessorDetails;
