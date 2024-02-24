import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener tu archivo de estilos CSS

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="column">
      <div className="div2">
        Chapter 1
        <img className="imagen" width="35" src="public/Play.png" alt="Play" onClick={handleShowVideo} />
      </div>
      <div className="div3">
        Chapter 2
        <img className="imagen" width="35" src="public/Play.png" alt="Play" onClick={handleShowVideo} />
      </div>
      <div className="div4">
        Chapter 3
        <img className="imagen" width="35" src="public/Play.png" alt="Play" onClick={handleShowVideo} />
      </div>
      <div className="div5">
        Chapter 4
        <img className="imagen" width="35" src="public/Play.png" alt="Play" onClick={handleShowVideo} />
      </div>
      <div className="div6">
        Chapter 5
        <img className="imagen" width="35" src="public/Play.png" alt="Play" onClick={handleShowVideo} />
      </div>

      {showVideo && (
        <div className="video-container">
          <video controls>
            <source width="50" src="public/Video.mov" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;