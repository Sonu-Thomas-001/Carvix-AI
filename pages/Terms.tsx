import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "user-responsibilities", title: "2. User Responsibilities" },
    { id: "acceptable-use", title: "3. Acceptable Use" },
    { id: "intellectual-property", title: "4. Intellectual Property" },
    { id: "limitation-of-liability", title: "5. Limitation of Liability" },
    { id: "termination", title: "6. Termination" },
    { id: "governing-law", title: "7. Governing Law" }
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
            Terms of Service
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
                These Terms of Service ("Terms", "Terms of Service") govern your relationship with Carvix AI website and the Carvix AI mobile application (the "Service") operated by Carvix AI ("us", "we", or "our").
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read these Terms of Service carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
              </p>
            </div>

            <div id="user-responsibilities" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">2. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>

            <div id="acceptable-use" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Generate content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
                <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the Service.</li>
                <li>Upload, post, email, transmit or otherwise make available any content that you do not have a right to make available under any law or under contractual or fiduciary relationships.</li>
                <li>Upload, post, email, transmit or otherwise make available any content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party.</li>
              </ul>
            </div>

            <div id="intellectual-property" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Carvix AI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Carvix AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>User Generated Content:</strong> You retain all of your ownership rights in your User Content. However, by submitting User Content to Carvix AI, you hereby grant Carvix AI a worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service and Carvix AI's (and its successors' and affiliates') business.
              </p>
            </div>

            <div id="limitation-of-liability" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In no event shall Carvix AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>
            </div>

            <div id="termination" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </div>

            <div id="governing-law" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
