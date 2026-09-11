import axios from "axios";

// Backend manzili. Yangi API'ga o'tilganda faqat shu joyni (yoki .env dagi
// VITE_API_URL ni) o'zgartirish kifoya.
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api.ifpc.uz";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const fileUrl = (name) => `${API_BASE_URL}/files/${name}`;
