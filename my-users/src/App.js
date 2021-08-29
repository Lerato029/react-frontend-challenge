//React Hooks
import { useState, useEffect } from "react";

//Modules||Utilities
import { createUser } from "./utils";
import { deleteUser } from "./utils";
import { updateUser } from "./utils";

//Child Components
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";

//styling
import "./App.css";

//default object
const initialState = [
  {
    name: "Lectus convallis.",
    email: "john@email.com",
    role: "admin",
  },
  {
    name: "ld blandit nunc id.",
    email: "jane@email.com",
    role: "admin",
  },
  {
    name: "Scelerisquw sit ac.",
    email: "dave@email.com",
    role: "admin",
  },
  {
    name: "Potenti a tortor.",
    email: "sal@email.com",
    role: "user",
  },
];

function App() {
  //=========================================State Variables
  //array of users
  const [users, setUsers] = useState(initialState);

  //query object and index for forms
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "user",
  });
  const [index, setIndex] = useState(0);

  //booleans for rendering components
  const [showForm, setShowForm] = useState(false);
  const [renderTable, setRenderTable] = useState(true);

  //boolean checking if a new user is being created
  const [create, setCreate] = useState(false);


  //rerender table when item deleted from table
  useEffect(() => {
    setRenderTable(true);
  }, [renderTable]);

  //===============================================Create and  update user
  //update query object when user fills in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //create user module called and update users
    if (create) {
      let newArray = createUser(users, [user]);
      setUsers(newArray);

      //reset query object
      setUser({ name: "", email: "", role: "user" });
    } else {
      //update user module called and update users
      let updateArray = updateUser(users, index, user);
      setUsers(updateArray);

      //reset query object
      setUser({ name: "", email: "", role: "user" });
    }
    //hide form
    setShowForm(!showForm);
  };


  //===========================================================Delete user
  const handleDelete = (users, userIdx) => {
    //delete user module called and update users
    let deleteArray = deleteUser(users, userIdx);
    setUsers(deleteArray);

    //call useEffect
    setRenderTable(false);
  };

  //Components with Header, Form and Table conditionally rendered
  return (
    <div className="App">
      <Header />
      <main>
        {showForm ? (
          <div className="d-flex justify-content-center">
            <Form
              user={user}
              handleSubmit={handleSubmit}
              create={create}
              handleChange={handleChange}
              setShowForm={() => setShowForm(!showForm)}
            />
          </div>
        ) : (
          <div className="d-flex justify-content-center mx-2">
            <div style={{ width: "50rem" }} className="table-responsive">
              <div className="d-flex justify-content-between mt-5">
                <h3>Users</h3>
                <button
                  className="btn btn-success px-4 py-2  my-2"
                  onClick={() => {
                    setCreate(true);
                    setShowForm(true);
                  }}
                >
                  <i className="fas fa-plus"></i> Create User
                </button>
              </div>
              <Table
                users={users}
                targetUser={(person, idx) => {
                  setUser(person);
                  setIndex(idx);
                  setCreate(false);
                  setShowForm(true);
                }}
                deleteTarget={(userIdx) => {
                  handleDelete(users, userIdx);
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
