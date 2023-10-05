import React from 'react';
import '../Asserts/Css/faq.css';

const Faq = () => {
  const faqs = [
    {
      question: '1. What are your restaurant hours?',
      answer: 'We are open from 11:00 AM to 10:00 PM, seven days a week.',
    },
    {
      question: '2. Do you offer vegetarian options?',
      answer: 'Yes, we have a wide selection of delicious vegetarian dishes on our menu.',
    },
    {
      question: '3. Can I make a reservation?',
      answer: 'Certainly! You can make a reservation by calling us at (123) 456-7890 or using our online reservation system.',
    },
    {
      question: '4. Is there parking available?',
      answer: 'Yes, we have ample parking space available for our customers.',
    },
    {
      question: '5. Do you offer delivery services?',
      answer: 'Yes, we offer both delivery and takeout services. You can place your order online or by phone.',
    },
    {
      question: '6. Are there gluten-free options on the menu?',
      answer: 'Of course! We have a selection of gluten-free dishes to accommodate your dietary preferences.',
    },
    {
      question: '7. Do you have a kids\' menu?',
      answer: 'Yes, we have a special menu for kids with a variety of kid-friendly options.',
    },
    {
      question: '8. Can I bring my own wine?',
      answer: 'We offer a fine selection of wines, but you are also welcome to bring your own wine for a corkage fee.',
    },
    {
      question: '9. How can I provide feedback about my experience?',
      answer: 'We value your feedback! You can leave a review on our website or speak to our staff during your visit.',
    },
    {
      question: '10. Do you host private events and parties?',
      answer: 'Yes, we offer private event and party hosting. Please contact us for more information and reservations.',
    },
  ];

  return (
    <div className="faq-section">
        <a href="/" className="nav-link">
            <h3>Home</h3>
          </a>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
