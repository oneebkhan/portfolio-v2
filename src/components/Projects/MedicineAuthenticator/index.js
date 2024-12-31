import React from "react";
import fyp from '../../../assets/images/fyp.png'
import fyp1 from '../../../assets/images/fyp1.png'
import fyp2 from '../../../assets/images/fyp2.png'
import fypAdmin from '../../../assets/images/fypAdmin.png'
import fypDistributor from '../../../assets/images/fypDistributor.png'

const MedicineAuthenticator = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Introduction and technologies used.
          </span>{" "}
          This application is designed to make finding authentic 
          medicine effortless. Featuring a sleek, modern interface with 
          smooth 144Hz animations, it offers a user-friendly experience. 
          Built with Flutter, the app utilizes Firebase for backend 
          functionalities, such as authentication and database queries. 
          As a final year project, the app currently does not include a 
          full catalog of medicine products, but future updates will 
          introduce additional modules and features, such as a chatbot 
          symptom checker. Screenshots and a presentation will be 
          provided below. The app uses Lottie for animations and 
          Flaticon for images and icons, with other assets being 
          either custom-made or default icons.
        </p>
        <img
          src={fyp1}
          alt="FYP main intro"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            User/Customer Side.
          </span>{" "}
          As a customer, the Medicine Authenticator app simplifies the 
          process of finding and verifying authentic medicines. The 
          app allows you to search for medicine products and view 
          detailed information such as side effects and expiration 
          dates. Using the barcode scanning feature, you can confirm 
          whether a medicine is genuine. Additionally, the app helps 
          you locate pharmacies and clinics within a 10-kilometer radius. 
          You can access their contact information, check available 
          medicines, and get directions to their locations. To keep users 
          informed, the app includes an alert section with updates on 
          COVID-19 cases in Pakistan, precautionary tips, vaccine 
          information, and directions to vaccination centers. Users 
          can also send an SMS to 1166 directly from the app to obtain 
          a vaccination code. Furthermore, the app provides a feedback 
          channel for submitting feature requests or suggesting new 
          medicines for inclusion in future updates.
        </p>
        <img
          src={fyp2}
          alt="FYP user side"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Admin.
          </span>{" "}
          Admins oversee the entire system through the Tracker_Admin application, 
          which serves as a centralized control panel. Admins can create and 
          update medicine models and manage distributor accounts, including 
          adding, editing, or removing distributors as needed. They also have 
          access to developer requests, allowing them to review and delete 
          submissions from users. The admin dashboard includes a statistics and 
          history section, offering insights into application usage and system 
          performance. By managing these critical components, admins ensure the 
          platform remains functional, accurate, and up-to-date.
        </p>
        <img
          src={fypAdmin}
          alt="FYP admin side"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Pharmacist.
          </span>{" "}
          Pharmacists interact with the system by ensuring that medicines 
          available in pharmacies are properly authenticated. Through the 
          Tracker_Admin panel, pharmacists can validate medicines and confirm 
          their authenticity. They can also add or remove medicines from the 
          pharmacy’s inventory, ensuring the information displayed to customers 
          is accurate and up-to-date. A history section is available to 
          pharmacists, allowing them to track their actions and maintain 
          a record of inventory changes.
        </p>
        <img
          src={fyp}
          alt="FYP pharmacist"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>

      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-normal text-neutral-700 dark:text-neutral-200">
            Distributor.
          </span>{" "}
          Distributors play a crucial role in maintaining the accuracy and 
          availability of information within the system. Through the 
          Tracker_Admin panel, distributors can add new medicine products, 
          update their details, or remove outdated entries. They are also 
          responsible for managing pharmacy and clinic information, which 
          includes adding new establishments, editing existing data, or 
          removing entries no longer in use. Additionally, distributors 
          have the capability to add pharmacists to the system, ensuring 
          seamless coordination between pharmacies and the app. The platform 
          also includes a statistics and history section, enabling distributors 
          to analyze usage data and track changes over time.
        </p>
        <img
          src={fypDistributor}
          alt="FYP distributor side"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    </>
  );
};

export default MedicineAuthenticator;