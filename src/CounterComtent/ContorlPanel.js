import React, { Component } from 'react';
import Counter from './Counter';
import styles from "./CountorlPanel.less";

// react 中 在 ES6 中新增了class，绑定的方法需要绑定 this，如果是箭头函数就不需要绑定 this

class ContorlPanel extends Component {
    constructor(props) {
        super(props);
        console.log(super(props), '0000000000')
        // this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValue = [0, 10, 20]
        const initSum = this.initValue.reduce((a, b) => a + b, 0); // JavaScript （Node.js）
        this.state = {
            sum: initSum
        }
    }
    onCounterUpdate = (newValue, previousValue) => {
        const { sum } = this.state
        const valueChange = newValue - previousValue;
        this.setState({ sum: sum + valueChange });
    }
    render() {
        console.log('enter ContorlPanel render')
        const { initValue } = this;
        return (
            <div className={styles.content} style={{ width: '300px', margin: ' 0 auto' }}>
                <Counter
                    caption='Frist'
                    onUpdate={this.onCounterUpdate}
                />
                <Counter
                    caption='Second'
                    initValue={initValue[1]}
                    onUpdate={this.onCounterUpdate}
                />
                <Counter
                    caption='Third'
                    initValue={initValue[2]}
                    onUpdate={this.onCounterUpdate}
                />
                {/* <button onClick={() => this.forceUpdate()}>
                    Click me to re-render!
                </button> */}
                <div>
                    Total count: {this.state.sum}
                </div>
            </div>
        )
    }
}

export default ContorlPanel;