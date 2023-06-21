import { Modal } from "react-bootstrap";

export default function Cart({ show, handleClose }) {
    let style = {
        fontSize: "20px",
        width: "80%",
        textAlign: "center",
        margin: "0 auto",
        padding: "20px",
        color: "#d48502",
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={style}>
                        All the data in this website is fake, it's just a store
                        template. Enjoy browsing! By FIEXX56
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
