import img1 from "../img/img1.jpg";
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <section className="home">
        <div className="home-text">
          <h4 className="text-h4">Equipe Vilhena Jiu-Jitsu</h4>
          <h1 className="text-h1">Venha fazer parte dessa família</h1>
          <p>Aqui na Equipe Vilhena Jiu-Jitsu, nós acreditamos que o jiu-jitsu é mais do que apenas uma arte marcial. É um estilo de vida que nos ajuda a desenvolver habilidades físicas e mentais, e a construir relacionamentos duradouros com nossos colegas de equipe.</p>
          <p>Nossa equipe é liderada pelo Mestre Vilhena, um dos mais respeitados instrutores de jiu-jitsu do mundo. Temos aulas para todos os níveis, desde iniciantes até lutadores profissionais, e oferecemos um ambiente amigável e inclusivo para todos os alunos.</p>
        </div>
        <div className="home-img">
          <img src={img1} alt="Equipe Vilhena" className="equipeHome" />
        </div>
      </section>
    </div>
  )
}

export default Home;
