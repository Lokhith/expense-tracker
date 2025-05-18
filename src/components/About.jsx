import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Expense Tracker</h2>
      <p>
        The Expense Tracker website helps you easily monitor and manage your daily expenses.
        You can add new expenses with their title, amount (in ₹), and date.
      </p>
      <p>
        All your added expenses are listed below the form where you can review and delete them if needed.
        The total expense amount is calculated and shown at the bottom.
      </p>
      <p>
        This tool is designed to help you keep a close eye on your spending habits and manage your budget effectively.
      </p>
      <p>
        Whether you want to track monthly bills, daily snacks, or any other costs, this simple and clean tracker is here to help you stay organized.
      </p>
      <p>
        Start adding your expenses on the Home page, and keep your finances under control!
      </p>
    </div>
  );
};

export default About;
