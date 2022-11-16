import React, { Component } from 'react';

import UIGradeTable from './UIGrades';
import GraphicGradeTable from './GraphicsGrades';
import DesignGradeTable from './DesignGrades';


class Grades extends Component {
    state = {
    };

    render() {

        return(
            <div id="accordion">
                <div class="card bg-dark">
                    <div class="card-header text-white" id="headingOne">
                        <h5 class="mb-0">
                            PAST ASSIGNMENTS
                         </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <UIGradeTable></UIGradeTable>
                            <GraphicGradeTable></GraphicGradeTable>
                            <DesignGradeTable></DesignGradeTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}



export default Grades;