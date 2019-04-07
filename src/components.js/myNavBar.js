import React, { Component } from 'react';
import '../myNav.css';

class MyNavBar extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="col0">
                    <ul className="itemContainer">
                        <li className="item">Item0</li>
                        <li className="item">Item0</li>
                        <li className="item">Item0</li>
                        <li className="item">Item0</li>
                        <li className="item">Item0</li>
                        <li className="item">Item0</li>

                    </ul>
                </div>
                <div className="col1">
                    <h1 className="title">Title</h1>
                </div>
            </div>
        );
    }
}

export default MyNavBar;
const NAV_HEIGHT = 70;

const Styles = {
    container: {
        width: '100%',
        height: NAV_HEIGHT,
        background: "#fff000"
    },
    col0: {
        float: "right",
    },
    title: {
        background: "white",
        marginTop: 14,
        marginLeft: 10
    },
    col1: {
        float: "left"
    },
    itemContainer: {
        background: "black",
        color: "white",
        listStyle: 'none',
        listStylePosition: "none",
        listStyleType: "none",
        marginTop: 25,


    },
    item: {
        display: 'inline',
        padding: 15,
        marginRight: 10,
        marginTop: 20,
        background: "#fff555",

    }
}