import Carousel from "react-bootstrap/Carousel";
import OurProducts from "./OurProducts";
import RecentStories from "./RecentStories";
import RogInAction from "./RogInAction";
import JoinRepublic from "./JoinRepublic";

function UncontrolledExample() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="/images/fwebp.webp"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 650 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/fwebp1.webp"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 650 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/fwebp2.webp"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 650 }}
          />
        </Carousel.Item>
      </Carousel>
      <div style={{ marginBottom: "100px", marginTop: "100px" }}>
        <OurProducts />
      </div>
      <div style={{ marginBottom: "50px", marginTop: "100px" }}>
        <RecentStories />
      </div>
      <div style={{ marginBottom: "50px"}}>
        <RogInAction />
      </div>
      <div>
        <JoinRepublic />
      </div>
    </>
  );
}

export default UncontrolledExample;
