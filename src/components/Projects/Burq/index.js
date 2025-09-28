import React from "react";
import burqSvg from "../../../assets/images/burq-svg.svg";
import burqDriver from "../../../assets/images/burq-driver.png";
import burqWorkflows from "../../../assets/images/burq-workflows.png";
import burqAnalytics from "../../../assets/images/burq-analytics.png";
import burqOrders from "../../../assets/images/burq-orders.png";

const Burq = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Introduction and technologies used.
          </span>{" "}
          A last mile delivery service that aggregates multiple DSPS to offer a
          seamless delivery experience to customers. The application offers
          multiple delivery DSPs libe uber, doordash, etc. to merchants. The
          application also offers a dashboard for the merchants to track
          delivery stats like delivery time etc. Alonside that order tracking,
          delivery incidents, refunds etc. are also managed inside the app.
          <br /> <br />
          The project uses React and Next.js for the frontend, while the backend
          is built with Koa.js. It integrates multiple databases, including
          PostgreSQL, and Snowflake for analytics charts for faster queries.
        </p>
        <img
          src={burqSvg}
          alt="Burq Introduction"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Driver Management.
          </span>{" "}
          A dedicated driver management module offers the ability to deploy
          drivers in different vehicles using multiple DSPs. The driver routes
          can be managed and with multi-stop deliveries coming in 2026,
          merchants can assign multiple stops to a driver, saving both money and
          time for orders.
        </p>
        <img
          src={burqDriver}
          alt="Burq driver management"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Order workflows.
          </span>{" "}
          The order workflow module is used to automate driver assignements
          using certain conditions. An exmaple of one automated delivery would
          be if order value is greater than $500 then the driver issued must
          have a car. This allows merchants to automate certain common scenarios
          they encounter frequently.
        </p>
        <img
          src={burqWorkflows}
          alt="Burq order workflows"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Analytics and reporting.
          </span>{" "}
          The analytics and reporting module is the main dashboard for
          merchants, the first thing a user sees when they log in. It provides a
          range of metrics and insights to help merchants understand their
          business performance and make data-driven decisions.
        </p>
        <img
          src={burqAnalytics}
          alt="Burq analytics"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Burq Orders
          </span>{" "}
          The Burq orders module is used to manage orders and track their
          status. It provides a range of customer to help merchants assign
          drivers to orders based on their location and other conditions (like
          order value, order type, vehicles, etc.).
        </p>
        <img
          src={burqOrders}
          alt="Burq orders"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-2xl"
        />
      </div>
    </>
  );
};

export default Burq;
