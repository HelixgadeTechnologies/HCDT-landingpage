import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-inter",
  });

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>HCDT - Disclaimer</title>
        <meta
          name="description"
          content="Important information to know about the organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={` ${inter.className}`}>
        <Header/>
        <section className=" bg-disclaimer-bg  bg-center  bg-no-repeat py-40 h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center mt-14">
                <h1 className="font-extrabold text-5xl text-white">Disclaimer</h1>
            </div>
        </section>

        <section className="space-y-8 md:space-y-12 lg:space-y-16 p-8 md:p-16 lg:p-20">
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-[#0F172A] font-extrabold text-center">Disclaimer</h2>

            <p className="border-t py-6 md:py-8 lg:py-10 font-normal text-[#0F172A] text-base lg:text-lg">The information displayed on this website is derived from primary and secondary sources, including community-based reporters and official government data. This platform functions as an independent tool for tracking the implementation status of the Host Community Development Trusts (HCDT). It also monitors and evaluates projects and initiatives undertaken by these Trusts. The information provided aims to promote transparency, accountability, and stakeholder engagement. However, the platform does not guarantee the completeness or reliability of the information presented. No party associated with the data available on this website assumes responsibility for the accuracy of the information provided or its use by third parties. Stakeholder Democracy Network (SDN), its affiliates, and the platform administrators shall not be liable for any direct, indirect, or consequential damages arising from the use of this platform, including but not limited to errors, omissions, or misinterpretations of data. SDN reserves the right to modify, update, or remove content without prior notice. Continued use of the platform constitutes acceptance of any revised terms. Parties wishing to contest or dispute the information displayed are encouraged to submit their evidence to SDN. By accessing this platform, users acknowledge and agree to the terms outlined in this disclaimer.</p>
        </section>

        {/* Join the HCDT community */}
      <section className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-0 bg-community-linear text-white lg:rounded-3xl py-20">
        <h2 className="font-bold text-3xl lg:text-5xl ">
          Join the HCDT community today{" "}
        </h2>

        <p className="mt-6 mb-9 text-base lg:text-lg lg:w-2/3 lg:mx-auto">
          Be part of a network dedicated to transparency and development. By
          joining the HCDT reporting community, you can track projects, share
          insights, report issues, and collaborate with stakeholders to drive
          positive change in your community. Your voice matters—get involved
          today!
        </p>

        <button className="px-4 lg:px-6 py-4 text-lg lg:text-2xl font-bold text-white bg-blue-1 shadow-lg mx-auto flex items-center gap-x-4">
          Sign Up Free
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.586 10.6564L11.636 6.70643C11.4538 6.51783 11.353 6.26523 11.3553 6.00303C11.3576 5.74083 11.4628 5.49002 11.6482 5.30461C11.8336 5.1192 12.0844 5.01403 12.3466 5.01176C12.6088 5.00948 12.8614 5.11027 13.05 5.29243L18.707 10.9494C18.8002 11.0421 18.8741 11.1522 18.9246 11.2736C18.9751 11.3949 19.001 11.525 19.001 11.6564C19.001 11.7878 18.9751 11.918 18.9246 12.0393C18.8741 12.1606 18.8002 12.2708 18.707 12.3634L13.05 18.0204C12.9578 18.1159 12.8474 18.1921 12.7254 18.2445C12.6034 18.2969 12.4722 18.3245 12.3394 18.3257C12.2066 18.3268 12.0749 18.3015 11.952 18.2513C11.8291 18.201 11.7175 18.1267 11.6236 18.0328C11.5297 17.9389 11.4555 17.8273 11.4052 17.7044C11.3549 17.5815 11.3296 17.4498 11.3307 17.317C11.3319 17.1842 11.3595 17.053 11.4119 16.931C11.4643 16.809 11.5405 16.6987 11.636 16.6064L15.586 12.6564H6C5.73478 12.6564 5.48043 12.5511 5.29289 12.3635C5.10536 12.176 5 11.9216 5 11.6564C5 11.3912 5.10536 11.1369 5.29289 10.9493C5.48043 10.7618 5.73478 10.6564 6 10.6564H15.586Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
        <Footer/>
      </div>
    </>
  );
};

export default Disclaimer;
