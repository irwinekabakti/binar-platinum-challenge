import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const Errors = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const toggleHandler = () => {
    setShow(!show);
  };

  if (show) {
    return (
      <Alert
        className="w-100"
        variant="danger"
        onClose={toggleHandler}
        dismissible>
        <Alert.Heading className="fw-bold mt-3 text-center">
          Ups! You got an error!
        </Alert.Heading>
        <p className="mt-2">
          Change your route and try again. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
          mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptates, distinctio consectetur!
          Porro, eligendi facilis? Sequi ea repellat voluptatibus aperiam,
          reiciendis laboriosam eos, id incidunt consequatur nulla debitis
          facilis temporibus. Animi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex, nemo magnam pariatur laudantium ullam ab fugit
          consectetur voluptates non optio nesciunt, nobis perspiciatis culpa
          tenetur eum quae reiciendis error dolorem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Esse perferendis porro aut dolores quam
          tempora architecto repellat harum quibusdam repudiandae eveniet
          accusantium culpa, atque officiis omnis dolorum nostrum suscipit.
          Consequatur, cumque nam possimus quasi voluptas maxime fuga
          praesentium animi incidunt, vitae aspernatur necessitatibus blanditiis
          iure ut id iusto quis labore. Quia quidem facilis doloremque quasi hic
          exercitationem, deserunt aliquam veniam cumque voluptatibus
          praesentium, debitis necessitatibus quo dolore explicabo aspernatur
          obcaecati optio odio minima incidunt commodi eum. Commodi alias
          provident voluptates, aliquid saepe fugiat repudiandae ab corrupti!
          Sequi voluptatum, ipsa aliquam suscipit totam quis est nisi ducimus
          culpa molestiae aliquid perferendis!
        </p>
      </Alert>
    );
  }
  return (
    <Fragment>
      <div className="container">
        <div className="d-flex justify-content-between">
          <Button
            onClick={toggleHandler}
            className="justify-content-start w-25">
            Show Alert <FaEnvelopeOpen className="ms-2" />
          </Button>
          <Button
            variant="success"
            className="justify-content-end w-25"
            onClick={backToHome}>
            <FaLongArrowAltLeft /> Back to Home
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Errors;
