import axios from "axios";

const API_URL = "http://localhost:8000";

export const uploadFile = (file) => {
  let formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_URL}/upload`, formData);
};

export const askQuestion = (question) => {
  let formData = new FormData();
  formData.append("question", question);
  return axios.post(`${API_URL}/ask`, formData);
};

export const summarizeDoc = () => {
  return axios.post(`${API_URL}/summarize`);
};