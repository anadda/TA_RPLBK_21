import React, { useState, useEffect, useContext } from "react";
import "./ListEmployee.css";
import EmployeeCard from "./components/EmployeeCard";
import { useNavigate } from "react-router-dom";



export default function Counter(props) {
  // const [text, setText] = React.useState("");
  // const [showImage] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const API = "http://103.139.192.200:4000/";
  const ENDPOINT = API + "api/employees";

  const getEmployees = async () => {
    await fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = (employee) => {
    console.log(employee);
    navigate('/effect',{
      state: {
        id: employee._id,
        name: employee.name,
        job: employee.posisi,
        email: employee.email,
        joinDate: employee.tanggalMasuk,
        photo: API + employee.photo,
      },
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="Main">
      <p className="Text">PT Something Employee List</p>
      <div className="container">
        {data.map((employee, idx) => (
          <EmployeeCard
            key={idx}
            id={idx}
            name={employee.name}
            job={employee.posisi}
            photo={API + employee.photo}
            handleClick={() => handleClick(employee)}
          />
        ))}
      </div>
    </div>
  );
}
