import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    static propTypes = {
        caption: PropTypes.string.isRequired,
        initValue: PropTypes.number,
        onUpdate: PropTypes.func
    }
    constructor(props) {
        super(props);
        console.log('enter constructor ' + this.props.caption)
        // this.onClickInctementButton = this.onClickInctementButton.bind(this);
        // this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.state = {
            count: props.initValue
        }
    }
    // 装载过程 constructor 、 componentWillmount 、 render 、 componentDidMount
    componentWillMount() { // render()之前执行函数
        console.log('enter componentWillMount ' + this.props.caption)
        // console.log('注：componentWillMount 服务端/浏览器端执行')
    }
    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption)
        // console.log('注： componentDidMount 浏览器端执行')
    }

    //更新过程 componentWIllReceiveProps 、 shouldComponentUpdate 、 componentWillUpdate 、 render 、 componentDidUpdate
    componentWIllReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log((nextProps.caption !== this.props.caption) || (nextState.count !== this.props.count))
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.props.count)  //输出bool
    }
    componentWillUpdate() {
        console.log('enter componentWillUpdate ' + this.props.caption)
    }
    componentDidUpdate() {
        console.log('enter componentDidUpdate ' + this.props.caption)
    }

    // "+"号点击事件
    onClickInctementButton = () => {
        // this.setState({ count: this.state.count + 1 });
        this.updateCount(true)
    }
    // "-"号点击事件
    onClickDecrementButton = () => {
        // this.setState({ count: this.state.count - 1 });
        this.updateCount(false)
    }
    updateCount = (isIncrement) => {
        const { onUpdate } = this.props;
        const prevousValue = this.state.count;
        const newValue = isIncrement ? prevousValue + 1 : prevousValue - 1;
        console.log(isIncrement, newValue)
        this.setState({ count: newValue });
        onUpdate(newValue, prevousValue); // 传值给父组件
    }
    render() {
        console.log('render ' + this.props.caption)
        const { caption } = this.props;
        const style = {
            margin: 10
        }
        return (
            <div style={style}>
                <button style={style} onClick={this.onClickInctementButton} > + </button>
                <button style={style} onClick={this.onClickDecrementButton} > - </button>
                <span>
                    {caption} count: {this.state.count}
                </span>
            </div>
        )
    }
}
Counter.defaultProps = {
    initValue: 0
}
export default Counter;