import React from 'react';
import {Carousel} from 'react-materialize';

const About = (props) => {
  return (
    <div className='container'>
      <div className='row'>

      </div>
      <div className='row'>
        <div className='col s12'>
          <Carousel options={{ fullWidth: true, indicators:true }}>
            <div className='teal lighten-3'>
              <p><h2 className="white-text center">QUIENES SOMOS</h2></p>
              <p>Neptune Labs es una empresa de servicios de asesoría en normas ISO,
              principalmente del área de metrología, además distribuimos materiales de referencia certificados,
              realizamos calibraciones y contamos con asesoría técnica para uso de MRC
              en los equipos. Marcamos la diferencia ofreciendo una solución integral a sus necesidades metrológicas.
              </p>
            </div>
            <div className='teal lighten-3'>
              <p><h2 className="white-text center">NUESTRA EMPRESA</h2></p>
            </div>
            <div className='teal lighten-3'>
              <p><h2 className="white-text center">POLÍTICA DE CALIDAD</h2></p>
              <p>
              Neptune Labs sigue los lineamientos de las siguientes normas internacionales: NTC – ISO 9001:2015, NTC – ISO/IEC 17025:2017 y NTC – ISO/ICE:2016, por lo cual se compromete a:

              •	Mejorar continuamente y satisfacer los requisitos de sus clientes, reglamentarios y legales en la prestación de los servicios incluidos en el portafolio de la empresa.
              •	Asegurar la calidad de los servicios y productos ofrecidos caracterizándose por hacerlo de forma imparcial, confiable y confidencial, con un personal idóneo, comprometido con las buenas prácticas profesionales.
              •	Optimizar los recursos, tanto humanos como infraestructura para lograr satisfacer a sus clientes y ser
              reconocida como una empresa líder en el mercado.</p>

            </div>

          </Carousel>
        </div>

      </div>

      <div className='row'>
        <div className="col s12 m6 l6">
          <div className="card-panel teal lighten-2">
          <p><h2 className="white-text center">Misión</h2></p>
           Neptune Labs es una empresa comprometida con la excelencia, donde se ofrece una solución integral de asesoría en normas técnicas y en soporte metrológico especializado a los diferentes sectores de la industria. Contamos con personal competente para así asegurar la calidad en nuestros procesos
           y brindar un servicio que supere las expectativas de los clientes.
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="card-panel teal lighten-2">
          <p><h2 className="white-text center">Visión</h2></p>
           Neptune Labs será en el 2022 una empresa reconocida para la prestación de servicios metrología y asesoría en normas técnicas, además busca ser distinguida en el mercado como un distribuidor competente de materiales de referencia certificados,
           que se caracteriza por brindar una solución integral a sus clientes.
          </div>
        </div>
      </div>

    </div>
  );
}


export default About;
