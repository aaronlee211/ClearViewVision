import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Services</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row services-container">
                    <div className="col-md-4 mb-2">
                        <Card title="Eye Exams" button="Find Out More" img="img1.png" text="A comprehensive eye exam includes more than just determining your need for glasses or contact lenses. Our doctors look at every aspect of the visual system to determine your ocular health. " />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Appointments" button="More Information" img="img2.png" text="Schedule your appointment online today! Your personal vision and health needs are very important to us. Our doctors take a holistic approach to help you reach your health and eye care goals." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Insurance" button="Contact Us" img="img3.png" text="At Hamilton Eye Associates, we accept most vision and medical insurances including Medicare. Contact us at 512-251-4040 or email us here with any questions about your insurance." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
