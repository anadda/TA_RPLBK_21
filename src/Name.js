import React, {useState, useEffect, useRef} from "react";
import Input from "./components/TextInput";
import Button from "./components/Button";
import './Name.css'

function NewHook(props) {
  const [state, setState] = React.useState({
    nama: "",
    nim: "",
    kelompok: "",
  });
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  const namaRef = React.useRef();
  const nimRef = React.useRef();
  const kelompokRef = React.useRef();

  function handleCheck() {
    if (state.nama === "") {
      alert("Nama harus diisi");
      namaRef.current.focus();
    } else if (state.nim === "") {
      alert("Nim harus diisi");
      nimRef.current.focus();
    } else if (state.kelompok === "") {
      alert("Kelompok harus diisi");
      kelompokRef.current.focus();
    } else {
      setState({
        ...state,
        ["nama"]: "",
        ["nim"]: "",
        ["kelompok"]: "",
      });
      alert("Semua Telah Terisi!");
    }
  }

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
      <div className="avatar-input">
        <div className="avatar">
          {
            selectedFile &&
            <img
              src={preview}
              alt="avatar"
              className="avatar"
            />
          }
        </div>
        <div>
          <label htmlFor="photo">
            <Button value="Upload photo" type="button" onClick={handleClick} />
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
        <Input name="nama" label="Name" locked={false} active={false} />
        <Input name="position" label="Position" locked={false} active={false} />
        <Input
        name="joinDate"
          label="Join Date"
          locked={false}
          active={false}
          type="date"
        />
        <Input name="email" label="Email" locked={false} active={false} />
      </div>
      <Button type="button" value="Submit" />
    </div>
  );
}

export default NewHook;
