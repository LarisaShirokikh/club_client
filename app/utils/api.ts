import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const getFiles = async () => {
  try {
    const response = await axios.get<File[]>(`${API_URL}/files`);
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
};

type File = {
  id: number;
  title: string;
  content: string;
};
