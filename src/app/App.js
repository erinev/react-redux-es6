import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/components/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header isPageLoading={ this.props.isPageLoading } />
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    isPageLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        isPageLoading: state.numberOfAjaxRequestsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
