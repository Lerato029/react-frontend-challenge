//=======================================Delete User Test=============================
import { deleteUser } from "../utils";

test("deletes an object from an array", () => {
  //hardcoded array to be manipulated
  let array = [
    { name: "John", email: "john@gmail.com", isAdmin: false },
    { name: "Kim", email: "kim@gmail.com", isAdmin: false },
    { name: "Liz", email: "liz@gmail.com", isAdmin: false },
  ];

  //utility
  let users = deleteUser(array, 2);

  //test
  expect(users[2]).not.toEqual({
    name: "Liz",
    email: "liz@gmail.com",
    isAdmin: false,
  });
});
