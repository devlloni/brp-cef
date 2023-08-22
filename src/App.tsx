import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import "./App.css";
declare const mp: any;

const App = () => {
  const myToast: any = useRef(null);
  const [email, setEmail] = useState("dellonilautaro@gmail.com");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [seMando, setSeMando] = useState("");

  useEffect(() => {
    document.addEventListener("auth:success", (customEvent: any) => {
      setSeMando("Siii se mando");
    });
    return () => {
      document.removeEventListener("auth:success", (ce: any) => { setSeMando("Siii se mando"); });
    };
  }, [document]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    mp.trigger("Client:SendLogin", email, password);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
  };

  const handleSuccess = () => {
    myToast.current.show({ severity: "success", summary: "B:RP - Ingreso", detail: "Bienvenido nuevamente! Aguarde unos momentos por favor..." });
  };

  return (
    <>
      <Toast ref={myToast} position="center"/>
      <div className="login-box">
        <h2>BabiloniaRoleplay</h2>
        <p >Bienvenido nuevamente a Babilonia Roleplay, la experiencia definitiva del rol en español.
          Si ya cuenta con una sesión registrada por favor ingrese con sus datos correspondientes,
          de lo contrario, puede crearse una nueva cuenta clickeando en registrarme.</p>
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

export default App;
