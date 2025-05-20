"use client"
import React, { useRef, useState } from 'react';
const NewArrival = () => {
  const scrollRef = useRef(null);
  const [videoErrors, setVideoErrors] = useState({});

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleVideoError = (index) => {
    setVideoErrors(prev => ({ ...prev, [index]: true }));
  };

  const videos = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
      description: "A heartwarming animated adventure"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephants Dream",
      description: "A surreal animated journey"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
      description: "Action-packed adventure"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "For Bigger Escapes",
      description: "Thrilling escape sequences"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
      description: "Non-stop entertainment"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      title: "For Bigger Joyrides",
      description: "Exciting joyride moments"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
      title: "For Bigger Meltdowns",
      description: "Dramatic meltdown scenes"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
      title: "Subaru Adventure",
      description: "Off-road excitement"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
      title: "Tears of Steel",
      description: "Epic sci-fi adventure"
    },
    {

    }
  ];

  return (
    <div className="new-arrival">

      <h1 style={{color:"white"}}>New Arrival</h1>

      <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>

      <div className="box-group" ref={scrollRef}>
        {videos.map((video, i) => (
          <div className="box" key={i}>
            <div className="video-container">
              {!videoErrors[i] ? (
                <video
                  src={video.src}
                  muted
                  loop
                  poster={video.poster}
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  onError={() => handleVideoError(i)}
                />
              ) : (
                <img
                  src={video.poster}
                  alt={video.title}
                  className="fallback-image"
                />
              )}
            </div>
            <div className="content-overlay">
              <div className="content-title">{video.title}</div>
              <div className="content-description">{video.description}</div>
            </div>
          </div>

        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default NewArrival;
