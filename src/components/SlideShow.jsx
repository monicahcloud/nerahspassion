import React from 'react'
import '../App.css';

const SlideShow = () => {
  // const images = [
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2024/02/15/17339046_9fdc8a95_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/10/18/16946850_65be2e6f_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841819_d48e7e9e_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841812_a30567fa_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2024/02/15/17339045_d59e86ac_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},
  //   {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},
  // ]


  return (
    <>
    <div className='SlideShowbody'  style={{ border:'10px solid rgba(255, 240, 0)'}}>

<div className='images'>
  <div className='images-slide'>
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841819_d48e7e9e_720x540.jpg" alt="  locks"  />
        
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg"  alt="  locks2 " />
        
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841812_a30567fa_720x540.jpg"alt="  locks3"  />
        
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2024/02/15/17339046_9fdc8a95_720x540.jpg" alt="  locks4" />
        
  <img src="https://dummyimage.com/16:9x1080" alt="  locks5" />
        
  </div>
  <div className='images-slide'>
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841819_d48e7e9e_720x540.jpg" alt="  locks6"  />
        
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg" alt="  locks7" />
        
  <img src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841812_a30567fa_720x540.jpg" alt="  locks8" />
        
  <img src="https://dummyimage.com/16:9x1080" alt="  locks9" />
        
  <img src="https://dummyimage.com/16:9x1080"  alt="  locks10"/>
        
  </div>

</div>

    </div>
    </>
  )
}

export default SlideShow
