//=======================================Create User Test=============================
import { createUser } from "../utils";

test("adds new object to array", () => {
  //hardcoded array to be manipulated
  let array = [
    { name: "John", email: "john@gmail.com", isAdmin: false },
    { name: "Kim", email: "kim@gmail.com", isAdmin: false },
  ];

  //object to be appended to array
  let newObject = [{ name: "Liz", email: "liz@gmail.com", isAdmin: false }];

  //utility
  let users = createUser(array, newObject);

  //the test
  expect(users[users.length - 1]).toEqual({
    name: "Liz",
    email: "liz@gmail.com",
    isAdmin: false,
  });
});
