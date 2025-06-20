import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Form from "./components/Form/Form";
import TestDoc from "./components/TestDoc/TestDoc";
import Brand from "./components/Form/Brand";

export default function App() {
  //
  // sets the current test state object either from local storage or some default settings
  //
  const [currentTest, setCurrentTest] = useState(() => {
    const saved = localStorage.getItem("currentTest");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        brand: "ybs",
        testNumber: "",
        testTitle: "",
        prerequisites: [
          "A web browser, such as Chrome, Edge, Firefox or Safari",
        ],
        steps: [],
        videos: [],
        image: "",
      }
    );
  });
  //
  // when the value of the state object being changed is a string this function is called
  //
  const handleSetStateForStrings = (key, newValue) => {
    setCurrentTest({ ...currentTest, [key]: newValue });
  };
  //
  // when the value of the state object being changed is an array this function is called
  //
  const handleSetStateForArrays = (key, newValue) => {
    setCurrentTest({
      ...currentTest,
      [key]: [...currentTest[key], newValue],
    });
  };
  //
  // when the current test is updated, the item in local storage is as well
  //
  useEffect(() => {
    localStorage.setItem("currentTest", JSON.stringify(currentTest));
  }, [currentTest]);
    //
  //
  const showInput = (key, valueToEdit) => {
    const form = document.getElementById(`${valueToEdit}-form`)
    const text = document.getElementById(`${valueToEdit}-text`)
    form.style.display = 'flex';
    text.style.display = 'none'; 
  }
  //
  //
  const showText = (key, valueToEdit) => { 
    const form = document.getElementById(`${valueToEdit}-form`)
    const text = document.getElementById(`${valueToEdit}-text`)
    form.style.display = 'none';
    text.style.display = 'flex'; 
  }
  //
  //
  const [editedValue, setEditedValue] = useState();
  //
  //
  // TO DO !!!!!! this isn't working. should enable save button when the editedValue state changes
  useEffect(() => {
    const saveButton = document.getElementById('save-button');
    console.log(editedValue);
    saveButton.disabled = false;
  },[editedValue])
  //
  //
  const handleEditInStateArray = (key, valueToEdit) => { 
    const editedArray = currentTest[key].map((item) => {
if (item === valueToEdit) return editedValue;
else return item;
    })
    setCurrentTest({...currentTest, [key]: editedArray})
  };
  //
  // when a prerequisite or test step is deleted this function is called
  //
  const handleDeleteFromStateArray = (key, valueToDelete) => { 
    const filteredArray = currentTest[key].filter((item) => {
      return item !== valueToDelete;
    });
    setCurrentTest({ ...currentTest, [key]: filteredArray });
  };
  // functionality for saving tests
  //
  const [savedTest, setSavedTest] = useState({});
  const [savedTestKey, setSavedTestKey] = useState("");
  //
  // when 'save test' button is clicked, this function creates an object with the currentTest and generates a key with the test number and test title
  //
  const handleSave = () => {
    setSavedTest({ ...currentTest });
    setSavedTestKey(`${currentTest.testNumber}-${currentTest.testTitle}`);
  };
  //
  // this then adds the item to local storage
  //
  useEffect(() => {
    localStorage.setItem(savedTestKey, JSON.stringify(savedTest));
  }, [savedTest, savedTestKey]);
  ///
  // this sets the current test to the selected saved test so it can then be edited
  //
  const handleSavedTestSelect = (number, title) => {
    const selectedTestKey = `${number}-${title}`;
    const selectedTest = JSON.parse(localStorage.getItem(selectedTestKey));
    if (!selectedTest.videos) {
      const newSelectedTest = { ...selectedTest, videos: [] };
      setCurrentTest(newSelectedTest);
    } else setCurrentTest(selectedTest);
  };
  //
  // this creates an array of saved test objects from local storage
  //
  const allLocalStorage = { ...localStorage };
  let allSavedTests = [];
  for (const [key, value] of Object.entries(allLocalStorage)) {
    if (key !== "currentTest" && value !== "{}") {
      const savedTestString = localStorage.getItem(key);
      const savedTestObject = JSON.parse(savedTestString);
      allSavedTests.push(savedTestObject);
    }
  }
  //
  // this opens the print window
  //
  const handlePrint = () => {
    window.print();
  };
  //
  return (
    <div className="container">
      <Box className="no-print" display={"flex"} flexDirection={"column"}>
        <Brand handleSetStateForStrings={handleSetStateForStrings} />
        <Form
          handleSetStateForStrings={handleSetStateForStrings}
          handleSetStateForArrays={handleSetStateForArrays}
        />
      </Box>
      <TestDoc
        currentTest={currentTest}
        handleDeleteFromStateArray={handleDeleteFromStateArray}
        handleEditInStateArray={handleEditInStateArray}
        showInput={showInput}
        showText={showText}
        setEditedValue={setEditedValue}
        handlePrint={handlePrint}
        handleSave={handleSave}
        handleSavedTestSelect={handleSavedTestSelect}
        allSavedTests={allSavedTests}
      />
    </div>
  );
}
