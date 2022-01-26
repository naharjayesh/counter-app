import React, { Component } from "react";

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: ["tag1", "tag2", "tag3"],
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        let { value: value } = this.props.counter;
        this.props.counter.value = value < 1 ? 0 : value;
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm mx-2"
                >
                    +
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm mx-2 decrementBtn"
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm mx-2"
                >
                    Delete
                </button>
                {/* {this.renderTags()} */}
            </div>
        );
    }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // };

    // handleDecrement = () => {
    //     this.setState({ value: this.state.value - 1 });
    // };

    // renderTags() {
    //     return (
    //         <ul>
    //             {this.state.tags.map((tag) => (
    //                 <li key={tag}>{tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value <= 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        let { value: value } = this.props.counter;
        // this.props.counter.value = value < 1 ? 0 : value;
        return value < 10 ? "0" + value : value;
    }
}

export default Counter;
