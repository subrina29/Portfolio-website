import { Row, Col } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramOutlined,
  MailFilled,
} from "@ant-design/icons";
import Typed from "react-typed";
import "./Contact.css";
import "react-typed/dist/animatedCursor.css";
export const Contact = () => {
  return (
    <div id="contact">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={12}
          xl={12}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1 className="contact-header">
            <Typed
              style={{
                hyphens: "auto",
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
              strings={[
                "Let's know each other",
              ]}
              typeSpeed={40}
            />
          </h1>
        </Col>
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xxl={6} xl={6} lg={3} xs={1} md={3} sm={3} />
        <Col xxl={12} xl={12} lg={18} xs={22} md={18} sm={18}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "100px",
            }}
            className="links-wrapper"
          >
            <div
              data-aos="fade"
              data-aos-delay="250"
              data-aos-once
              className="contact-container linkedin-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/subrina-islam/"
              >
                <LinkedinFilled
                  className="linkedin-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="750"
              data-aos-once
              className="contact-container gmail-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto: subrinaislam29@gmail.com"
              >
                <MailFilled
                  className="gmail-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="500"
              data-aos-once
              className="contact-container github-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/subrina29"
              >
                <GithubFilled
                  className="github-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-once
              className="contact-container instagram-wrapper"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/subrina_29/"
              >
                <InstagramOutlined
                  className="instagram-image"
                  style={{ color: "white" }}
                />
              </a>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={3} xs={1} md={3} sm={2} />
      </Row>
    </div>
  );
};
