import "./EmployeeCard.css";

function EmployeeCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.photo} alt="avatar" />
        <div className="card-name">Employee {props.name}</div>
        <div className="card-job">{props.job}</div>
        <div className="detail-box">
          <div className="card-detail">
            <span>{props.join_date}</span>
          </div>
          <div className="card-detail">
            <span>{props.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
