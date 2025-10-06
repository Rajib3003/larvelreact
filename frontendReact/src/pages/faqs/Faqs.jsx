import { useState } from 'react';

const faqs = [
  {
    question: "Will Power School কী?",
    answer: "Will Power School একটি শক্তিশালী শিক্ষণ ব্যবস্থাপনা প্ল্যাটফর্ম যা শিক্ষকদের, ছাত্রদের এবং অভিভাবকদের জন্য তথ্য সরবরাহ করে।"
  },
  {
    question: "কিভাবে Will Power School  অ্যাক্সেস করতে পারি?",
    answer: "Will Power School  অ্যাক্সেস করতে, আপনার স্কুলের ওয়েবসাইটে গিয়ে Student Portal এ লগইন করুন।"
  },
  {
    question: "Will Power School -এর মাধ্যমে কি কি তথ্য পাওয়া যায়?",
    answer: "Will Power School -এর মাধ্যমে আপনি আপনার সন্তানের গ্রেড, উপস্থিতি, অ্যাসাইনমেন্ট, শিক্ষকের মন্তব্য ইত্যাদি দেখতে পারেন।"
  },
  {
    question: "Will Power School  অ্যাপটি কি মোবাইলে ব্যবহার করা যায়?",
    answer: "হ্যাঁ, Will Power School -এর জন্য iOS ও Android অ্যাপ্লিকেশন উপলব্ধ, যা আপনি respective app store থেকে ডাউনলোড করতে পারেন।"
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded shadow-sm p-4">
          <h1 className="mb-4 text-center">Will Power School FAQ</h1>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-bottom py-3">
                <div
                  className="faq-question d-flex justify-content-between align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="mb-0">{faq.question}</h5>
                  <span className="fw-bold fs-4">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer mt-2 ps-3">
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
