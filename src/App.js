import './App.css';
import Imag2 from './components/imgs/Foto para ingles.jpg';
import Imag3 from './components/imgs/akira.jpeg';
import img3 from './components/imgs/descubrir.png';
import ContenedorHooks from './components/contenedorHooks/contenedorHooks';
import {ContenedorInfo, ContenedorInfo2} from './components/contenedorInfo/contenedorInfo';
import EjemploAPI from './components/EjemploAPI/EjemploAPI';

import ClimaAPI from './components/climaAPI/climaAPI';
import UsoAPI_Nasa from './components/usoAPI_Nasa/usoAPI_Nasa';
import AgenteValo from './components/AgenteValo/AgenteValo';
import ContenedorYoutube from './components/contenedorYoutube/contenedorYoutube';
const mensajeDescripcion= "Naci el 22/12/2001, Actualmente tengo 21 años, donde estudie los Basicos y Diversificado es el colegio San Jose de la Encarnación del cual me gradue de Bachillerato en Computación orientado en Cientifica. Algunos deportes que me gusta y práctico es el Volleyball de playa, natación y agregado a estos voy 5 dias a la semana al gym. Además me gusta pasar tiempo con mis amigos, novio y familia. Me gusta mucho las peliculas de miedo, amor, suspenso,documentales. Soy fan de leer libros de superación personal, además amo a los animales y las atracciones mecánicas";
const mensajeDescripcion2="Naci el 16/08/2020, Acualmente tengo 3 años, me gustan los premios, dormir y jugar con mis mamas. Soy una chihuhua cabeza de manzada por eso soy pequeña además estaba gordita ya que me gustaba mucho la comida pero me pusieron a dieta y ahora solo como 2 veces al dia 1/4 de taza en cada comida y a veces si no me lleno me dan zanahoria o sandia. No me gusta bañarme, ni el agua.";

function App() {
  return (
    <div /*className="backgroundContent"*/>
      <header className="posts">
        <div>
        {/* <ContenedorInfo titulo="Alumno de octavo ciclo" iconoInfo={Imag2} 
          instricciones="Andrea Cecilia Corado Paiz" descripcion={mensajeDescripcion}></ContenedorInfo>

          <ContenedorInfo2 titulo="Mascota de Alumno de octavo ciclo" iconoInfo={Imag3} 
  instricciones="Akira Corado Paiz" descripcion={mensajeDescripcion2}></ContenedorInfo2>*/}
         {/*<ContenedorHooks/>*/}
         {/* <ClimaAPI/>*/}
         {/* <UsoAPI_Nasa/>*/}
         
        {/* <AgenteValo/>*/} 

          {/* <EjemploAPI/>*/}

          <ContenedorYoutube titulo="Mi primer titulo" fechapubli="19/12/2020" 
          antiguedad="3 años" iconoCanal={img3} nombrecanal="Discovery" 
  cantsubs="1.1M" descripcion={mensajeDescripcion}/>
         </div>
      </header>
    </div>
  );
}

export default App;
