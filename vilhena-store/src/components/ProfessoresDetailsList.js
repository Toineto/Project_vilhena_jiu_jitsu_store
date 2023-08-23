import Jef from '../img/teachers/jeffersonVilhena.png'
import CapaJef from '../img/capas/capajef.jpg'
import carrosel1 from '../img/carrosel.jef/carrosel1.jpg'
import carrosel2 from '../img/carrosel.jef/carrosel2.jpg'
import carrosel3 from '../img/carrosel.jef/carrosel3.jpg'

const professores = [
  {
    id: 1,
    nome: 'Jefferson Vilhena',
    coverPhoto: CapaJef,
    profilePicture: Jef,
    registro: 'Faixa preta IV Grau, CBJJ: 28972',
    dias: 'Segunda, Quarta e Sexta',
    local: 'Endereço da Escola',
    photoCarrossel1: carrosel1,
    photoCarrossel2: carrosel2,
    photoCarrossel3: carrosel3,
    // ... outras informações
  },
  {
    id: 2,
    nome: 'Professor 2',
    coverPhoto: 'url-da-foto-de-capa.jpg',
    profilePicture: 'url-da-foto-de-perfil.jpg',
    registro: 'Segunda e Quarta, 9h - 11h',
    dias: 'Segunda, Quarta e Sexta',
    local: 'Endereço da Escola',
    // ... outras informações
  },
  // ... outros professores
];

export default professores;
