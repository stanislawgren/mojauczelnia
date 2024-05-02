import axios from "axios";

export const register = async (email: any, password: any) => {
  const data = {
    email: email,
    password: password,
  };

  await axios.post("http://localhost:3000/register", data)
    .then((response: any) => {
      if (response.data) {
        window.location.href = "/login";
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const login = async (email: any, password: any) => {
  const data = {
    email: email,
    password: password,
  };

  await axios.post("http://localhost:3000/login", data)
    .then((response: any) => {
      if (response.data) {
        window.location.href = "/";
      } else {
        alert("Invalid password");
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
};
