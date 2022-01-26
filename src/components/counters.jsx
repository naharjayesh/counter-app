import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { onReset, onDelete, onIncrement, onDecrement, counters } =
            this.props;

        return (
            <div>
                {/* <button
                    onClick={this.handleAdd}
                    className="btn btn-secondary btn-sm m-2"
                >
                    Add
                </button> */}
                <button
                    onClick={onReset}
                    className="btn btn-secondary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }

    // handleAdd = () => {
    //     console.log("Added");
    // };
}

export default Counters;
