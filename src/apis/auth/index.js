import axios from "@/config/axiosConfig";
export const signupRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post("/users/signup", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const signinRequest = async ({ email, password }) => {
  try {
    const response = await axios.post("/users/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
