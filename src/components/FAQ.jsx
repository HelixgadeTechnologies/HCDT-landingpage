import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is the Host Community Development Trust (HCDT)?,",
      content: `HCDT is a platform designed to improve transparency, accountability, and community participation in development projects. It allows community members to track project progress, report conflicts, and provide feedback on initiatives in their area.`,
    },
    {
      title: "Who can use the HCDT platform?",
      content: `The platform is open to all community members, project stakeholders, local government authorities, and corporate partners who want to monitor and engage with development projects.`,
    },
    {
      title: "Do I need to create an account to use HCDT?",
      content: `No, you can browse projects and reports without an account. However, creating an account allows you to comment, submit reports, and receive updates on project activities.`,
    },
    {
      title: "How frequently is project information updated?",
      content: `Project information is updated in real time as reports are submitted by project managers, community members, and monitoring teams.`,
    },
    {
      title: "How do I track a project in my community?",
      content: `Project information is updated in real time as reports are submitted by project managers, community members, and monitoring teams.`,
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
