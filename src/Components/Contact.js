import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
export default function Contact() {
    return(
    <div id="contact" className="contact" >
      <h2 className='mt-8 underline decoration-wavy italic font-semibold'>Contact Me</h2>
      <div className='flex items-center justify-center'>
        <div className='flex items-center mb-2 mr-6'>
          <FaPhone style={{ marginRight: '8px', color: '#0073e6' }} /> 
          <span>+90 507 659 37 36</span> 
        </div>
        <div className='flex items-center mb-2'>
          <FaEnvelope style={{ marginRight: '8px', color: '#0073e6' }} /> 
          <span>slgedik42@gmail.com</span>
        </div>
      </div>
    </div>
  );
}