import React from "react";
import OpenSimrs from "../open-simrs.png";
import SosialBlog from "../sosial-blog.png";

const Projects = () => {
    return (
        <div>
            <div class="main">
                <h2>Project</h2>

                <p>
                    You know, I was working on a project when I was a
                    freelancer, but, here are some of my favorite projects.
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
                            <td scope="row" style={{ textAlign: "center" }}>
                                <img
                                    src={OpenSimrs}
                                    alt="Hospital management information system"
                                    style={{ width: "150px" }}
                                />
                                <p></p>
                                <a
                                    href="https://simrs-dokterqu.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Project
                                </a>
                            </td>
                            <td>
                                <h5>OPEN SIMRS</h5>
                                <span>Teach : Laravel, Bootstrap 4</span>
                                <p>
                                    This is my most favorite open source
                                    project. Include API KemKes and JKN
                                </p>
                                <p style={{ color: "red" }}>
                                    processing time : 1 year (continue to be
                                    develop)
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row" style={{ textAlign: "center" }}>
                                <img
                                    src={SosialBlog}
                                    alt="sosial media networks"
                                    style={{ width: "150px" }}
                                />
                                <p>
                                <a
                                    href="https://peaceful-badlands-68305.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Api
                                </a>
                                </p>
                                <a
                                    href="https://suspicious-tesla-1381ac.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Project
                                </a>
      
                            </td>
                            <td>
                                <h5>SOSIAL MEDIA</h5>
                                <span>
                                    Teach : Nodejs (express), MongoDb
                                    (mongoose), ReactJs, Bootstrap 4, herokuapp, netlify
                                </span>
                                <p>
                                    This is a social media project that was
                                    built using the latest MERN technology
                                </p>
                                <p style={{ color: "red" }}>
                                    processing time : 30 day
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
