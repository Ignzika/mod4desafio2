// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Stack from "react-bootstrap/Stack";

const SocialButton = (props) => {
  return (
    <>
      {
        <Stack className="pb-5 ">
          <div>
            <h2 className="fs-5 fst-italic">Registrate con tus redes</h2>
          </div>
          <Stack direction="horizontal" gap={3}>
            {props.icons.map((icon, i) => (
              <a
                href={`http://${icon}.com`}
                target="_blank"
                rel="noopenernoreferrer"
                className="p-2 fs-3 border border-dark rounded-circle border-3"
              >
                <i
                  key={i}
                  className={`fa-brands fa-${icon} fa-xl`}
                  style={{ color: "#426fbd" }}
                ></i>

                {/*  estos me la ganaron.... 
              <FontAwesomeIcon key={i} icon={['fab',` '${icon}' `]} />

<FontAwesomeIcon key ={i} icon={`{fa${icon}}`} size="2xl" style={{ color: "#426fbd" }} /> */}
              </a>
            ))}
          </Stack>
        </Stack>
      }
    </>
  );
};

export default SocialButton;
