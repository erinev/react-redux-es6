const createCourse = (course) => {
    return { type: 'CREATE_COURSE', payload: course };
};

export default { createCourse };
