import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import courseActions from '../courseActions';
import CourseManagementForm from './CourseManagementForm';

class CourseManagement extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <CourseManagementForm
                    course={ this.state.course }
                    allAuthors={ this.props.authors }
                    onChange={ this.updateCourseState }
                    onSave={ this.saveCourse }
                    errors={ this.state.errors }
                />
            </div>
        );
    }
}

CourseManagement.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

CourseManagement.defaultProps = {
    course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
};

function mapStateToProps(state, ownProps) {
    const authorsFormattedForDropdown = state.authors.map((author) => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagement);
