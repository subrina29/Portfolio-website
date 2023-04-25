import { Row, Col } from "antd";
import "./Experience.css";
export const Experience = () => {
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
          <h2>
            Software Support Engineer at OzDocs International Pty, Sydney from
            July2022 to Present)
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
            Conduct testing and diagnosing functionality errors and faults in
            the Oil Commander system which is built on ASP.NET. Troubleshooting,
            testing, diagnosing, and resolving any system issues or problems to
            ensure the smooth operation of the business. Updating and
            maintaining source code in C#, ASP.NET and procedures in the
            existing database. Performing quality assurance inspections,
            evaluating the Oil Commander system, and assigning tasks
            accordingly. Collaborating with developers to connect and educate
            customers and create solutions that improve productivity. Analyzing
            and evaluating technical problems and issues, including
            installation, implementation, upgrade, and configuration, as well as
            troubleshooting of software and databases. Managing JIRA by updating
            and maintaining tickets.
          </p>
        </Col>
      </Row>
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
          <h2>
            Web Developer Intern at RSL, Tasmania from September2020 to December
            2020)
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
            My responsibiltiy was maintained the current website and added more
            appealing feature and redesigned sections of the website to ensure a
            more attractive and user-friendly experience. I had ceated custom
            HTML emails for clients/in-house newsletters and invitations for
            distribution to our databases. Also enable security measures in the
            current website. Moreover, I made Plan and make progress in order to
            make the current website into an appealing one.
          </p>
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
        ></Col>
      </Row>
    </div>
  );
};
