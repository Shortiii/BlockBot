import { useState } from 'react';
import './Questions.css';
// import arrow from '../../assets/downArrow.png';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleFAQ = (index) => {
    if (isTransitioning) return; // Prevent spamming clicks

    if (openIndex === index) {
      // If same, just close
      setOpenIndex(null);
    } else if (openIndex === null) {
      // If nothing is open, just open
      setOpenIndex(index);
    } else {
      // If switching, close first then open new
      setIsTransitioning(true);
      setOpenIndex(null); // Close current

      // Wait for CSS transition to finish (matches your CSS duration)
      setTimeout(() => {
        setOpenIndex(index); // Open new one
        setIsTransitioning(false);
      }, 700); // matches your transition (700ms = 0.7s)
    }
  };

  const faqs = [
    { number: '1', title: 'What is BlockBot?', text: 'BlockBot is a high-speed Telegram trading bot built with speed, security, and YOU in mind.' },
    { number: '2', title: 'What are Telegram trading bots?', text: 'Telegram trading bots are tools that let you trade crypto tokens directly from your Telegram chat, using smart contracts to execute transactions.' },
    { number: '3', title: 'How do I start trading on Telegram using BlockBot?', text: 'Getting started with BlockBot takes less than a minute, to get started click here.' },
    { number: '4', title: 'Which chain does BlockBot support?', text: 'BlockBot is built on Monad, a next-gen Layer-1 EVM compatible blockchain focused on high throughput and low latency.' },
    { number: '5', title: 'Do I need to install anything before using BlockBot?', text: 'No extra downloads needed. Just have Telegram installed, open the official BlockBot link to get started.' },
    { number: '6', title: 'Is BlockBot free to use?', text: 'BlockBot is free to access and use, there are no subscription or set-up costs. A 1% trading fee applies to each buy and sell transaction, along with standard gas fees on the Monad network.' },
    // { number: '7', title: 'What is BlockBot?', text: 'Building alongside our community helps shape our product...' },
  ];

  return (
    <div className='faq'>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <div className="faq-header" onClick={() => toggleFAQ(index)}>
            <div className="faq-info">
              <span className={`number num${faq.number}`}>{faq.number}</span>

              <div className="faq-body">
                <span className="title">{faq.title}</span>

                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-content-inner">
                    <p className="ideas">{faq.text}</p>
                       {/* Only show this for number 3 */}
                {faq.number === '3' && (
                  <p className="text-break ideas">
                    Learn more about getting started{" "}
                    <a
                      href="https://docs.blockbot.trade/getting-started/quickstart"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Here.
                    </a>
                  </p>
                )}
                  </div>
                </div>
              </div>
            </div>

            <span className="toggle">
              <svg 
              className={`arrow-icon ${openIndex === index ? 'rotated' : ''}`}
               viewBox="0 0 47 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.4432 21.1813L29.4432 24.3474C29.4432 24.5836 29.3494 24.8101 29.1824 24.9771C29.0154 25.1441 28.7889 25.238 28.5527 25.238L18.6293 25.238C18.3931 25.238 18.1666 25.1441 17.9996 24.9771C17.8326 24.8101 17.7387 24.5836 17.7387 24.3474L17.7387 21.178L12.7771 21.178C12.5409 21.178 12.3143 21.0842 12.1473 20.9171C11.9803 20.7501 11.8865 20.5236 11.8865 20.2874L11.8865 17.1203L6.9237 17.1203C6.6875 17.1203 6.46098 17.0264 6.29396 16.8594C6.12694 16.6924 6.03312 16.4659 6.03312 16.2297L6.03312 13.0637L1.07145 13.0637C0.83525 13.0637 0.608726 12.9698 0.441711 12.8028C0.274692 12.6358 0.180862 12.4093 0.180862 12.1731L0.180862 1.73654C0.192574 1.50834 0.29155 1.29338 0.457314 1.13611C0.623077 0.978839 0.842949 0.8913 1.07145 0.8916L5.14253 0.8916C5.37873 0.8916 5.60526 0.985427 5.77227 1.15244C5.93929 1.31946 6.03312 1.54599 6.03312 1.78218L6.03312 4.95266L10.9959 4.95266C11.2321 4.95266 11.4586 5.04649 11.6256 5.21351C11.7927 5.38052 11.8865 5.60705 11.8865 5.84325L11.8865 9.00928L17.7387 9.00928L17.7387 13.0637L29.4432 13.0637L29.4432 9.00594L35.2955 9.00594L35.2955 5.83991C35.2955 5.60371 35.3893 5.37719 35.5563 5.21017C35.7234 5.04316 35.9499 4.94933 36.1861 4.94933L41.1477 4.94933L41.1477 1.78219C41.1477 1.54599 41.2416 1.31946 41.4086 1.15245C41.5756 0.985428 41.8021 0.891601 42.0383 0.891601L46.1094 0.891602C46.3456 0.891602 46.5721 0.985428 46.7392 1.15245C46.9062 1.31946 47 1.54599 47 1.78219L47 12.1764C47 12.4126 46.9062 12.6391 46.7392 12.8062C46.5721 12.9732 46.3456 13.067 46.1094 13.067L41.1477 13.067L41.1477 16.233C41.1477 16.4692 41.0539 16.6958 40.8869 16.8628C40.7199 17.0298 40.4934 17.1236 40.2572 17.1236L35.2955 17.1236L35.2955 20.2908C35.2955 20.527 35.2017 20.7535 35.0346 20.9205C34.8676 21.0875 34.6411 21.1813 34.4049 21.1813L29.4432 21.1813Z" fill="currentColor"/>
</svg>

            </span>
          </div>
        </div>
      ))}
      <div className="free"></div>
    </div>
  );
};

export default Questions;
