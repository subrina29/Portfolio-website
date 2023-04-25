import { Row, Col } from "antd";
import "./TechIKnow.css";
export const TechIKnow = () => {
  return (
    <div id="techiknow">
      <Row style={{ marginTop: "35vh" }}>
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
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="techiknow-heading"
          >
            <b>Tech I Know</b>
          </h1>
          <br />
          <div data-aos="fade-up" data-aos-delay="100" data-aos-once>
            <p className="techiknow-first">
              I love learning new things, the world of Web Development is
              constantly changing and I'm here for every bit of that journey.
              Applying new concepts and seeing them come to life is immensely
              satisfying and gives me a sense of massive pride.
            </p>
            <p className="techiknow-second">
              In the process of learning new things, I have picked up quite a
              wide variety of skills.
            </p>
            <p className="techiknow-third">
              My best skills include: JAVA(J2SE), PHP, HTML5, Javascript,
              CSS3,XML, C#, ReactJS, ASP.NET.
            </p>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={9}
          xl={9}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left", marginTop: "1%" }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="frameworks-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="frameworks-heading"
            >
              <b>Frameworks/Libraries</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="frameworks">
              ReactJS NodeJS Bootstrap Ant Design ASP.NET
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="devops-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="devops-heading"
            >
              <b>DevOps</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="devops">
              Git Netlify
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="database-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="database-heading"
            >
              <b>Tools</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="database">
              Microsoft Office 360, Docker, Fiddler,Postman,Adobe Illustrator,
              Adobe Photoshop, Video Editor.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Databases</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              SQL Server Management Studio, IIS.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Version Control</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              Git,BitBucket,Github.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Languages</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              JAVA(J2SE), PHP, HTML5, Javascript, CSS3,XML, C#, ReactJS
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Others</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              SAP, JIRA, Event viewers, Docker, Third party Integration, Cloud
            </p>
          </div>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};
