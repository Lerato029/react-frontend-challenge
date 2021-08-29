//import svg
import trashIcon from "../images/trash.svg";

/* ==============================================================================Table Component: 
-names and trash icons pass user and or index data to parent component when clicked*/
const Table = ({ users, targetUser, deleteTarget }) => {
  return (
    <table className="bg-white" width="100%">
      <thead>
        <tr>
          <th>NAME</th>
          <th>
            EMAIL <i className="fas fa-chevron-down "></i>
          </th>
          <th>
            ROLE <i className="fas fa-chevron-down "></i>
          </th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => (
            <tr key={index} className="tableData">
              <td className="pointer" onClick={() => targetUser(user, index)}>
                {user.name}
              </td>
              <td>{user.email}</td>
              <td className="text-capitalize">{user.role}</td>
              <td>
                <img
                  className="pointer"
                  onClick={() => deleteTarget(index)}
                  src={trashIcon}
                  alt="trash"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
