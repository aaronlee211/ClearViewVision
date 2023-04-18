import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">Services</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row services-container">
                    <div className="col-md-4 mb-2">
                        <Card title="Eye Exams" button="Find Out More" img="img1.png" text="." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Appointments" button="More Information" img="img2.png" text="." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Insurance" button="Contact Us" img="img3.png" text="." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
