import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        stage: 1,
        people: [],
    };

    addPersonHandler = (name) => {
        this.setState((prevState) => ({
            people: [...prevState.people, name],
        }));
    };

    removePersonHandler = (personIndex) => {
        this.setState((prevState) => ({
            people: prevState.people.filter(
                (_, index) => index !== personIndex
            ),
        }));
    };

    render() {
        return (
            <>
                <MyContext.Provider
                    value={{
                        state: this.state,
                        addPerson: this.addPersonHandler,
                        removePerson: this.removePersonHandler,
                    }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        );
    }
}

export { MyContext, MyProvider };
