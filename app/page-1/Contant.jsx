import React from 'react'

const Contant = () => {
  return (
    <>
      <div className='paragraph'><h2>Browser Categories</h2></div>
      <div className='grid-container'>
        <div className='card'><img src='svg.png' />
          <p>3-D Models</p>
          <p style={{ marginTop: '20px' }}>Charaters ,Enviroment ,Props and more</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
        <div className='card'><img src='Vector.png' />
          <p>Materials & Textures</p>
          <p style={{ marginTop: '20px' }}>PBR Materials ,Texture pack and surfaces</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
        <div className='card'><img src='Vector2.png' />
          <p>Blueprints</p>
          <p style={{ marginTop: '20px' }}>Game mechanics ,UI system and utilities</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
        <div className='card'>
          <img src="Vector3.png" />
          <p>VFX and Particles</p>
          <p style={{ marginTop: '20px' }}>Visual effects ,Particles and animations</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
        <div className='card'>
          <img src='Vector4.png' />
          <p>Audio</p>
          <p style={{ marginTop: '20px' }}>Sound effects,Music tracks and ambiance</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
        <div className='card'>
          <img src="Vector5.png" />
          <p>VR & AR</p>
          <p style={{ marginTop: '20px' }}>Virtual and Augmented reality assets</p>
          <button className='dark-button'><b>View More</b></button>
        </div>
      </div>
    </>
  )
}

export default Contant;
