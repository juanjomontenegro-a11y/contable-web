import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [token, setToken] = useState(null);

  if (!token) return <Login onLogin={setToken} />;

  return <Dashboard token={token} />;
}