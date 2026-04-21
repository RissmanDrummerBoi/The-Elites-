const API_BASE = "http://127.0.0.1:8000";

export const api = {
  login: async (student_number: string, password: string) => {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ student_number, password }),
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
  },

  register: async (data: {
    full_name: string;
    student_number: string;
    email: string;
    residence: string;
    room_number: string;
    password: string;
    role: string;
  }) => {
    const res = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Registration failed");
    return res.json();
  },

  getMe: async (token: string) => {
    const res = await fetch(`${API_BASE}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to get user");
    return res.json();
  },

  submitComplaint: async (formData: FormData, token: string) => {
    const res = await fetch(`${API_BASE}/complaints/`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to submit complaint");
    return res.json();
  },

  getMyComplaints: async (token: string) => {
    const res = await fetch(`${API_BASE}/complaints/my`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch complaints");
    return res.json();
  },

  getAllComplaints: async (token: string) => {
    const res = await fetch(`${API_BASE}/complaints/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch complaints");
    return res.json();
  },

  updateComplaintStatus: async (id: string, status: string, token: string) => {
    const res = await fetch(`${API_BASE}/complaints/${id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Failed to update status");
    return res.json();
  },
};