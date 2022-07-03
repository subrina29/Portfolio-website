import { Row, Col, Card } from "antd";
import "./Projects.css";
export const Projects = () => {
  const handleHover = (e) => {
    e.target.style.cursor = "none";
    e.target.style.color = "rgba(255, 255, 255, 0.85)";
    e.target.style["border-bottom"] = "none";
  };
  return (
    <div id="projects">
      <Row style={{ marginTop: "37vh" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
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
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: "2px solid rgb(168, 164, 164)",
              margin: "5%",
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="remote-code-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Remote Code Executor"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://github.com/rajatmaheshwari2512/remote-code-exec/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              A Remote Code Executor powered by NodeJS and Docker, a new
              container is built for every new code submitted on the server,
              SocketIO is also integrated in this project for a real-time
              collaborative coding session. Appropriate Toast Notifications are
              also shown for every user joining and leaving the room
            </p>
            <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Deployed on AWS on an EC2 instance, used Cloudflare as a DNS
              provider for HTTPS support, implemented SwaggerUI for API
              exploration
            </p>
            <p
              className="rce-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              ReactJS NodeJS ExpressJS Docker
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-codebot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Discord CodeBot"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://www.github.com/rajatmaheshwari2512/Code-Executor-Discord"
              >
                GitHub
              </a>
            }
          >
            <p
              className="codebot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              As proof of concept of extending the existing functionality of the
              Remote Code Executor, I decided to make a Discord bot powered by
              DiscordJS and NodeJS. This bot reads messages sent by the user and
              on encountering a message starting with !code it reads the rest of
              the message as commands, by splitting the message, I extract the
              code, and the language of execution and I send it to the main
              server which returns the output. The bot then tags the user who
              requested the output and prints the output/error
            </p>
            <p
              className="codebot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
              DiscordJS NodeJS
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="portfolio-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Portfolio"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://github.com/rajatmaheshwari2512/Portfolio/"
              >
                GitHub
              </a>
            }
          >
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              This very portfolio website! You're here right now.
              Portfolioception! Built in under a week as a self learning project
              to learn more about Ant Design and React Hooks. Implemented this
              project with ReactJS and AntD and deployed it on Netlify.
            </p>
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Broke Up code in multiple components in the "true" React way so
              that individual aspects of the site don't affect the others. Wrote
              media queries to make sure the site looks good in all devices
            </p>
            <br />
            <br />
            <p
              className="portfolio-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              ReactJS Ant Design
            </p>
          </Card>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={6} xl={6} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="chatting-app-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Real Time Chatting App"
            extra={
              <a
                onMouseOver={handleHover}
                style={{ color: "white" }}
                href="https://github.com/rajatmaheshwari2512/chatting-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              A real-time chatting application built in the MERN Stack along
              with SocketIO for real-time functionality. Similar to WhatsApp,
              the app allows users to send messages to each other and also
              create rooms, and add other users to the room. Users being added
              to the room have their group list updated in real-time using the
              same socket events. New messages in a group causes the group color
              to be updated to green for users not in it currently.
            </p>
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              Deployed on Netlify, Heroku using Mongo Atlas as a Database
            </p>
            <p
              className="chatting-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "27px",
              }}
            >
              ReactJS NodeJS ExpressJS MongoDB SocketIO
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <Card
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="discord-musicbot-card"
            style={{ margin: "3%", height: "95%" }}
            bodyStyle={{ backgroundColor: "#141414" }}
            bordered={false}
            hoverable={true}
            title="Discord MusicBot"
            extra={
              <a
                onMouseOver={handleHover}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
                href="https://discord.com/api/oauth2/authorize?client_id=889036478972321874&permissions=8&scope=bot"
              >
                Add Me!
              </a>
            }
          >
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              After the shutdown of major music player bots like Groovy on
              Discord, I created this Discord bot as a replacement to other
              popular bots. You can request a song play using the !play command,
              and you can also request lyrics of the current playing song. I
              have used Cheerio as a web scraper to fetch lyrics from the first
              match on a Google search.
            </p>
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
              }}
            >
              As an added easter egg, private messaging the bot causes it to act
              like a chat bot, have fun asking the bot questions and receiving
              weirdly diplomatic answers!
            </p>
            <p
              className="musicbot-description"
              style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",
                backgroundColor: "#141414",
                marginTop: "20px",
              }}
            >
              DiscordJS NodeJS Cheerio
            </p>
          </Card>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        {/* <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} /> */}
        <Col xxl={6} xl={6} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
