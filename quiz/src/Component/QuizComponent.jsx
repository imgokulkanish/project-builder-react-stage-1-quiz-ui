import React, { Component } from 'react'

export default class quizComponent extends Component {
    render() {
        return (
            <div>
                <div className="quiz-component">
                    <div className="white-container">
                        <div className="question-container">
                            <h1>Question</h1>
                            <div>
                                <p>4 0f 15</p>
                                <p>Which is the Only Mammal that can't Jump?</p>
                            </div>
                        </div>
                        <div className="options_button">
                            <button>Dog</button>
                            <button>Goat</button>
                            <button>Elephant</button>
                            <button>Lion</button>
                        </div>
                        <div className="submit-panel">
                            <button id="previous">Previous</button>
                            <button id="next">Next</button>
                            <button id="quit">Quit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
