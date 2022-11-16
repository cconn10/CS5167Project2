import React, { Component } from 'react';

import UIAssignmentTable from './UIAssignments';
import GraphicAssignmentTable from './GraphicsAssignments';
import DesignAssignmentTable from './DesignAssignments';


class Assignments extends Component {
    state = {
    };

    render() {

        return(
            
            <div id="accordion">
                <div class="card bg-dark">
                    <div class="card-header text-white" id="headingOne">
                        <h5 class="mb-0">
                            UPCOMING ASSIGNMENTS
                         </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <UIAssignmentTable></UIAssignmentTable>
                            <GraphicAssignmentTable></GraphicAssignmentTable>
                            <DesignAssignmentTable></DesignAssignmentTable>
                        </div>
                    </div>
                </div>
            </div>    
        );
    };
}



export default Assignments;