import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <>
      <div className="col-md-5 animated fadeIn" onClick={props.handleClick}>
        <div className="card">
          <div className="card-body">
            <div className="avatar">
              <img src={props.photo} alt="avatar" className="card-img-top" />
            </div>
          </div>
          <h5 className="card-title">Employee {props.name}</h5>
          <p className="card-text">{props.job}</p>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
