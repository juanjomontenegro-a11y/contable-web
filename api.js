const API = "https://contable-backend.onrender.com";

export async function login(email, password) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  return res.json();
}

export async function getDashboard(token) {
  const res = await fetch(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}