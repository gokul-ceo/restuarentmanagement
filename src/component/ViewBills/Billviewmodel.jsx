import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
function Billviewmodel(props) {
  console.log("Props value of billno:", props.billno);
  useEffect(() => {
    if (
      props.billno === undefined ||
      props.billno === null ||
      props.billno === "" ||
      props.show === false
    ) {
    } else {
      fetch(server_url + `/admin/Menu/billdata/${props.billno}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Model requested this:", data);
        });
    }
  }, [props.billno]);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Selected - {props.billno}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Billviewmodel;
