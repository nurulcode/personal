import React from "react";

const Sidebar = (props) => {
    return (
        <div>
            <div className="sidebar">
                <div className="about">
                    <img src={props.nurul} alt="Nurul Hidayat" />
                    <p>
                        I was born at my grandma's house. Also, grew up there.
                        Programming since high school. Already completed many
                        projects. Sublime Text, Stack Overflow, and DevTools are
                        my beloved friends. I love using the Service Pattern
                        design and BEM methodology. Open source was pleasant; my
                        most favorite projects are <a href="#">OPEN SIMRS</a>. I
                        love blogging, teaching, and cycling.
                    </p>
                </div>

                <div className="touch">
                    <h3>Get in touch</h3>
                    <p>You can follow me on several of these platforms:</p>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/nurulcode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://gitlab.com/nurulcode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitLab
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
