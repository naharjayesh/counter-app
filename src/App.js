import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// class App extends Component() {
//     state = {
//         counters: [
//             { id: 1, value: 0 },
//             { id: 2, value: 10 },
//             { id: 3, value: 6 },
//             { id: 4, value: -6 },
//         ],
//     };

//     handleIncrement = (counter) => {
//         const counters = [...this.state.counters];
//         const index = counters.indexOf(counter);
//         counters[index] = { ...counter };
//         counters[index].value++;
//         this.setState({ counters });
//     };

//     handleDecrement = () => {
//         const counters = [...this.state.counters];
//         const index = counters.indexOf(counter);
//         counters[index] = { ...counter };
//         counters[index].value--;
//         this.setState({ counters });
//     };

//     handleDelete = (counterId) => {
//         const counters = this.state.counters.filter((c) => c.id != counterId);
//         this.setState({ counters });
//     };

//     handleReset = () => {
//         const counters = this.state.counters.map((c) => {
//             c.value = 0;
//             return c;
//         });
//         this.setState({ counters });
//     };

//     return (
//         <React.Fragment>
//             <NavBar />
//             <main className="container-fluid">
//                 <Counters
//                     counters={this.state.counters}
//                     onReset={this.handleReset}
//                     onIncrement={this.handleIncrement}
//                     onDelete={this.handleDelete}
//                     onDecrement={this.handleDecrement}
//                 />
//             </main>
//         </React.Fragment>
//     );
// }

// export default App;

class App extends Component {
    state = {
        counters: [
            { id: 1, value: -42 },
            { id: 2, value: 10 },
            { id: 3, value: 6 },
            { id: 4, value: 3 },
        ],
    };

    constructor() {
        super();
        // console.log("App-constructor");
    }

    componentDidMount() {}

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id != counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        let sumOfCounters = 0;
        let mappingObject;
        mappingObject = this.state.counters.map((mappingObject, index) => {
            sumOfCounters +=
                this.state.counters[index].value > 0
                    ? this.state.counters[index].value
                    : 0;
        });
        // console.log(sumOfCounters);
        return (
            <React.Fragment>
                <NavBar totalCounters={sumOfCounters} />
                <main className="container-fluid">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
