import React, { useState } from 'react';
import './style.css'; // Asegúrate de tener tu archivo de estilos CSS

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="container">
      {showNotification && (
        <div className="notification">
          
          <h2>Aviso de Privacidad</h2>
          <p>
            El contenido de la web a la que quieres acceder ha sido elaborado por profesionales para garantizar que 
            la información que se ofrece es de calidad. Puedes acceder a este sitio web (excepto al contenido de 
            suscripciones Premium) mediante las siguientes opciones:
          </p>
          <p>
            <strong>Aceptar cookies y acceder de forma gratuita:</strong> La publicidad digital personalizada, 
            basada en la información recogida mediante cookies o tecnologías similares, nos permite financiar 
            nuestra actividad para seguir ofreciéndote contenido con altos estándares de calidad sin coste.
          </p>
          <p>
            Pulsando el botón “Aceptar y continuar”, puedes acceder a la web aceptando la instalación de todas 
            las cookies, ya sean nuestras o de nuestros socios, que nos permiten el seguimiento y análisis del 
            comportamiento en el sitio web, así como desarrollar un perfil específico para mostrarte publicidad y 
            contenido personalizado en función del mismo. Puedes consultar más información en nuestra Política de 
            Cookies y retirar en cualquier momento el consentimiento pulsando el botón Configuración de cookies que 
            aparece disponible en el pie de nuestra página web.
          </p>

          <a href='/serie'><div className="btn btn-red" onClick={() => setShowNotification(true)}>Aceptar y continuar</div></a>

        
        </div>
      )}
      <div className="hero-buttons">
        <input type="text" placeholder="Email address" className="btn" id='email' />
        <div className="btn btn-red" onClick={() => setShowNotification(true)}>Get Started &gt;</div>
      </div>
    </div>
  );
};

export default App;


