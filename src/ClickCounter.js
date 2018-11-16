import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props); //super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
        this.state = { count: 0 }
    }
    onClickButton() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>点击按钮</button>
                <div>
                    Count: {this.state.count}
                </div>
            </div>
        )
    }
}

export default ClickCounter;