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
