import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./ListEmployee.css";
import { ThemeContext } from "./About";
import EmployeeCard from "./components/EmployeeCard";

export default function Counter() {
  // const [text, setText] = React.useState("");
  // const [showImage] = useState(true);
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);

  const employees = [
    {
      id: 1,
      name: "ahmad",
      job: "tukang a",
      photo: "image a",
      join_date: "12-12-12",
      email: "a@gmail.com",
    },
    {
      id: 2,
      name: "bustomi",
      job: "tukang b",
      photo: "image b",
      join_date: "13-12-12",
      email: "b@gmail.com",
    },
    {
      id: 3,
      name: "chloe",
      job: "tukang c",
      photo: "image c",
      join_date: "17-12-12",
      email: "c@gmail.com",
    },
    {
      id: 4,
      name: "dukun",
      job: "tukang d",
      photo: "image d",
      join_date: "20-12-12",
      email: "d@gmail.com",
    },
    {
      id: 5,
      name: "ee",
      job: "tukang e",
      photo: "image e",
      join_date: "20-12-12",
      email: "e@gmail.com",
    },
    {
      id: 6,
      name: "filip",
      job: "tukang f",
      photo: "image f",
      join_date: "20-12-12",
      email: "f@gmail.com",
    },
  ];

  const API = "";

  const getEmployees = async () => {
    await fetch(API)
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
      style={{ background: theme.background, color: theme.foreground }}
    >
      <p className="Text">PT Something Employee List</p>
      <div className="container">
        {employees.map((employee) => (
          <EmployeeCard
            id={employee.id}
            name={employee.name}
            job={employee.job}
            photo={employee.photo}
            join_date={employee.join_date}
            email={employee.email}
          />
        ))}
      </div>
    </div>
  );
}
