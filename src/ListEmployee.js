import React, { useState, useEffect, useContext } from "react";
import "./ListEmployee.css";
import EmployeeCard from "./components/EmployeeCard";
import { useNavigate } from "react-router-dom";
import Input from "./components/TextInput";

export default function Counter(props) {
  // const [text, setText] = React.useState("");
  // const [showImage] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const API = "http://103.139.192.200:4000/";
  const ENDPOINT = API + "api/employees";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " : " + value);
    if (name === "search") {
      setSearch(value);
    }
  };

  const getEmployees = async (text) => {
    await fetch(`${ENDPOINT}?text=${text}`)
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
    navigate("/effect", {
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
    getEmployees(search);
  }, [search]);

  return (
    <div className="Main">
      <p className="Text">PT Something Employee List</p>
      <div style={{width: "200px"}}>
        <Input
          name="search"
          label="Search.."
          locked={false}
          active={false}
          onChange={handleInputChange}
          value={search}
        />

      </div>
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
