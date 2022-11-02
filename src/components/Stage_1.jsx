import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const Stage1 = () => {
    const textInput = useRef();
    const [error, setError] = useState([false, ''])

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value)
        console.log(value)
    };

    const validateInput = (value) => {
        if (!value) {
            setError([true, 'Name field cannot be empty.'])
            return false
        }
        if (value.length <= 2) {
            setError([true, 'Name must be at least 3 characters.'])
            return false
        }

        return true
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add a name"
                        name="player"
                        ref={textInput}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="miami mt-4">
                    Add person
                </Button>
            </Form>
        </>
    );
};

export default Stage1;
