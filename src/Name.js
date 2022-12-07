import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./components/TextInput";
import Button from "./components/Button";
import "./Name.css";

const URL_POST = "https://employee-apis-rplbk.herokuapp.com/api/employees";
export default function NewHook(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [email, setEmail] = useState("");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // handle changes to the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " : " + value);
    if (name === "name") {
      setName(value);
    } else if (name === "position") {
      setPosition(value);
    } else if (name === "joinDate") {
      setJoinDate(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  // create a side effect to make the request to the API
  // when the form data is available
  const handleSubmit = (e) => {
    console.log("Clicked");
    e.preventDefault();
    if (name && position && joinDate && email && selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("name", name);
      formData.append("posisi", position);
      formData.append("tanggalMasuk", joinDate);
      formData.append("email", email);

      axios
        .post(URL_POST, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert("Data was successfully sent to the API");
        })
        .catch((error) => {
          alert("An error occurred while sending data to the API");
        });
    }
  };

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setSelectedFile(fileUploaded);
    //props.handleFile(fileUploaded);
  };

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: 1,
        paddingTop: "40px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="avatar-input">
          <div className="avatar">
            {selectedFile && (
              <img src={preview} alt="avatar" className="avatar" />
            )}
          </div>
          <div>
            <label htmlFor="photo">
              <Button
                value="Upload photo"
                type="button"
                onClick={handleClick}
              />
              <input
                type="file"
                id="photo"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
        <div className="data-input">
          <Input
            name="name"
            label="Name"
            locked={false}
            active={false}
            onChange={handleInputChange}
            value={name}
          />
          <Input
            name="position"
            label="Position"
            locked={false}
            active={false}
            onChange={handleInputChange}
            value={position}
          />
          <Input
            type="date"
            name="joinDate"
            label="Join Date"
            locked={false}
            active={false}
            onChange={handleInputChange}
            value={joinDate}
          />
          <Input
            name="email"
            label="Email"
            locked={false}
            active={false}
            onChange={handleInputChange}
            value={email}
          />
          <Button value="Submit" type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
