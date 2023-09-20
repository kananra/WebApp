
import Carousel from 'react-bootstrap/Carousel';
import OurProducts from './OurProducts';


function UncontrolledExample() {
  return (
    <>
      <Carousel fade>
      <Carousel.Item>
      <img src="/images/fwebp.webp" alt="hero" style={{display:'block',width:'100%',maxHeight:650}} />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/fwebp1.webp" alt="hero" style={{display:'block',width:'100%',maxHeight:650}} />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="/images/fwebp2.webp" alt="hero" style={{display:'block',width:'100%',maxHeight:650}} />
       
      </Carousel.Item>
    </Carousel>

    <OurProducts/>
    </>
  
  );
}

export default UncontrolledExample;