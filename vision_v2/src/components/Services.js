import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Services</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row services-container">
                    <div className="col-md-4 mb-2">
                        <Card title="Eye Exams" button="Find Out More" img="img1.png" text="Get a comprehensive eye exam from our experienced optometrists to prolong your vision and eye health." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Appointments" button="More Information" img="img2.png" text="Schedule an appointment for an eye exam, contact lens fitting, or other eye care services at our convenient location." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Insurance" button="Contact Us" img="img3.png" text="We accept most insurance plans to help you save money on your eye care services. Contact us to learn more about your coverage options." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;



