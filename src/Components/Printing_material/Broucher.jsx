import React from 'react'
import "./Broucher.css"

export default function Broucher() {
  return (
    <>
      <div className='bg-div'>
        <div className="container">
            <div className='three-card'>
              <div className="row">
                {/* first card */}
                  <div className="col-lg-4 col-md-6" >
                    <div className="card-div ">
                      <div className="card-img">
                        <img src=".\assest\Card Images\Bro\img 2.jpg" alt="card-img" className='top-img' />
                      </div>
                      <div className="text-div">
                        <h1>Broucher's</h1>
                        <button className='bn54'><span className='bn54span'>Buy now</span></button>
                      </div>
                    </div>
                  </div>
                {/* second card */}
                  <div className="col-lg-4 col-md-6">
                      <div className="card-div ">
                        <div className="card-img">
                          <img src=".\assest\Card Images\Bro\img 2.jpg" alt="card-img" className='top-img' />
                        </div>
                        <div className="text-div">
                          <h1>Broucher's</h1>
                          <button className='bn54'><span className='bn54span'>Buy now</span></button>
                        </div>
                      </div>
                    </div>
                {/* third card */}
                  <div className="col-lg-4 col-md-6">
                      <div className="card-div ">
                        <div className="card-img">
                          <img src=".\assest\Card Images\Bro\img 2.jpg" alt="card-img" className='top-img' />
                        </div>
                        <div className="text-div">
                          <h1>Broucher's</h1>
                          <button className='bn54'><span className='bn54span'>Buy now</span></button>
                        </div>
                      </div>
                  </div>
                {/* four card */}
                  <div className="col-lg-4 col-md-6">
                      <div className="card-div ">
                        <div className="card-img">
                          <img src=".\assest\Card Images\Bro\img 2.jpg" alt="card-img" className='top-img' />
                        </div>
                        <div className="text-div">
                          <h1>Broucher's</h1>
                          <button className='bn54'><span className='bn54span'>Buy now</span></button>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>  
    </>
  )
}

