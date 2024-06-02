import { login } from "../service/authService.tsx";

const loginLogic = (email: any, password: any) => {
  const data = {
    email: email,
    password: password,
  };

  if (data.email === "" || data.password === "") {
    alert("Please fill in all fields!");
    return;
  }

  if (!data.email.includes("@")) {
    alert("Invalid email!");
    return;
  }

  return login(data.email, data.password);
};

export default loginLogic;
