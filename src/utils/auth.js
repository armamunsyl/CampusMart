const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Login failed");
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_BASE}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Logout failed");
  }

  return response.json();
};

export const getAuthStatus = async () => {
  const response = await fetch(`${API_BASE}/auth/status`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    return { loggedIn: false, email: null };
  }

  return response.json();
};
