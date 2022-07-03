import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import React, { useEffect, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const homeRef = useRef(null);
  const techRef = useRef(null);
  const expRef = useRef(null);
  const proRef = useRef(null);
  const conRef = useRef(null);
  const resRef = useRef(null);
  useEffect(() => {
    homeRef.current.props.style["borderBottom"] = "none";
    techRef.current.props.style["borderBottom"] = "none";
    expRef.current.props.style["borderBottom"] = "none";
    proRef.current.props.style["borderBottom"] = "none";
    conRef.current.props.style["borderBottom"] = "none";
    resRef.current.props.style["borderBottom"] = "none";
  }, []);
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "white";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <Layout>
      <Header>
        <Row style={{ height: "100%", marginTop: "1%" }}>
          <Col xxl={2} xl={2} lg={2} xs={1} md={2} sm={1} />
          <Col xxl={18} xl={18} lg={18} xs={22} md={20} sm={22}>
            <a href="/">
             {/*  <svg
                id="logo"
                width="40%"
                height="70"
                viewBox="0 0 355 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ float: "left", marginTop: "0.5%" }}
              >
                <path
                  d="M52.936 110L29.032 68.96H13.192V110H0.0880127V9.63199H32.488C40.072 9.63199 46.456 10.928 51.64 13.52C56.92 16.112 60.856 19.616 63.448 24.032C66.04 28.448 67.336 33.488 67.336 39.152C67.336 46.064 65.32 52.16 61.288 57.44C57.352 62.72 51.4 66.224 43.432 67.952L68.632 110H52.936ZM13.192 58.448H32.488C39.592 58.448 44.92 56.72 48.472 53.264C52.024 49.712 53.8 45.008 53.8 39.152C53.8 33.2 52.024 28.592 48.472 25.328C45.016 22.064 39.688 20.432 32.488 20.432H13.192V58.448Z"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg> */}
            </a>
            <Menu
              mode="horizontal"
              theme="light"
              style={{
                float: "right",
                width: "60%",
                textAlign: "right",
                backgroundColor: "#1f1f1f",
                border: "none",
              }}
              className="nav"
            >
              <Menu.Item ref={homeRef} className="link" key="home" style={{}}>
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  href="#aboutme"
                >
                  About
                </a>
              </Menu.Item>
              <Menu.Item
                ref={techRef}
                className="link"
                key="techiknow"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  href="#techiknow"
                >
                  Tech
                </a>
              </Menu.Item>
              <Menu.Item
                ref={expRef}
                className="link"
                key="experience"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  href="#experience"
                >
                  Experience
                </a>
              </Menu.Item>
              <Menu.Item
                ref={proRef}
                className="link"
                key="projects"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  href="#projects"
                >
                  Projects
                </a>
              </Menu.Item>
              <Menu.Item ref={conRef} className="link" key="contact" style={{}}>
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  href="#contact"
                >
                  Contact Me
                </a>
              </Menu.Item>
              <Menu.Item ref={resRef} className="link" key="resume" style={{}}>
                <a
                  style={{ color: "white" }}
                  onMouseOver={handleHover}
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/17XaOkvjpSfJWZjkrYKNmJdS0fGUIUKp1/view?usp=sharing"
                >
                  Resume
                </a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xxl={4} xl={4} lg={4} xs={1} md={2} sm={1} />
        </Row>
      </Header>
    </Layout>
  );
};
