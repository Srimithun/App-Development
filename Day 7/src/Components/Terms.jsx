import React from 'react';
import '../Asserts/Css/Terms.css';

function TermsAndConditions() {
  return (
    <div className='termspage'> 
    <a href="/" className="nav-link">
            <h3>Home</h3>
          </a>
      <h1>Terms and Conditions</h1>
      <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our Kitchen Display System. By using our Service, you consent to the practices described in this policy.</p>

      <h3>Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> When you use our Service, we may collect personal information such as your name, contact information, and billing details. This information is used for order processing, communication, and billing purposes.</li>
        <li><strong>Order Information:</strong> We collect information about orders placed through our Service, including order details, delivery information, and payment information. This data is essential for processing and fulfilling orders.</li>
        <li><strong>Usage Information:</strong> We may collect information about how you interact with our Service, including device information, IP addresses, browser type, and operating system. This information helps us improve the user experience and diagnose technical issues.</li>
      </ul>

      <h3 className='termsh3'>How We Use Your Information</h3>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>Processing and fulfilling orders</li>
        <li>Communicating with you about orders and inquiries</li>
        <li>Providing customer support</li>
        <li>Improving our Service and user experience</li>
        <li>Customizing your experience and preferences</li>
        <li>Conducting research and analysis for business improvements</li>
      </ul>

      <h3>Disclosure of Your Information</h3>
      <p>We may share your personal information with third parties under the following circumstances:</p>
      <ul>
        <li>With service providers who assist us in delivering our Service</li>
        <li>To comply with legal obligations or respond to legal requests</li>
        <li>To protect our rights, privacy, safety, or property, and that of our customers</li>
        <li>In connection with a business transition, such as a merger, acquisition, or sale of assets</li>
        <li>With your consent or as otherwise disclosed at the time of data collection</li>
      </ul>

      <h3>Security</h3>
      <p>We take reasonable steps to protect your personal information from unauthorized access, disclosure, or alteration. However, please be aware that no data transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>

      <h3>Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar tracking technologies to enhance your experience on our website and to analyze user behavior. You can choose to accept or decline cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our Service.</p>

      <h3>Children’s Privacy</h3>
      <p>Our Service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children. If we discover that a child under 13 has provided us with personal information, we will take steps to delete it. If you believe a child has provided us with personal information, please contact us immediately.</p>

      <h3>Changes to This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective immediately upon posting.</p>
    </div>
  );
}

export default TermsAndConditions;
