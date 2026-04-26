import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

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

import Header from "@/components/Header";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";

import {
  contributionImg,
  FeaturedImg,
  IndependentImg,
  radarImg,
} from "../../public/images";

import { hcdtWorks, categories, heroCategories, landingStats } from "@/utils/data";

const Home = () => {
  return (
    <div
      className={`${roboto.className}  font-[family-name:var(--font-roboto)]`}
    >
      <Head>
        <title>I-HCDT - Home</title>
        <meta
          name="description"
          content="I-HCDT - Empowering Communities Through Transparency & Engagement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="bg-blue-1 py-4 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side: Shrunken Image box */}
            <div className="w-full lg:w-[35%] relative rounded-lg overflow-hidden shadow-xl border border-white/10">
              <div className="relative h-[120px] lg:h-[160px]">
                <Image
                  src="/images/heroimage.png"
                  alt="Empowering Communities"
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <h1 className={`${inter.variable} text-sm lg:text-base text-white font-black leading-tight max-w-[200px]`}>
                    Empowering Communities Through Transparency & Engagement
                  </h1>
                  <p className="text-white/60 text-[8px] lg:text-[10px] mt-1 italic">
                    View, comment, and track projects happening in your area
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Compact Icon Grid/Row */}
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-end overflow-x-auto pb-2 lg:pb-0">
              <div className="flex items-start gap-2 lg:gap-3 min-w-max">
                {heroCategories.map((cat) => (
                  <div key={cat.id} className="flex flex-col items-center group w-24 lg:w-28">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-md flex items-center justify-center mb-2 shadow-sm group-hover:bg-blue-50 transition-colors">
                      <Image src={cat.icon} alt={cat.title} width={32} height={32} className="lg:w-10 lg:h-10" />
                    </div>
                    <span className="text-[9px] lg:text-[10px] font-bold text-white text-center leading-tight h-8 flex items-center justify-center px-1">
                      {cat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {landingStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center">
                <span className="text-gray-900 font-black text-sm lg:text-base leading-tight h-10 flex items-center justify-center mb-2">
                  {stat.label}
                </span>
                <span className="text-3xl lg:text-5xl font-black text-black">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Visualization and How it Works */}
      <section className="bg-white py-12 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Real time data visualization */}
            <div className="flex flex-col">
              <h2 className="font-bold text-xl lg:text-3xl mb-6">
                Real time data visualization
              </h2>
              <div className="flex flex-col xl:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-sm lg:text-base text-gray-1 leading-relaxed">
                    Data visualisation is essential for turning complex project information into clear, interactive charts and graphs. This process facilitates tracking progress, identifying challenges, and enabling informed decision-making. This platform uses intuitive, user-friendly dashboards, progress bars, and visual reports to communicate the status of HCDTs' key components effectively.
                  </p>
                  {/* <button className="mt-6 flex gap-x-2 text-sm font-medium text-blue-2 group">
                    Check the tools
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M15.586 10.6574L11.636 6.70741C11.4538 6.5188 11.353 6.2662 11.3553 6.00401C11.3576 5.74181 11.4628 5.491 11.6482 5.30559C11.8336 5.12018 12.0844 5.01501 12.3466 5.01273C12.6088 5.01045 12.8614 5.11125 13.05 5.29341L18.707 10.9504C18.8002 11.0431 18.8741 11.1532 18.9246 11.2746C18.9751 11.3959 19.001 11.526 19.001 11.6574C19.001 11.7888 18.9751 11.9189 18.9246 12.0403C18.8741 12.1616 18.8002 12.2718 18.707 12.3644L13.05 18.0214C12.9578 18.1169 12.8474 18.1931 12.7254 18.2455C12.6034 18.2979 12.4722 18.3255 12.3394 18.3267C12.2066 18.3278 12.0749 18.3025 11.952 18.2522C11.8291 18.2019 11.7175 18.1277 11.6236 18.0338C11.5297 17.9399 11.4555 17.8283 11.4052 17.7054C11.3549 17.5825 11.3296 17.4498 11.3307 17.318C11.3319 17.1852 11.3595 17.054 11.4119 16.932C11.4643 16.81 11.5405 16.6997 11.636 16.6074L15.586 12.6574H6C5.73478 12.6574 5.48043 12.5521 5.29289 12.3645C5.10536 12.177 5 11.9226 5 11.6574C5 11.3922 5.10536 11.1378 5.29289 10.9503C5.48043 10.7628 5.73478 10.6574 6 10.6574H15.586Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </button> */}
                </div>
                <div className="flex-1 flex justify-center">
                  <Image
                    src={radarImg}
                    alt="Data visualization"
                    className="w-full max-w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* How I-HCDT Works? */}
            <div className="flex flex-col">
              <h2 className="font-bold text-xl lg:text-3xl mb-12 lg:mb-16">
                How I-HCDT Works?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hcdtWorks.map((item) => (
                  <div key={item.id} className="text-center">
                    <div
                      style={{ backgroundColor: `${item.bg}` }}
                      className="mx-auto h-16 w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center mb-4"
                    >
                      <Image src={item.icon} alt={item.title} width={32} height={32} />
                    </div>
                    <h3 className="font-bold text-sm lg:text-base text-dark-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-1 text-[10px] lg:text-[11px] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project categories */}
      {/* <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-xl lg:text-[40px] ">
            Project Categories
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item) => (
              <div className=" " key={item.id}>
                <Image
                  className="w-full rounded-t-lg"
                  src={item.img}
                  alt={item.title}
                />

                <div className=" rounded-b-lg bg-white p-4 flex items-center gap-x-4">
                  <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} />
                  </div>

                  <h3 className="font-medium text-base text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="pt-20 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={IndependentImg}
                alt="The Independent HCDT M&E Platform is designed to enhance community participation in project monitoring, ensuring that development initiatives are executed effectively"
              />
            </div>
            <article className="order-1 lg:order-2">
              <h2 className="font-bold text-xl lg:text-5xl ">
                What is the Independent HCDT Monitoring & Evaluation System?
              </h2>

              <p className="mt-6 mb-9 text-base lg:text-lg text-gray-1">
              The independent Host Community Development Trust (I-HCDT) M&E System is designed to track and provide real-time data on the status and progress of HCDT implementation in the Niger Delta.  It is designed to monitor project delivery, community participation and satisfaction, gender and social inclusion, and the efficiency of the conflict resolution mechanisms in the HCDT process. This Independent HCDT M&E system aims to foster the effective implementation of Host Community Development Trusts by providing insightful, evidence-based data for informed decision-making by HCDTs, communities, the government, and civil society organizations. This platform seeks to strengthen transparency and accountability in the HCDT process and includes features to support this:</p>

              {/* <button className="flex gap-x-2 text-base font-medium text-blue-2">
                See how it helped others
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.586 10.6574L11.636 6.70741C11.4538 6.5188 11.353 6.2662 11.3553 6.00401C11.3576 5.74181 11.4628 5.491 11.6482 5.30559C11.8336 5.12018 12.0844 5.01501 12.3466 5.01273C12.6088 5.01045 12.8614 5.11125 13.05 5.29341L18.707 10.9504C18.8002 11.0431 18.8741 11.1532 18.9246 11.2746C18.9751 11.3959 19.001 11.526 19.001 11.6574C19.001 11.7888 18.9751 11.9189 18.9246 12.0403C18.8741 12.1616 18.8002 12.2718 18.707 12.3644L13.05 18.0214C12.9578 18.1169 12.8474 18.1931 12.7254 18.2455C12.6034 18.2979 12.4722 18.3255 12.3394 18.3267C12.2066 18.3278 12.0749 18.3025 11.952 18.2522C11.8291 18.2019 11.7175 18.1277 11.6236 18.0338C11.5297 17.9399 11.4555 17.8283 11.4052 17.7054C11.3549 17.5825 11.3296 17.4508 11.3307 17.318C11.3319 17.1852 11.3595 17.054 11.4119 16.932C11.4643 16.81 11.5405 16.6997 11.636 16.6074L15.586 12.6574H6C5.73478 12.6574 5.48043 12.5521 5.29289 12.3645C5.10536 12.177 5 11.9226 5 11.6574C5 11.3922 5.10536 11.1378 5.29289 10.9503C5.48043 10.7628 5.73478 10.6574 6 10.6574H15.586Z"
                    fill="#2563EB"
                  />
                </svg>
              </button> */}
            </article>
          </div>
        </div>
      </section>
      {/* featured projects */}
      <section className="pt-20 lg:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <div className="order-2 lg:order-1">
              <Image
                src={FeaturedImg}
                alt="Explore key development projects making a real impact in host communities"
              />
            </div>
            <article className=" order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="font-bold text-xl lg:text-5xl ">
                Featured Projects
              </h2>

              <p className="mt-6 text-base lg:text-lg text-gray-1">
               This platform presents comprehensive information on significant development projects financed by the Host Community Development Trusts in the Niger Delta. The projects highlighted here exemplify initiatives that facilitate progress, enhance livelihoods, and promote sustainable growth. Stakeholders can stay informed about project milestones, monitor advancements through real-time updates, and recognise the contributions of these initiatives to positive societal change. 
              </p>
              <p className="mt-6 text-base lg:text-lg text-gray-1">
                The I-HCDT Monitoring and Evaluation (M&E) system was developed by Stakeholder Democracy Network (SDN), which is officially registered in Nigeria as the Niger Delta Stakeholder Initiative for Community Development and Empowerment (NDSICDE).
              </p>
              {/* <button className="mt-9 flex gap-x-2 text-base font-medium text-blue-2">
                Explore Projects
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.586 10.6574L11.636 6.70741C11.4538 6.5188 11.353 6.2662 11.3553 6.00401C11.3576 5.74181 11.4628 5.491 11.6482 5.30559C11.8336 5.12018 12.0844 5.01501 12.3466 5.01273C12.6088 5.01045 12.8614 5.11125 13.05 5.29341L18.707 10.9504C18.8002 11.0431 18.8741 11.1532 18.9246 11.2746C18.9751 11.3959 19.001 11.526 19.001 11.6574C19.001 11.7888 18.9751 11.9189 18.9246 12.0403C18.8741 12.1616 18.8002 12.2718 18.707 12.3644L13.05 18.0214C12.9578 18.1169 12.8474 18.1931 12.7254 18.2455C12.6034 18.2979 12.4722 18.3255 12.3394 18.3267C12.2066 18.3278 12.0749 18.3025 11.952 18.2522C11.8291 18.2019 11.7175 18.1277 11.6236 18.0338C11.5297 17.9399 11.4555 17.8283 11.4052 17.7054C11.3549 17.5825 11.3296 17.4508 11.3307 17.318C11.3319 17.1852 11.3595 17.054 11.4119 16.932C11.4643 16.81 11.5405 16.6997 11.636 16.6074L15.586 12.6574H6C5.73478 12.6574 5.48043 12.5521 5.29289 12.3645C5.10536 12.177 5 11.9226 5 11.6574C5 11.3922 5.10536 11.1378 5.29289 10.9503C5.48043 10.7628 5.73478 10.6574 6 10.6574H15.586Z"
                    fill="#2563EB"
                  />
                </svg>
              </button> */}
            </article>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className=" my-24">
        {/* <h2 className="font-bold text-xl lg:text-6xl text-center">
          Hear From the Community. <br />
          They love us.
        </h2>

        <p className="mt-6 lg:w-2/3 mx-auto text-base  text-center lg:text-lg text-gray-1">
          At I-HCDT, we prioritize transparency, collaboration, and
          community-driven development. Through our platform, community members,
          stakeholders, and organizations actively contribute to ensuring
          projects are impactful and meet local needs.
        </p>

        <Testimonials /> */}
      </section>
      <FAQSection />
      {/* HOw can i contribute */}
      <section className="bg-howto-bg bg-center bg-cover bg-no-repeat lg:h-[650px] max-w-7xl mx-auto p-10 lg:p-20 mb-20 lg:rounded-3xl">
        <article className="lg:w-1/2 lg:ml-auto">
          <h2 className="font-bold text-xl lg:text-6xl text-white">
            How Can You Contribute?
          </h2>

          <p className="text-base lg:text-lg text-white mt-6">
            At I-HCDT, we believe in collective efforts to drive sustainable
            development in host communities. You can contribute by providing
            feedback and reporting issues on ongoing projects, ensuring
            transparency and accountability. Engage in community discussions to
            share insights and collaborate with other stakeholders to improve
            project execution. Every contribution, big or small, helps make a
            difference. Join us today and be part of the change!
          </p>

          {/* <button className="mt-9 flex gap-x-2 text-base font-medium text-white">
            Improve workflow
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M15.586 10.6574L11.636 6.70741C11.4538 6.5188 11.353 6.2662 11.3553 6.00401C11.3576 5.74181 11.4628 5.491 11.6482 5.30559C11.8336 5.12018 12.0844 5.01501 12.3466 5.01273C12.6088 5.01045 12.8614 5.11125 13.05 5.29341L18.707 10.9504C18.8002 11.0431 18.8741 11.1532 18.9246 11.2746C18.9751 11.3959 19.001 11.526 19.001 11.6574C19.001 11.7888 18.9751 11.9189 18.9246 12.0403C18.8741 12.1616 18.8002 12.2718 18.707 12.3644L13.05 18.0214C12.9578 18.1169 12.8474 18.1931 12.7254 18.2455C12.6034 18.2979 12.4722 18.3255 12.3394 18.3267C12.2066 18.3278 12.0749 18.3025 11.952 18.2522C11.8291 18.2019 11.7175 18.1277 11.6236 18.0338C11.5297 17.9399 11.4555 17.8283 11.4052 17.7054C11.3549 17.5825 11.3296 17.4508 11.3307 17.318C11.3319 17.1852 11.3595 17.054 11.4119 16.932C11.4643 16.81 11.5405 16.6997 11.636 16.6074L15.586 12.6574H6C5.73478 12.6574 5.48043 12.5521 5.29289 12.3645C5.10536 12.177 5 11.9226 5 11.6574C5 11.3922 5.10536 11.1378 5.29289 10.9503C5.48043 10.7628 5.73478 10.6574 6 10.6574H15.586Z"
              fill="#fff"
            />
            </svg>
          </button> */}
        </article>
      </section>
      {/* Contribution steps */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <article className="flex flex-col justify-center">
              <h2 className="font-bold text-xl lg:text-5xl ">
                Contribution steps
              </h2>

              <div className="hidden md:flex justify-between my-6 border border-light-gray rounded-lg">
                <span className="flex-1 text-center bg-off-white py-4  font-medium text-sm inline-block ">
                  Submit a Report
                </span>
                <span className="flex-2 px-3 border-x text-center border-light-gray py-4  font-medium text-sm inline-block ">
                  Attend Community Meetings
                </span>
                <span className="flex-1 px-1  py-4 text-center font-medium text-sm inline-block ">
                  Volunteer for Initiatives
                </span>
              </div>

              {/* mobile */}
              <div className="md:hidden flex items-center justify-between my-6 border border-light-gray rounded-lg">
                <span className="flex-1 text-center px-2 bg-off-white py-4  font-medium text-base inline-block ">
                  Submit a Report
                </span>
                <span className=" text-center flex-1 border-x border-light-gray py-4  font-medium text-base inline-block ">
                  Attend
                </span>
                <span className=" text-center flex-1 py-4  font-medium text-base inline-block ">
                  Volunteer
                </span>
              </div>
              <p className="text-base lg:text-lg text-gray-1">
                Help improve transparency and accountability by reporting
                project issues, conflicts, or community concerns. Use the I-HCDT
                platform to provide details, track resolution progress, and
                ensure stakeholders take necessary action. Your input drives
                real change!
              </p>

              {/* <button className="mt-9 flex gap-x-2 text-base font-medium text-blue-2">
                Check the tools
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.586 10.6574L11.636 6.70741C11.4538 6.5188 11.353 6.2662 11.3553 6.00401C11.3576 5.74181 11.4628 5.491 11.6482 5.30559C11.8336 5.12018 12.0844 5.01501 12.3466 5.01273C12.6088 5.01045 12.8614 5.11125 13.05 5.29341L18.707 10.9504C18.8002 11.0431 18.8741 11.1532 18.9246 11.2746C18.9751 11.3959 19.001 11.526 19.001 11.6574C19.001 11.7888 18.9751 11.9189 18.9246 12.0403C18.8741 12.1616 18.8002 12.2718 18.707 12.3644L13.05 18.0214C12.9578 18.1169 12.8474 18.1931 12.7254 18.2455C12.6034 18.2979 12.4722 18.3255 12.3394 18.3267C12.2066 18.3278 12.0749 18.3025 11.952 18.2522C11.8291 18.2019 11.7175 18.1277 11.6236 18.0338C11.5297 17.9399 11.4555 17.8283 11.4052 17.7054C11.3549 17.5825 11.3296 17.4508 11.3307 17.318C11.3319 17.1852 11.3595 17.054 11.4119 16.932C11.4643 16.81 11.5405 16.6997 11.636 16.6074L15.586 12.6574H6C5.73478 12.6574 5.48043 12.5521 5.29289 12.3645C5.10536 12.177 5 11.9226 5 11.6574C5 11.3922 5.10536 11.1378 5.29289 10.9503C5.48043 10.7628 5.73478 10.6574 6 10.6574H15.586Z"
                    fill="#2563EB"
                  />
                </svg>
              </button> */}
            </article>

            <div>
              <Image
                src={contributionImg}
                alt="Use the I-HCDT platform to provide details, track resolution progress, and ensure stakeholders take necessary action"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the I-HCDT community */}
      <section className="mt-20 max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-0 bg-community-linear text-white lg:rounded-3xl py-20">
        <h2 className="font-bold text-3xl lg:text-5xl ">
          Join the I-HCDT community today{" "}
        </h2>

        <p className="mt-6 mb-9 text-base lg:text-lg lg:w-2/3 lg:mx-auto">
          Be part of a network dedicated to transparency and development. By
          joining the I-HCDT reporting community, you can track projects, share
          insights, report issues, and collaborate with stakeholders to drive
          positive change in your community. Your voice matters—get involved
          today!
        </p>

        <a href={`https://hcdt-7a5ba199a866.herokuapp.com/auth/2`}>
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
        </a>
      </section>
      <Footer />
    </div>
  );
};

const WorkCard = ({ item }) => {
  return (
    <article className="text-center">
      <div
        style={{ backgroundColor: `${item.bg}` }}
        className={` ${item.bg}  mx-auto h-24 w-24 rounded-full flex items-center justify-center`}
      >
        <Image src={item.icon} alt={item.title} />
      </div>
      <h3 className="my-4 font-bold text-lg lg:text-2xl text-dark-1">
        {item.title}
      </h3>
      <p className="text-dark-1 text-base">{item.content}</p>
    </article>
  );
};

export default Home;
