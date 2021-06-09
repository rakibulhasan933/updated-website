import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Project.css';
import React from 'react';

const Project = ({ project }) => {
    const { projectName, img1, liveWebsite, github, id, technology } = project;
    return (
        <div className="mt-5">
            <div className="row single-project d-flex align-items-center">
                <div className="col-md-6">
                    <div id={`carouselExampleIndicators${id}`} className="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target={`#carouselExampleIndicators${id}`} data-slide-to="0" class="active"></li>
                            <li data-target={`#carouselExampleIndicators${id}`} data-slide-to="1"></li>
                            <li data-target={`#carouselExampleIndicators${id}`} data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src={img1} alt="First slide" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 style={{ color: '#1a3d5d', fontWeight: '700' }}>{projectName}</h2>
                    <h4 style={{ color: '#1a3d5d', fontWeight: '700' }} className="mt-2 mb-2">Technology</h4>
                    <div>
                        {
                            technology.map(tech => <h5 className="d-inline"><div className="mr-2 mb-1 p-2" variant="secondary">{tech}</div></h5>)
                        }
                    </div>
                    <div className="project-footer">
                        <a className="p-4" href={liveWebsite} target="blank"><button className="custom-btn mr-3 mt-3"><FontAwesomeIcon icon={faGlobe} /> &nbsp;Live</button></a>
                        <a className="p-4" href={github} target="blank"><button className="github-btn"><FontAwesomeIcon icon={['fab', 'github']} /> &nbsp;Github</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;