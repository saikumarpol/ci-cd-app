import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = () => {
    if (editIndex !== null) {
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? formData : student
      );
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, formData]);
    }
    setFormData({ name: "", age: "" });
  };

  const handleEditStudent = (index) => {
    setFormData(students[index]);
    setEditIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Management</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddStudent}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <table border="1" style={{ margin: "0 auto", width: "50%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleEditStudent(index)}>Edit</button>
                <button
                  onClick={() => handleDeleteStudent(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="3">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
