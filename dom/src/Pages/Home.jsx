import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='page'>
     <div className='left'>
      <div className='div1'>
       <h4>Matatu Culture</h4>
       <p>kenya in worldly know for hists beautiful matatus</p>
       <p>follow our link</p>
      </div>
      <div className='div1'>
      <h4>Trending Matatu</h4>
      <p>Bumble Bee OF ONGATA RONGAI is the most trending matatu</p>
      <p>follow our link</p>
     </div>
     <div className='div1'>
     <h4>Most rated County</h4>
     <p>KAJIADO County is the most rated county due to its amaizing matatus </p>
     <p>follow our link</p>
    </div>
     </div>
    <div className='right'>
    <h4 className='high'>Highlights</h4>
    <p>Ronga </p>
    <p>Umoja</p>
    <p>Dandora</p>
    <p>Ngong</p>
    </div>
     
    </div>
  )
}

export default Home
