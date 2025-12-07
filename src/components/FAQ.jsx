import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is the Host Community Development Trust (I-HCDT)?",
      content: `I-HCDT is a platform designed to improve transparency, accountability, and community participation in the Host Community Development Trust process. It allows community members to track project progress, report conflicts, and provide feedback on the implementation of development projects in their area.`,
    },
    {
      title: "Who can use the I-HCDT platform?",
      content: `The platform is available to all host communities, government regulators, oil companies, local government authorities, and other stakeholders interested in monitoring the implementation progress of the Host Community Development Trusts.`,
    },
    {
      title: "Do I need to create an account to use I-HCDT?",
      content: `You do not need to create an account to use the I-HCDT. You can browse projects and reports without registering. However, having an account allows you to comment, submit reports, and receive updates on project activities.`,
    },
    {
      title: "How frequently is project information updated?",
      content: `Project information is updated regularly based on reports submitted by project managers, community members, and monitoring teams. This process ensures that all relevant stakeholders have access to the most accurate and up-to-date data, enhancing transparency and supporting effective decision-making.`,
    },
    {
      title: "How do I track a project in my community?",
      content: `To track a project in your community, visit the "Projects" page and utilise the search or filter functions to locate projects in your area. Each project includes a progress bar, status updates, and detailed reports.`,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#0F172A",
  rowTitleColor: "#0F172A",
  rowContentPaddingTop: "10px",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  //arrowIcon: "V",
  //   openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const FAQSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="font-bold text-xl lg:text-6xl text-center mb-20">
        Frequently asked questions
      </h2>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQSection;
