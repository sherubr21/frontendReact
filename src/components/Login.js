import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/user/login", {
                email: email,
                password: password,
            });

            console.log(res.data);

            if (res.data.message === "3") {
                alert("Email not exists");
            } else if (res.data.message === "1") {
                navigate('/admin');
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred during login");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h2 className="text-center">Login</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="password">Password:&nbsp;</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;