import axios from "axios";

export const API_URL = "http://localhost:5001";

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


