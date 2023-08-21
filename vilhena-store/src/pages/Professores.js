import TeachersList from '../components/TeacherList';
import '../styles/TeacherList.css';

function Professores() {
  return (
    <div className="Professores">
      <h1>Professores</h1>
      <h5 className='sub'>Todos os nossos professores são devidamente registrados na CBJJ Confederação Brasileira de Jiu-Jitsu.</h5>
      <TeachersList />
    </div>
  );
}

export default Professores;