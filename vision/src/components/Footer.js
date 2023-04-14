import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div class='container'>
        <div class="row">
          <div class='col mb-3 mb-md-0'>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class='col mb-3 mb-md-0'>
            <h4>Contact Us</h4>
            <p>Email: info@example.com<br />
               Phone: 555-555-5555</p>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>&copy; 2023 Clearview Vision ATX ©. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;