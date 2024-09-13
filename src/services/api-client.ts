import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e811f9e2a7ad4eeb9c6a82ad29473ec9",
  },
});
