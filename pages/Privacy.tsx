import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Privacy: React.FC = () => {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "how-we-use-data", title: "3. How We Use Data" },
    { id: "cookies-policy", title: "4. Cookies Policy" },
    { id: "data-security", title: "5. Data Security" },
    { id: "user-rights", title: "6. User Rights" },
    { id: "contact-information", title: "7. Contact Information" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-carvix-panel/30 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400"
          >
            Last Updated: March 22, 2026
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/4 hidden md:block"
          >
            <div className="sticky top-28 glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Table of Contents</h3>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`} 
                      className="text-sm text-gray-300 hover:text-carvix-accent transition-colors block"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-3/4 prose prose-invert prose-lg max-w-none"
          >
            <div id="introduction" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to Carvix AI ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using the Carvix AI platform, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <div id="information-we-collect" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number.</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
                <li><strong>Generated Content:</strong> Images, prompts, and configurations you create using our AI tools are stored to provide you with a history of your work and to improve our models (unless you opt-out).</li>
              </ul>
            </div>

            <div id="how-we-use-data" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Carvix AI uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div id="cookies-policy" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Cookies Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
              </p>
            </div>

            <div id="data-security" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p className="text-gray-300 leading-relaxed">
                All generated images and user data are encrypted at rest and in transit using industry-standard protocols.
              </p>
            </div>

            <div id="user-rights" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">6. User Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The right to access, update or to delete the information we have on you.</li>
                <li>The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
                <li>The right to object. You have the right to object to our processing of your Personal Data.</li>
                <li>The right of restriction. You have the right to request that we restrict the processing of your personal information.</li>
                <li>The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
                <li>The right to withdraw consent. You also have the right to withdraw your consent at any time where Carvix AI relied on your consent to process your personal information.</li>
              </ul>
            </div>

            <div id="contact-information" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>By email: privacy@carvix.ai</li>
                <li>By visiting the Contact page on our website.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
