// src/components/admin/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Login() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(state.email, state.password);
      navigate("/admin");
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {err && <div className="text-sm text-red-500 mb-3">{err}</div>}
        <form onSubmit={handle} className="space-y-4">
          <Input label="Email" type="email" placeholder="please enter your email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
          <Input label="Password" type="password" value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} />
          <Button type="submit" className="w-full" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</Button>
        </form>
      </div>
    </div>
  );
}
