import React from "react";
import flavorwikiTasterDashboard from "../../../assets/images/flavorwikiTesterDashboard.png";
import flavorwikiBusiness from "../../../assets/images/flavorwikiBussiness.png";
import flavorwikiOperator from "../../../assets/images/flavorwikiOperator.png";
import flavorwikiStats from "../../../assets/images/flavorwikiStats.png";
import flavorwikiIntro from "../../../assets/images/flavorwikiIntro.png";

const Flavorwiki = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Introduction and technologies used.
          </span>{" "}
          A large application housing 12+ repositories. The application is a
          survey-based platform that collects data and uses statistical analysis
          to derive useful insights. It supports multiple roles, including
          building and deploying surveys, answering surveys (end user),
          validating responses, payment verification, processing payments, and
          customer support.
          <br /> <br />
          The project uses React and Next.js for the frontend, while the backend
          is built with NestJS, ExpressJS, SailsJS, and GraphQL. It integrates
          multiple databases, including MariaDB (SQL), PostgreSQL, and MongoDB.
          The statistical analysis is powered by Python scripts utilizing
          scikit-learn and NumPy, transforming the data into meaningful
          insights.
        </p>
        <img
          src={flavorwikiIntro}
          alt="Flavorwiki Introduction"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Survey rewards for users.
          </span>{" "}
          The taster side allows users to take surveys and answer questions
          related to pre-selected products. Users are offered rewards based on
          the product amount set. The surveys may also include screening
          questions to target specific demographics, such as African American,
          male, or individuals without children.
        </p>
        <img
          src={flavorwikiTasterDashboard}
          alt="Flavorwiki dashboard"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Survey builder and operator side.
          </span>{" "}
          The operator side enables tasks such as building and deploying
          surveys, validating responses, verifying and processing payments,
          creating and managing users, organizations, projects, and campaigns,
          as well as handling customer support.
        </p>
        <img
          src={flavorwikiOperator}
          alt="Flavorwiki operator side"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Statistical insights with filters and exports.
          </span>{" "}
          The operator side also provides statistical insights derived from user
          responses and the question types selected in surveys. Additionally,
          the application offers various statistical analyses and supports
          exporting data in Excel format.
        </p>
        <img
          src={flavorwikiStats}
          alt="Flavorwiki stats"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Business site for clients looking to use flavorwiki for data
            collection.
          </span>{" "}
          The business site provides a platform to connect with a Flavorwiki
          representative and sign a contract to access Flavorwiki's data
          collection services. It also serves as a hub for staying updated on
          events that Flavorwiki attends or hosts.
        </p>
        <img
          src={flavorwikiBusiness}
          alt="Flavorwiki bussiness site"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>
    </>
  );
};

export default Flavorwiki;
