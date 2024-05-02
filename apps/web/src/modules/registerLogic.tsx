import {register} from '../service/authService.tsx';

const registerLogic = (email: any, password: any, confirmPassword: any) => {

    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    if (data.email === "" || data.password === "" || data.confirmPassword === "") {
      alert("Please fill in all fields!");
      return;
    }

    if (!data.email.includes("@")) {
      alert("Invalid email!");
      return;
    }

    if (data.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // // Password security check
    // const hasUpperCase = /[A-Z]/.test(data.password);x
    // const hasLowerCase = /[a-z]/.test(data.password);
    // const hasNumber = /[0-9]/.test(data.password);
    // const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(data.password);

    // if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    //   alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!");
    //   return;
    // }

    return (
      register(data.email, data.password)
    );
  }
  
  export default registerLogic;