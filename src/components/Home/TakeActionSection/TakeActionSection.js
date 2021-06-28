import React from 'react';
import './TakeActionSection.scss'

const TakeActionSection = () => {
    return (
        <section id="take-action" className="d-flex justify-content-center position-relative bg-2">
            <div className="position-absolute top-0 start-50 translate-middle-x"><p className="box-title bg-1">Take Action</p></div>
            <div className="row container py-5">
                <div className="col-sm-6 col-md-6 col-lg-3 mt-5 single-action-div">
                    <h3 className="take-action-title">Learn</h3>
                    <h5 className="take-action-description">Get the facts about this issue and how we’re helping.</h5>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 mt-5 single-action-div">
                    <h3 className="take-action-title">Volunteer</h3>
                    <h5 className="take-action-description">Find out about upcoming events that need your help.</h5>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 mt-5 single-action-div">
                    <h3 className="take-action-title">Share</h3>
                    <h5 className="take-action-description">Let your social media networks know about this important cause.</h5>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 mt-5 single-action-div">
                    <h3 className="take-action-title">Donate</h3>
                    <h5 className="take-action-description">Help us raise money to make a big difference with this issue.</h5>
                </div>

            </div>
        </section>
    );
};

export default TakeActionSection;