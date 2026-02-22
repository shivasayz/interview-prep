import axios from "axios";

const signupUser = async (payload) => {
  try {
    const response = await axios.post("http://localhost:3000/signup", payload);
    return response;
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    throw err;
  }
};

export { signupUser };
