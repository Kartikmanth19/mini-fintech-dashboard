import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            email === "demo@ciferx.com" &&
            password === "ciferx123"
        ) {
            localStorage.setItem("isLoggedIn", "true");

            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Mini Fintech Dashboard</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>

                <p>
                    Demo Credentials:
                    <br />
                    Email: demo@ciferx.com
                    <br />
                    Password: ciferx123
                </p>
            </div>
        </div>
    );
}

export default Login;