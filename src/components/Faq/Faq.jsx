import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = 
    
  [
    {
      "question": "How do I start using Study Together?",
      "answer": "To get started, sign up on our platform by providing your basic information. Once you're registered, you can create a profile, join study groups, and access study materials shared by others."
    },
    {
      "question": "Is there any cost to use Study Together?",
      "answer": "Study Together is completely free to use. You can sign up, create study groups, and access study materials without any charges. However, there might be optional premium features for advanced services."
    },
    {
      "question": "How can I share study materials with others?",
      "answer": "To share study materials, navigate to the 'Resources' section, upload your files (documents, notes, videos, etc.), and select the study groups or users you'd like to share them with."
    },
    {
      "question": "Can I access resources without being in a study group?",
      "answer": "Yes! You can browse and access public study resources even if you're not in a group. However, some resources may be restricted to specific groups or members."
    },
    {
      "question": "How can I track my study progress?",
      "answer": "You can track your study progress by setting goals and milestones in the 'Progress Tracker' section. This feature allows you to log your study hours, track completed assignments, and measure your overall learning achievements."
    },
    {
      "question": "Can I access Study Together on my mobile device?",
      "answer": "Yes! Study Together is available on both web and mobile platforms. You can download our mobile app from the App Store or Google Play Store for easy access to your study groups and resources on the go."
    },
  
    {
      "question": "Can I offer tutoring or help other students on Study Together?",
      "answer": "Absolutely! If you're knowledgeable in a specific subject or topic, you can offer tutoring services or mentorship through Study Together by creating a tutoring profile or helping in the relevant study groups."
    },

    {
      "question": "Can I invite friends to join Study Together?",
      "answer": "Yes! You can invite your friends to join Study Together by sharing your referral link or inviting them through email. Once they sign up, you can collaborate and study together."
    }
  ]
  ;

  return (
    <div className="py-16 ">
      <div className="text-center w-10/12 sm:w-8/12 mx-auto py-16 px-4 sm:px-10  rounded-3xl bg-base-200 shadow-md">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <div
                className="cursor-pointer flex justify-between items-center py-4"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">{faq.question}</h3>
                <span className="text-xl text-gray-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 py-4 text-start text-lg">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;