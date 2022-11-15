import React, { Component } from 'react';

import data from '../../course-data/data.json';


class Grades extends Component {
    state = {
        UIGrades: this.getUIGrades(),
        GraphicsGrades: [],
        DesignGrades: [],

        UIAssignments: [],
        GraphicsAssignments: [],
        DesignAssignments: []
    };

    getUIGrades(){
        var UIassignments = data.ui.filter( element => element.type === "assignment");
        var UIgrades;

        var date = new Date();
        for (let i = 0; i < UIassignments.length; i++) {
            const element = UIassignments[i];
            const due = new Date(element.end_or_due);
            
            if(due.getTime() < date.getTime()){
                UIgrades = UIgrades + UIassignments.UI;
            }
        }
        const finalGrades = UIgrades;
        console.log(finalGrades);
        return finalGrades;
    }

    /*getGradesData () {
        var UIassignments = data.filter( element => element.ui.type == "assignment");
        var UIgrades;
        var UIToDo;

        var date = new Date();
        for (let i = 0; i < UIassignments.ui.length; i++) {
            const element = UIassignments.ui[i];
            const due = new Date(element);
            
            if(due.getTime() < date.getTime()){
                UIgrades = UIgrades + UIassignments.UI;
            }
            else{
                UIToDo = UIToDo + UIassignments.ui;
            }
        }

        this.state.UIGrades =  UIgrades;
        this.state.UIAssignments = UIToDo;

        var GraphicAssignments = data.filter( element => element.computer_graphics.type == "assignment");
        var Graphicgrades;
        var GraphicToDo;

        for (let i = 0; i < GraphicAssignments.computer_graphics.length; i++) {
            const element = GraphicAssignments.computer_graphics[i];
            const due = new Date(element);
            
            if(due.getTime() < date.getTime()){
                Graphicgrades = Graphicgrades + GraphicAssignments.computer_graphics;
            }
            else{
                GraphicToDo = GraphicToDo + GraphicAssignments.computer_graphics;
            }
        }

        this.state.GraphicsGrades = Graphicgrades;
        this.state.GraphicsAssignments = GraphicToDo;

        var DesignAssignments = data.filter( element => element.senior_design.type == "assignment");
        var DesignGrades;
        var DesignToDo;

        for (let i = 0; i < DesignAssignments.senior_design.length; i++) {
            const element = DesignAssignments.senior_design[i];
            const due = new Date(element);
            
            if(due.getTime() < date.getTime()){
                DesignGrades = DesignGrades + DesignAssignments.senior_design;
            }
            else{
                DesignToDo = DesignToDo + DesignAssignments.senior_design;
            }
        }

        this.state.DesignGrades = DesignGrades;
        this.state.DesignAssignments = DesignToDo;

    };*/

    /*DisplayAssignments = ({title, classes, points, due}) => {
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
                                            <th scope="row"><a href='#'>{title}</a></th>
                                            <td>{classes}</td>
                                            <td>{points}</td>
                                            <td>{due}</td>
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
                                            <th scope="row"><a href='#'>{title}</a></th>
                                            <td>{classes}</td>
                                            <td>{points}</td>
                                            <td>{due}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        );
        

    };*/

    createTable(title, classes, points, due){
        return(
            <div class="grades">
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
                                        <th scope="row"><a href='#'>{title}</a></th>
                                        <td>{classes}</td>
                                        <td>{points}</td>
                                        <td>{due}</td>
                                    </tr>
                                    
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        );

    }
    render() {

        return(
            <div>
            {(() => {
                for(let i = 0; i < this.state.UIGrades.length; i++){
                    this.createTable(this.state.UIGrades[i].title, "ui", this.state.UIGrades[i].points, this.state.UIGrades[i].end_or_due);
                }
            })}
            </div>
        );
    };
}



export default Grades;