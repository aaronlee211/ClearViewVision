import React from 'react';
// import * as Icon from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div class='container'>
        <div class="row" id='foot'>
          <div class='col-lg-3 col-md-6 ft-items'>
            <h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill ft-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <p>(PHONE)-NUMBER</p>
            </h5>
          </div>
          <div class='col-lg-3 col-md-6 ft-items'>
            <h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
              {/* Maybe need a Contact Us page where they can write a message and automatically send us a message */}
              <a href='mailto:info@clearviewatx.com'>info@clearviewatx.com</a>
            </h5>
          </div>
          <div class='col-lg-6 ft-items'>
            <h5>
              <svg id="loc-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-fill ft-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
              </svg>
              <a href='https://www.google.com/maps/place/ClearView+Vision/@30.2328086,-97.8277622,17z/data=!3m1!4b1!4m6!3m5!1s0x865b4be7ae82f12b:0x7f59bfd2b85a9872!8m2!3d30.2328041!4d-97.8228859!16s%2Fg%2F11khzp9p6g'>
                5017 W US Hwy 290, Austin, TX 78735 (at Walmart)
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div id="copyright" className="text-center p-3">
        <p>&copy; 2023 Clearview Vision ATX. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;