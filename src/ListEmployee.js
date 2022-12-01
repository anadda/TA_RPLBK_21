import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./ListEmployee.css";
import { ThemeContext } from "./About";

export default function Counter() {
  // const [text, setText] = React.useState("");
  // const [showImage] = useState(true);
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);

  const employees = [
    {
      id: 1,
      name: "a",
      job: "tukang a",
      photo: "image",
      join_date: "12-12-12",
      email: "a@gmail.com",
    },
    {
      id: 2,
      name: "b",
      job: "tukang b",
      photo: "image b",
      join_date: "13-12-12",
      email: "b@gmail.com",
    },
    {
      id: 3,
      name: "c",
      job: "tukang c",
      photo: "image c",
      join_date: "17-12-12",
      email: "c@gmail.com",
    },
    {
      id: 4,
      name: "d",
      job: "tukang d",
      photo: "image d",
      join_date: "20-12-12",
      email: "d@gmail.com",
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

      {/* {data.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))} */}
      {employees.map((employee) => (
        <div key={employee.id}>
          Name: {employee.name} Job: {employee.job}
        </div>
      ))}
    </div>
  );
}
