import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import courseActions from '../courseActions';
import CourseManagementForm from './CourseManagementForm';

class CourseManagement extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            isSaving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ isSaving: true });
        this.props.actions.saveCourse(this.state.course)
            .then((savedCourse) => {
                this.setState({ isSaving: false });
                toastr.success(`Course '${this.state.course.title}' saved successfully`);
                this.redirectToPage('/courses');
            })
            .catch((errorMessage) => {
                this.setState({ isSaving: false });
                toastr.error(errorMessage);
            });
    }

    redirectToPage(pageUrl) {
        this.context.router.push(pageUrl);
    }

    render() {
        return (
            <div>
                <CourseManagementForm
                    course={ this.state.course }
                    allAuthors={ this.props.authors }
                    onChange={ this.updateCourseState }
                    onSave={ this.saveCourse }
                    isSaving={ this.state.isSaving }
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

CourseManagement.contextTypes = {
    router: PropTypes.object
};

function getCoursesById(courses, courseId) {
    const course = courses.filter((course) => course.id === courseId);
    return course.length ? course[0] : null;
}

function mapStateToProps(state, ownProps) {
    let courseId = ownProps.params.id;
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCoursesById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map((author) => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagement);
