import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener tu archivo de estilos CSS

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="column">
      <div className="div2" onClick={handleShowVideo}>
        Chapter 1
        <img className="imagen" width="35" src="./public/play.png" onClick={handleShowVideo} />
      </div>
      <div className="div3" onClick={handleShowVideo}>
        Chapter 2
        <img className="imagen" width="35" src="./public/play.png" onClick={handleShowVideo} />
      </div>
      <div className="div4" onClick={handleShowVideo}>
        Chapter 3
        <img className="imagen" width="35" src="./public/play.png" onClick={handleShowVideo} />
      </div>
      <div className="div5" onClick={handleShowVideo}>
        Chapter 4
        <img className="imagen" width="35" src="./public/play.png" onClick={handleShowVideo} />
      </div>
      <div className="div6" onClick={handleShowVideo}>
        Chapter 5
        <img className="imagen" width="35" src="./public/play.png" onClick={handleShowVideo} />
      </div>

      {showVideo && (
        <div className="video-container">
          <video controls>
            
            <source src="./public/video.mov" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;