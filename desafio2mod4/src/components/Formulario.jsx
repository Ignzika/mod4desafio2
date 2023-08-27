import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ErrorAlert from "./Alert";
// import PhoneInput from "./Annoying";

const LogginForm = () => {
  let [modalShow, setModalShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkpassword: "",
  });

  const [customAlert, setCustomAlert] = useState({
    title: "",
    body: "",
    color: "",
    bgColor: "",
  });

  let [qwerty, setQwerty] = useState("");

  const handleNotData = (e) => {
    e.preventDefault();

    const { name, email, password, checkpassword } = formData;

    setCustomAlert({ title: "", body: "", bgColor: "" });

    if (!name || !email || !password || !checkpassword) {
      setCustomAlert({
        title: "Revisa los datos ingresados ",
        body: "No has ingresado 1 o mas datos requeridos.",

        bgColor: "bg-danger",
      });
    } else {
      setCustomAlert({
        title: "Todos los datos han sido correctamente ingresados felicidades ",
        body: "Espere a su correo de confirmacion",

        bgColor: "bg-success",
      });
    }

    if (password !== checkpassword) {
      setCustomAlert({
        title: "Contraseñas no son identicas",
        body: "Las contraseñas ingresadas no coinciden, por favor intentelo nuevamente",

        bgColor: "bg-warning",
      });
    }

    setFormData({ name: "", mail: "", password: "", checkpassword: "" });
  };

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <span className="mb-3"> ó </span>

      <ErrorAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        infoAlert={customAlert}
      />

      <Form className="mt-2" onSubmit={handleNotData}>
        <Form.Group controlId="inlineFormInputName">
          <Form.Label>Ingresa tu nombre completo </Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={formData.name}
            placeholder="Nombre completo"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingresa tu correo </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            placeholder="Correo Electronico"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="Contraseña"
            className="mb-3"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duplicatePswrd">
          <Form.Label>Repite la contraseña</Form.Label>
          <Form.Control
            type="password"
            name="checkpassword"
            value={formData.checkpassword}
            placeholder="Repite la Contraseña"
            className="mb-3"
            onChange={handleData}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="success"
            onClick={() => setModalShow(true)}
            size="lg"
            type="submit"
          >
            Registrate
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LogginForm;
