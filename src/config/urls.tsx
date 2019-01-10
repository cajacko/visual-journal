import isDev from "./isDev";

export const API = isDev
  ? "http://localhost:3000"
  : "https://us-central1-visual-journal-514e4.cloudfunctions.net";
