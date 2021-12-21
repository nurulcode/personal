import React from "react";
import OpenSIMRS from "../open-simrs.png";

const Projects = () => {
    return (
        <div>
            <div class="main">
                <h2>Project</h2>

                <p>
                    You know, I was working on a project when I was a freelancer, but, here are some of my favorite projects.
                </p>
                <table class="table table-border">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" style={{  textAlign: 'center' }}>
                                <img src={OpenSIMRS} alt="Open SIIMRS" style={{width: "150px"}}/>
                                <p></p>
                                <a href="https://simrs-dokterqu.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                            </td>
                            <td>
                                <h5>OPEN SIMRS</h5>
                                <span>Teach : Laravel, Bootstrap 4</span>
                                <p>
                                    This is my most favorite open source
                                    project. Include API KemKes and JKN
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;
