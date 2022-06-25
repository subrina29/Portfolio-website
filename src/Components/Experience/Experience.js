import { Row, Col } from "antd";
import "./Experience.css";
export const Experience = () => {
  // const handleHover = (e) => {
  //   e.target.style.cursor = "none";
  //   e.target.style.color = "rgba(255, 255, 255, 0.85)";
  //   e.target.style["border-bottom"] = "none";
  // };
  return (
    <div id="experience">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="experience-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ borderBottom: "2px solid rgb(168, 164, 164)" }}
          >
            <b>Experience</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={5}
          xl={5}
          lg={18}
          xs={10}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          </Col>
          </Row>
          
    
        
    </div>
  );
};
