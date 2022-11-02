import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyContext = React.createContext();

class MyProvider extends Component {
   state = {
      stage: 1,
      people: [],
      result: "",
   };

   addPersonHandler = (name) => {
      this.setState((prevState) => ({
         people: [...prevState.people, name],
      }));
   };

   removePersonHandler = (personIndex) => {
      this.setState((prevState) => ({
         people: prevState.people.filter((_, index) => index !== personIndex),
      }));
   };

   nextHandler = () => {
      const { people } = this.state;

      if (people.length < 2) {
         toast.error("You need at least 2 people", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
         });
      } else {
         this.setState(
            {
               stage: 2,
            },
            () =>
               setTimeout(() => {
                  this.generateLooser();
               }, 2000)
         );
      }
   };

   generateLooser = () => {
      const { people } = this.state;
      this.setState({
         result: people[Math.floor(Math.random() * people.length)],
      });
   };

   resetState = () => {
      this.setState({
         stage: 1,
         people: [],
         result: "",
      });
   };

   render() {
      return (
         <>
            <MyContext.Provider
               value={{
                  state: this.state,
                  addPerson: this.addPersonHandler,
                  removePerson: this.removePersonHandler,
                  next: this.nextHandler,
                  getNewLooser: this.generateLooser,
                  resetState: this.resetState,
               }}
            >
               {this.props.children}
            </MyContext.Provider>
            <ToastContainer />
         </>
      );
   }
}

export { MyContext, MyProvider };
