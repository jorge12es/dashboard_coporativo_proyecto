import { useState } from 'react';
import logo from '../assets/jota_letra.png';
import '../styles/Header.css';

export function Header() {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  const intervalo = setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Jorge" className="header-logo" />
        <h1 className="header-title">Jorge</h1>
      </div>

      <div className="header-right">
        {hora}
      </div>
    </header>
  );
}
