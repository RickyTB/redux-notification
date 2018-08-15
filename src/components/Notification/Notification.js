import React, {Component} from 'react';

import classes from './Notification.scss';

const styles = {
    'default': classes.Default,
    'success': classes.Success
};

class Notification extends Component {

    static defaultProps = {
        timeout: 10
    };

    state = {
        progress: 100
    };

    componentDidMount() {
        const frameTime = 1 / 30;
        const reduction = this.state.progress / this.props.timeout;
        const frame = reduction * frameTime;
        this.interval = setInterval(() => {
            this.setState(({progress}) => (
                {progress: progress - frame}
            ), () => {
                if (this.state.progress > 0) return;
                clearInterval(this.interval);
                this.handleRemoval();
            });
        }, frameTime * 1000);
    }

    handleCloseButton = () => {
        this.setState({progress: 0});
    };

    handleRemoval = () => {
        setTimeout(() => this.props.remove(this.props.id), 800);
    };

    render() {
        return (
            <div
                className={[
                    classes.Notification,
                    styles[this.props.type] || styles.success,
                    'animated',
                    this.state.progress > 0 ? 'bounceInLeft' : 'bounceOutLeft'
                ].join(' ')}>
                <button type="button" className="btn" onClick={this.handleCloseButton}>
                    <i className="fa fa-times fa-fw"/>
                </button>
                <div className={classes.Content}>
                    {this.props.text}
                </div>
                <div style={{width: `${this.state.progress}%`}} className={classes.ProgressBar}/>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Notification;