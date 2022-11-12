import React, { Component } from 'react';


class Grades extends Component {
    render() {

        return(
            <div class="grades">
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Upcoming Assignments
                        </button>
                         </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                        <table class="table table-bordered table-hover">
                                <title>Upcoming Assignments</title>
                                    <thead>
                                        <tr>
                                            <th scope="col">Assignment</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><a>first assignment</a></th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Intro</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
             </div>
             <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Past Assignments
                        </button>
                         </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                        <table class="table table-bordered table-hover">
                                <title>Past Assignments</title>
                                    <thead>
                                        <tr>
                                            <th scope="col">Assignment</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><a>first assignment</a></th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Intro</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        );
    };
}

export default Grades;