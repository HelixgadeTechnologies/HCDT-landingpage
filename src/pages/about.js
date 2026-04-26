import { Roboto, Inter } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const About = () => {
  return (
    <div className={`${roboto.className} font-[family-name:var(--font-roboto)]`}>
      <Head>
        <title>I-HCDT - About</title>
        <meta
          name="description"
          content="About the Independent HCDT Monitoring & Evaluation System"
        />
      </Head>

      <Header />

      <main className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left side: Large Logo */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative">
                <h2 className={`${inter.variable} text-6xl lg:text-8xl font-black text-black leading-none`}>
                  I-HCDT
                </h2>
                <h3 className={`${inter.variable} text-4xl lg:text-5xl font-bold text-blue-1 mt-2`}>
                  Monitor
                </h3>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                What is the Independent HCDT Monitoring & Evaluation System?
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                The independent Host Community Development Trust (I-HCDT) M&E System is designed to track and provide real-time data on the status and progress of HCDT implementation in the Niger Delta. It is designed to monitor project delivery, community participation and satisfaction, gender and social inclusion, and the efficiency of the conflict resolution mechanisms in the HCDT process. This Independent HCDT M&E system aims to foster the effective implementation of Host Community Development Trusts by providing insightful, evidence-based data for informed decision-making by HCDTs, communities, the government, and civil society organizations. This platform seeks to strengthen transparency and accountability in the HCDT process and includes features to support this:
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Join the I-HCDT community today
              </h2>
              <p className="text-white/80 text-sm lg:text-base max-w-2xl">
                Be part of a network dedicated to transparency and development. By joining the I-HCDT reporting community, you can track projects, share insights, report issues, and collaborate with stakeholders to drive positive change in your community. Your voice matters—get involved today!
              </p>
            </div>
            <a 
              href="https://hcdt-7a5ba199a866.herokuapp.com/auth/2"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors whitespace-nowrap shadow-xl"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
