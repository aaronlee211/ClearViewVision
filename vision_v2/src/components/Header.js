function Header() {
  return (
    <header>
      <img class="header-image" src={require("../images/headerbg2.jpg")}></img>
      <div class='header'>
        <h1>Our Vision is Your Vision.</h1>
        <h4>Here at Clearview Vision in Austin, TX, we are committed to providing comprehensive and personalized eye care services to patients of all ages.  With a team of experienced and friendly optometrists, Clearview Vision offers a range of services, including routine eye exams, contact lens fittings, consultation for eye diseases and infences, and partnerships for eye surgeries.</h4>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
