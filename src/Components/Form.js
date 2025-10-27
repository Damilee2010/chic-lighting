import React, { useState } from "react";

function Form() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const checkAge = () => {
    const userAge = parseInt(age);

    if (isNaN(userAge) || userAge < 1) {
      setMessage("Please enter a valid age.");
      setColor("gray");
    } else if (userAge >= 1 && userAge < 18) {
      setMessage("You are between 1 and 18 years old.");
      setColor("red");
    } else if (userAge >= 18 && userAge <= 40) {
      setMessage("You are between 18 and 40 years old.");
      setColor("green");
    } else {
      setMessage("You are above 40 years old.");
      setColor("blue");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Age Validation</h2>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={styles.input}
      />
      <button onClick={checkAge} style={styles.button}>
        Check Age
      </button>
      <p style={{ color: color, fontWeight: "bold", marginTop: "15px" }}>
        {message}
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "100px auto",
    textAlign: "center",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Form;
