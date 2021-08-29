/* ====================================================================Form Component Containing: 
-Two Text input fields and a select element button && Heading content is conditionally rendered*/
const Form = ({ create, user, handleSubmit, handleChange, setShowForm }) => {
  //destructuring user object
  const { name, email, role } = user;
  return (
    <div style={{ minWidth: "28.75rem" }} className="formContainer">
      <h3 className="pointer" onClick={setShowForm}>
        <i className="fas fa-arrow-left mr-2"></i>{" "}
        {create ? "Create User" : "Update User"}
      </h3>
      <form className="mx-auto my-4 bg-white px-4 py-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputName" className="formLabel">
            name
          </label>
          <input
            type="text"
            className="form-control my-2 inputText"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user-email" className="formLabel">
            email
          </label>
          <input
            type="email"
            className="form-control my-2 inputText"
            id="user-email"
            aria-describedby="emailHelp"
            placeholder="johndoe@gmail.com"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputRole" className="formLabel">
            Role
          </label>
          <select
            className="form-select mb-3 text-capitalize inputText"
            aria-label=".form-select example"
            name="role"
            onChange={handleChange}
            required
          >
            <option value={role}>{role}</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          {create ? "Create User" : "Update User"}
        </button>
      </form>
    </div>
  );
};

export default Form;
