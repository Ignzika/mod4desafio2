import LogginForm from "./Formulario";
import Container from "react-bootstrap/Container";
import SocialButton from "./SocialButton";
import PhoneInput from "./Annoying";

function RegisterBox() {
  let social = ["facebook", "twitter", "instagram", "linkedin", "github"];

  return (
    <>
      <Container
        className="col-sm-6 col-md-8 border border-5 rounded-3 bg-light border-light fs-6 p-5 "
        style={{ width: "30rem" }}
      >
        <SocialButton icons={social} />

        <LogginForm />

        <span>esto es opcional</span>
        <PhoneInput />
        
      </Container>
    </>
  );
}

export default RegisterBox;
