import React from "react";
import Layout from "../../Layout";
import { SmoothScrollHero } from "../../components/HeroSection";
import { List } from "../../components/List";
import SkillsSection from "../../components/SkillsSection";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Footer from "../../components/Footer";

import hero from "../../assets/images/hero.png";
import code1 from "../../assets/images/code1.jpg";
import code2 from "../../assets/images/code2.jpg";
import code3 from "../../assets/images/code3.jpg";
import code4 from "../../assets/images/code4.jpg";

const Main = () => {
  return (
    <React.Fragment>
      <Layout>
        <SmoothScrollHero
          pictures={[code1, code2, code3, code4]}
          mainPicture={hero}
        />
        <SkillsSection />
        <List
          id="experience"
          listTitle="Experience"
          items={[
            {
              title: "Gigalabs",
              subTitle: "Software Engineer (JS)",
              date: "09/2021 - Present",
              moreInfo: "Lahore",
              workDone: [
                "Responsible for full stack website development using diﬀerent JavaScript frameworks.",
                "Worked mainly on a large scale project called flavorwiki, housing 12+ repos and operating with 40+ multi national clients like Kellogs, Pepsico etc. The project is a survey platform that offers rewards for users that answer the surveys, and provides statistical analysis for the clients using AI",
                "Worked on over 12+ repos with technologies like React, Next, Sails, Express, Nest, GraphQL, MongoDB, MySQL, PostgreSQL, Docker, AWS EC2 and S3, Azure (SSO), D3JS and more.",
                'Built the user side app for the client "BUNGE" , with a focus on shared states using redux, where state is maintained in diﬀerent pages for use in contextual evaluations of a users answers. Also worked on the underlying algorithm for a question (conjoint) using principle of Inclusion and Exclusion.',
                "Worked on various bug fixes, features, and improvements, one of which is the improvement in survey answering times by about 34%.",
              ],
            },
            {
              title: "Saldiri",
              subTitle: "Backend Software Engineer (Python - Django)",
              date: "06/2021 - 09/2021",
              moreInfo: "Lahore",
              workDone: [
                "Created REST API backend connections using Django, while configuring the backend services and functionality. Also managed the database using Django's built-in SQLite configuration",
                "Worked with HTML, CSS, Vanilla JavaScript and React to create a basic webpage and learned how to integrate JavaScript browser APIs to use things like the webcam etc",
                "Used knowledge of JavaScript to integrate an API of 'Jitsi Meet', get the video of the user and display it in the browser to create a type of online meeting platform. Integrated a 'Siamese' AI model to recognize faces in the meeting for security purposes, as to not let in unauthorized personnel, using Tensor flow",
              ],
            },
            {
              title: "SquareNex",
              subTitle: "Software Engineer (Flutter) - Part-Time",
              date: "03/2020 - 06/2021",
              moreInfo: "Lahore",
              workDone: [
                "Worked on application design UI/UX using Adobe XD to make visually appealing and functional designs for mobile applications.",
                "Made applications using flutter, firebase and NoSQL local databases (hive) to make visually appealing and responsive applications.",
                "Made an application from scratch geared towards teaching children the alphabet, basic math etc. that had a reward based learning model.",
              ],
            },
          ]}
        />
        <Projects />
        <ContactMe />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default Main;
