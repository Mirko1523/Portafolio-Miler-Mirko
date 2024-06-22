import React from 'react';
import Footer from './footer/footer';
import Style from './home.module.css';
import ima from './IMG/WhatsApp Image 2024-04-17 at 20.07.32.jpeg';
import icon1 from './IMG/icons8-github-48.png';
import icon2 from './IMG/icons8-linkedin-32.png';
import icon3 from './IMG/2416659.webp'

function Home() {
  return (
    <div className={Style.backgroundHome}>
      <div className={Style.basicInformation}>
        <h1>Mirko Miler</h1>
        <p>Programador Full Stack Developer con enfoque en el Front End</p>
        <div className={Style.locationContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-globe size-3"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <p>Gualeguaychú, Entre Ríos, Argentina</p>
        </div>
        <div>
          <a href="https://github.com/Mirko1523">
            <img src={icon1} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/mirko-miler-290bb3295/">
            <img src={icon2} alt="LinkedIn" />
          </a>
            <a href="https://drive.google.com/drive/u/1/folders/1xFYdr-g3-u4Bxxyo6JFaI8tJt7UEF5fe">
            <img src={icon3} alt="CV" />
          </a>
        </div>
        <div className={Style.img}>
          <img src={ima} alt="foto perfil" />
        </div>
      </div>
      <hr />
      <div className={Style.backgroundAboutMe}>
        <h1>Sobre mí</h1>
        <p>
          Soy un desarrollador web especializado en Front End, residente en Gualeguaychú, Entre Ríos, Argentina. He trabajado en varios proyectos, tanto individuales como grupales, donde he adquirido experiencia en diversas tecnologías.
        </p>
        <p>
          Me destaco en el uso de <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong> y <strong>Redux</strong>.
        </p>
      </div>
      <hr />
 <div className={Style.backgroundExperiency}>
    <h1>Experiencia Laboral</h1>
    <h3>Proyecto InterFoods</h3>
    <p>
        Participé en un proyecto grupal para desarrollar una página web de comida internacional a domicilio. Mi papel consistió en liderar el desarrollo del frontend utilizando tecnologías como <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>HTML</strong> y <strong>CSS</strong>.
    </p>
    <hr />
    <h3>Proyecto Dogs</h3>
    <p>
        Desarrollé un proyecto individual creando una página web sobre razas de perros. En el backend, utilicé <strong>JavaScript</strong>, <strong>PostgreSQL</strong>, <strong>SQL Shell</strong>, <strong>Node.js</strong> y <strong>Express</strong>. En el frontend, trabajé con <strong>HTML</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>, <strong>React</strong> y <strong>Redux</strong>.
    </p>
    <hr />
    <h3>Proyecto Calculadora</h3>
    <p>
        Creé una página web de una calculadora desde cero. Realicé el desarrollo del frontend utilizando tecnologías como <strong>HTML</strong>, <strong>TypeScript</strong> y <strong>CSS</strong>.
    </p>
    <hr />
    <h3>Proyecto Juego de Adivinanza</h3>
    <p>
        Desarrollé una página web de un juego de adivinanza desde cero. Trabajé en el desarrollo del frontend utilizando <strong>HTML</strong>, <strong>TypeScript</strong> y <strong>CSS</strong>.
    </p>
    <hr />
     <h3>Proyecto Clima</h3>
    <p>
        Realicé la creación de esta aplicacion web para la busqueda del clima actual de tu ciudad o de cualquier otra ciudad del mundo. Utilicé una API externa para la obtención de los climas y 
         en el desarrollo del frontend he utilizado <strong>HTML</strong>, <strong>TypeScript</strong> y <strong>CSS</strong>.
    </p>
    <hr />
     <h3>Proyecto Rating de peliculas</h3>
    <p>
        He creado esta página para conocer la opinión de expertos en tus peliculas favoritas. He utilizado una API externa para obtener las peliculas y 
         en el desarrollo del frontend he utilizado <strong>HTML</strong>, <strong>TypeScript</strong> y <strong>CSS</strong>.
    </p>
    <hr />
     <h3>Proyecto Crypto Price App</h3>
    <p>
       Proyecto en el cúal he creado una página web que muestra las criptomonedas con sus despectivos valores y los cambios durante las 24 horas del dia. Trabajé con una API externa que me da las criptomonedas y sus valores. En el desarrollo del frontend he trabajado con <strong>HTML</strong>, <strong>JavaScript</strong> y <strong>CSS</strong>.
    </p>
    <hr />
</div>

      <div className={Style.education}>
        <h1>Educación</h1>
        <h3>Henry</h3>
        <p>Me gradué como Full Stack Developer</p>
      </div>
      <hr />
      <div className={Style.skills}>
        <h1>Skills</h1>
        <div className={Style.skillsP}>
          <p><strong>HTML</strong></p>
          <p><strong>CSS</strong></p>
          <p><strong>JavaScript</strong></p>
          <p><strong>TypeScript</strong></p>
          <p><strong>React</strong></p>
          <p><strong>Redux</strong></p>
          <p><strong>PostgreSQL</strong></p>
          <p><strong>Sequelize</strong></p>
          <p><strong>Node.js</strong></p>
        </div>
      </div>
      <hr />
    <div className={Style.Projects}>
    <h1>Proyectos</h1>
    <div className={Style.projectContainer}>
        <div className={Style.ProjectsText}>
            <a href='https://interfoods.netlify.app/'><h3>InterFoods</h3></a>
            <p>Una plataforma donde podrás pedir comida a domicilio de diferentes países latinoamericanos!</p>
        </div>
        <div className={Style.ProjectsText}>
            <a href='https://github.com/Mirko1523/Proyecto-Individual-dogs.git'><h3>Dogs</h3></a>
            <p>Página web donde podrás encontrar y crear razas de perros y sus características!</p>
        </div>
        <div className={Style.ProjectsText}>
            <a href='https://calculadoracalcula.netlify.app/'><h3>Calculadora</h3></a>
            <p>Aplicación para realizar cálculos matemáticos</p>
        </div>
        <div className={Style.ProjectsText}>
            <a href='https://juegodeadivinarnumero.netlify.app/'><h3>Adivinanza</h3></a>
            <p>¡Un divertido juego donde tendrás que adivinar números del 1 al 100 con infinitos intentos y posibilidades!</p>
        </div>
           <div className={Style.ProjectsText}>
            <a href='https://weatherallworld.netlify.app/'><h3>Clima</h3></a>
            <p>Aplicación donde podras buscar el clima de tu ciudad o país.</p>
        </div>
           <div className={Style.ProjectsText}>
            <a href='https://allmoviesrating.netlify.app/'><h3>Rating de peliculas</h3></a>
            <p>Encuentra la opinión de los expertos de tus peliculas favoritas.</p>
        </div>
        <div className={Style.ProjectsText}>
            <a href='https://criptoprice24hours.netlify.app/'><h3>Crypto Price App</h3></a>
            <p>Aplicación que muestra los cambios de valor de las criptomonedas más importantes</p>
        </div>
    </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
