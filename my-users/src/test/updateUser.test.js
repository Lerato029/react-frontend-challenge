//=======================================Update User Test=============================
import { updateUser } from "../utils";

test("updates an object in an array", () => {
  let array = [
    { name: "John", email: "john@gmail.com", isAdmin: false },
    { name: "Kim", email: "kim@gmail.com", isAdmin: false },
    { name: "Liz", email: "liz@gmail.com", isAdmin: false },
  ];
  
  //object to be appended to array
  let updatedUser = { name: "Liz", email: "liz@gmail.com", isAdmin: true }

  //utility
  let users = updateUser(array, 2, updatedUser);

  //test
  expect(users[2].isAdmin).toEqual(true);
});
