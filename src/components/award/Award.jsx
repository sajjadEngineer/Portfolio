import React from 'react'
import './award.css'
import pic from '../../assets/images/award.JPG'
const Award = () => {
  return (
    <div className='award' id='award'>
        <div className="award_grid">
        <div className="award_heading"><h2>Award</h2></div>
        <div className="Achievement"><p> My life Achievements</p></div>
        <div className="line">
            <p></p>
        </div>
        </div>

        <div className="content">
        
<div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
    <img src={pic} alt="no image" />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>Gold Medalist</h3>
    <div>
    Got a Gold medal at Qurtuba university in 2019 in master of computer science.
  </div>
</div>
 </div>
 
<div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        {/* <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"> */}
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>Final Year Project</h3>
    <div>Got 1st Position appreciation certificate in Final Year Project exhibition.
  </div>
</div>
 </div>

    </div>
            <div className="free-space">

            </div>

</div>
  )
}

export default Award