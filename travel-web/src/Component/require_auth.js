import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {

    // If user not authenticated render out to root

    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/login')
            }
        }

        componentWillUpdate(nextProps, nextState, nextContext) {
            if (!nextProps.authenticated) {
                this.props.history.push('/login')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}