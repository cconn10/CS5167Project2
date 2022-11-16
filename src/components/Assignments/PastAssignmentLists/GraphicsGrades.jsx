import React from 'react';
import JsonData from '../data/graphicGrades.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

function JsonDataDisplay(){
    const DisplayData = JsonData.grades.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.title}</td>
                    <td>{<button type="button" class="btn btn-light"><FontAwesomeIcon className='icon-assignment' icon={ faDownload } /></button>}</td>
                    <td>{info.end_or_due}</td>
                    <td>{info.points}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <div id="accordion">
                <div class="card">
                    <div class="card-header bg-warning text-white" id="headingOne">
                        <h5 class="mb-0">
                            GRAPHIC DESIGN:
                         </h5>
                         <h3>
                            70%
                         </h3>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Assignment</th>
                                        <th scope="col">Download Sumbission</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DisplayData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default JsonDataDisplay;