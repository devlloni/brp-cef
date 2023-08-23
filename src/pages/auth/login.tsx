import React, { useState, useRef, useEffect } from "react";
import { Toast } from "primereact/toast";

import "./auth.css";
const Login = () => {
    const myToast: any = useRef(null);
    const [email, setEmail] = useState("dellonilautaro@gmail.com");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [seMando, setSeMando] = useState("");

    useEffect(() => {
        // document.addEventListener("auth:success", handleSuccess);
        // document.addEventListener("auth:error", handleError);
        window.EventManager?.addHandler("auth:test", (data: string) => {
            const { message } = JSON.parse(data);
            setMessage(message);
        });

        window.EventManager?.addHandler("auth:error", (data: string) => {
            handleError(data);
        });
        // return () => {
        //     document.removeEventListener("auth:success", handleSuccess);
        //     document.removeEventListener("auth:error", handleError);
        // };
    }, []);

    const openSignIn = (e: any) => {
        e.preventDefault();
    };

    const openSignUp = (e: any) => {
        e.preventDefault();
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
    };

    const handleSuccess = (customEvent:any) => {
        myToast.current.show({ severity: "success", summary: "B:RP - Ingreso", detail: "Bienvenido nuevamente! Aguarde unos momentos por favor..." });
        mp.trigger("Client:ShowLoading");
    };

    const handleError = (customEvent: any) => {
        // const data: any = JSON.parse(customEvent);
        myToast.current.show({ severity: "error", summary: "B:RP - Ingreso", detail: "No se encontró la cuenta, por favor intenta de nuevo." });
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        mp.trigger("Client:SendLogin", email, password);
    };

    return (
        <>
      <Toast ref={myToast} />
      <div className="login-box">
        <h2>Ingresar <br /> Babilonia Roleplay</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Correo electrónico</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Contraseña</label>
          </div>
          <a href="#" onClick={handleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Iniciar sesión
          </a>
        </form>
        <div className="bg-red">Mensaje: {message}</div>
        <div style={{ backgroundColor: "white" }}>Se mando? {seMando}</div>
      </div>
    </>
    );
};

export default Login;
