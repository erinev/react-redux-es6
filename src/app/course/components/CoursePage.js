import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import courseActions from '../courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add course"
                    className="btn btn-primary"
                    onClick={ this.redirectToAddCoursePage }
                />
                <CourseList courses={ this.props.courses } />
            </div>
        );
    }
}

CoursePage.defaultProps = {
  courses: []
};

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
