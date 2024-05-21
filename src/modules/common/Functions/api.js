import axios from "axios";

export const testFunction = async () => {
  try {
    const res = await axios.get("");
    if (!res.data) console.log("Error Fetching");
    return {data:res.data, success: true};
  } catch (error) {
    console.log("Error", error);
  }
};
