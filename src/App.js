import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";

const App = () => {
  const model = {
    fullname: "",
    class: "",
    roll: "",
    subject: "",
    dob: ""
  }
  const [editIndex, setEditIndex] = useState(null);
  const [right, setRight] = useState(-450);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(model);

  const handleDrawer = () => {
    setRight(0);
  };

  const handleInput = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key]: value
    });
  };

  const createStudent = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm(model);
    setRight(-450);
  };

  const deleteStudent = (index) => {
    const backup = [...students];
    backup.splice(index, 1);
    setStudents(backup);
  };

  const editStudent = (index) => {
    setRight(0);
    setForm(students[index]);
    setEditIndex(index)
  };


const saveStudent = (e) => {
  e.preventDefault()
  // alert("save request")
  const backup = [...students]
  backup[editIndex] = form 
  setStudents(backup) 
  setForm(model)
  setEditIndex(null)
  setRight(-450);
}

const closeDrawer = () => {
  setRight(-450)
  setForm(model)
  setEditIndex(null)
}

  return (
    <div
      style={{
        background: "#ddd",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "70%",
          background: "white",
          margin: "32px auto", //check
          padding: 32,
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
        >
          CodingOtt
        </h1>

        <button
          onClick={handleDrawer}
          style={{
            border: "none",
            background: "#8b07b7",
            color: "white",
            padding: "14px 24px",
            borderRadius: 4,
            fontSize: 16,
            margin: "24px 0",
          }}
        >
          <i className="ri-user-add-line" style={{ marginRight: 8 }}></i>
          New Student
        </button>

        <table className="crud-app">
          <thead>
            <tr>
              <th>S/No</th>
              <th>Student's name</th>
              <th>Subject</th>
              <th>class</th>
              <th>Roll no.</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.fullname}</td>
                <td>{student.subject}</td>
                <td>{student.class}</td>
                <td>{student.roll}</td>
                <td>{student.dob}</td>
                <td>
                  <div>
                    <button
                      onClick={() => editStudent(index)}
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "#07c65d",
                        color: "white",
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    >
                      <i className="ri-image-edit-line"></i>
                    </button>

                    <button
                      onClick={() => deleteStudent(index)}
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "red",
                        color: "white",
                        borderRadius: 4,
                      }}
                    >
                      <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside
        style={{
          position: "fixed",
          top: 0,
          right: right,
          width: 450,
          background: "white",
          height: "100%",
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
          padding: 32,
          boxSizing: "border-box",
          transition: "0.3s",
        }}
      >
        <button
          onClick={closeDrawer}
          style={{
            border: "none",
            background: "transparent",
            fontSize: 18,
            color: "#8407ba",
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <i className="ri-close-circle-line"></i>
        </button>

        {/* drawer - form */}
        <h1>New Student</h1>
        <form
          onSubmit={editIndex === null ? createStudent : saveStudent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <input
            value={form.fullname}
            onChange={handleInput}
            required
            name="fullname"
            type="text"
            placeholder="Enter your fullname here"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />

          <input
            value={form.class}
            onChange={handleInput}
            required
            name="class"
            type="number"
            placeholder="Enter your class"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />

          <input
            value={form.roll}
            onChange={handleInput}
            required
            name="roll"
            type="number"
            placeholder="Enter your roll no."
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />

          <input
            value={form.subject}
            onChange={handleInput}
            required
            name="subject"
            type="text"
            placeholder="Enter your subject here"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />

          <input
            value={form.dob}
            onChange={handleInput}
            required
            name="dob"
            type="date"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />

          {editIndex === null ? (
            <button
              style={{
                border: "none",
                background: "#8B07B7",
                color: "white",
                fontSize: 16,
                padding: "14px 0",
                borderRadius: 4
              }}
            >
              SUBMIT
            </button>
          )
           :
         (
            <button
              style={{
                border: "none",
                background: "deeppink",
                color: "white",
                fontSize: 16,
                padding: "14px 0",
                borderRadius: 4
              }}
            >
              SAVE
            </button>
          )}
        </form>
      </aside>
    </div>
  );
};

export default App;
