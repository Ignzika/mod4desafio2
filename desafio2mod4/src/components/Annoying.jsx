import React, { useState } from "react";

const PhoneInput = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  const handleChange = (event) => {
    setNumeroAleatorio(event.target.value);
  };

  const handleGenerateNumber = () => {
    setNumeroAleatorio(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        id="numero-aleatorio"
        min="1000000009"
        max="9999999999"
        value={numeroAleatorio}
        onChange={handleChange}
      />
      <p id="numero-aleatorio-mostrado">
        + {numeroAleatorio}
      </p>
 
      <button id="generar-numero-ingresado" onClick={handleGenerateNumber}>
        Ingresa tu telefono
      </button>
    </div>
  );
};

export default PhoneInput;
