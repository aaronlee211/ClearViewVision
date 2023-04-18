function Card(props) {
  return (
    <div className="card">
      <img alt="card-img" src={"./img/"+props.img} className="text-center img-fluid prop-image" />
      <div className="text-center propcard-title">
        <div className="card-title-grid">
          <h3 className="card-title">{props.title}</h3>
        </div>
      </div>
      <div id="prop-body">
      <div className="p-3">
        <h5 className="card-text">
           {props.text}
        </h5>
      </div>
      <div className="center">
        <button type="button" class="btn btn-info prop-button">{props.button}</button>
      </div>
    </div>
    </div>
  );
}
export default Card;
