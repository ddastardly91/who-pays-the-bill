import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { MyContext } from "../context";

const Stage1 = () => {
   const context = useContext(MyContext);
   const textInput = useRef();
   const [error, setError] = useState([false, ""]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const value = textInput.current.value;
      const validate = validateInput(value);

      if (validate) {
         setError([false, ""]);
         context.addPerson(value);
         textInput.current.value = "";
      }
   };

   const validateInput = (value) => {
      if (!value) {
         setError([true, "Name field cannot be empty."]);
         return false;
      }
      if (value.length <= 2) {
         setError([true, "Name must be at least 3 characters."]);
         return false;
      }

      return true;
   };

   console.log(context.state);
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
            {error[0] && (
               <Alert variant="warning" className="mt-2 p-2">
                  {error[1]}
               </Alert>
            )}
            <Button variant="primary" type="submit" className="miami mt-4">
               Add person
            </Button>

            {context.state.people && context.state.people.length > 0 ? (
               <>
                  <hr />
                  <div>
                     <ul className="list-group">
                        {context.state.people.map((person, index) => {
                           return (
                              <li
                                 key={index}
                                 className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                              >
                                 {person}
                                 <span
                                    className="badge badge-danger"
                                    onClick={() => context.removePerson(index)}
                                 >
                                    X
                                 </span>
                              </li>
                           );
                        })}
                     </ul>
                     <div
                        className="action_button"
                        onClick={() => alert("Stage 2")}
                     >
                        NEXT
                     </div>
                  </div>
               </>
            ) : null}
         </Form>
      </>
   );
};

export default Stage1;
