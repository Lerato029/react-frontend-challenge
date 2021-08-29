//==========================================Create New User
export const createUser = (userArray, newUser) => {
  let newArray = [...userArray, ...newUser];
  return newArray;
};

//==========================================Update A User
export const updateUser = (userArray, index, user) => {
  userArray[index] = user;
  return userArray;
};

//==========================================Delete A User
export const deleteUser = (userArray, index) => {
  userArray.splice(index, 1);
  return userArray;
};
