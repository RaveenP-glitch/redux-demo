import React from "react";

class CoursePage extends React.Component {
    render() {
        return (
            <form action="">
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default CoursePage;