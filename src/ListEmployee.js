import React, { useState, useEffect, useContext } from "react";
import "./ListEmployee.css";
import EmployeeCard from "./components/EmployeeCard";

export default function Counter() {
  // const [text, setText] = React.useState("");
  // const [showImage] = useState(true);
  const [data, setData] = useState([]);

  const employees = [
    {
      id: 1,
      name: "ahmad",
      job: "tukang a",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "12-12-12",
      email: "a@gmail.com",
    },
    {
      id: 2,
      name: "bustomi",
      job: "tukang b",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "13-12-12",
      email: "b@gmail.com",
    },
    {
      id: 3,
      name: "chloe",
      job: "tukang c",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "17-12-12",
      email: "c@gmail.com",
    },
    {
      id: 4,
      name: "dukun",
      job: "tukang d",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "20-12-12",
      email: "d@gmail.com",
    },
    {
      id: 5,
      name: "ee",
      job: "tukang e",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "20-12-12",
      email: "e@gmail.com",
    },
    {
      id: 6,
      name: "filip",
      job: "tukang f",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
      join_date: "20-12-12",
      email: "f@gmail.com",
    },
    /*
    */
  ];

  const API = "http://103.139.192.200:4000/"
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

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div
      className="Main"
    >
      <p className="Text">PT Something Employee List</p>
      <div className="container">
        {data.map((employee, idx) => (
          <EmployeeCard
          key={idx}
            id={idx}
            name={employee.name}
            job={employee.posisi}
            photo={API + employee.photo}
            join_date={employee.tanggalMasuk}
            email={employee.email}
          />
        ))}
      </div>
    </div>
  );
}
