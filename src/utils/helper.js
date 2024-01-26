export const setUserToLocalStorage = (user) => {
  console.log(user, "users");
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
export const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    return userData;
  }
};
