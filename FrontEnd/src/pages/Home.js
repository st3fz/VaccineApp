import React from 'react';

export default function Home() {
    return(
        <div className="container home">  
            <div className="row d-flex mx-auto">
                <h1>Home</h1>
                <h3>Welcome to the vaccine app!</h3>
                <h5>In here you will find many useful features</h5>
            </div>
            <div className="row">
                <h2>Features: </h2>
                <div class="card bg-info col-4">
                    <div class="card-body">
                        <h3 class="card-title">Information Portal</h3>
                        <h4 class="card-subtitle mb-2">Latest covid information for you</h4>
                        <h5 class="card-text">We all know it is hard to keep in touch with the latest covid news. Fret not! The covid informations portal was designed so that busy workers and students can keep tabs with the latest news without listening to an hour's news or scrolling up and down yahoo/ google or other news websites.</h5>
                        <button class="btn btn-light">Read up on the Information Portal now >></button>
                    </div>
                </div>
                <div class="card bg-info col-4">
                    <div class="card-body">
                        <h3 class="card-title">Forum</h3>
                        <h4 class="card-subtitle mb-2">Hear and be heard!</h4>
                        <h5 class="card-text">We know some of the concerns you may have about vaccination or some of the help you may need coping during this covid times. Therefore, we have come up with a forums page where you can interact with others who got the same vaccinations as you and hear from experts as well. You can interact with the posts by adding comments or up and downvoting them.</h5>
                        <button class="btn btn-light">Visit the Forum now >></button>
                    </div>
                </div>
                <div class="card bg-info col-4">
                    <div class="card-body">
                        <h3 class="card-title">Chat</h3>
                        <h4 class="card-subtitle mb-2">Ask questions in the active chat</h4>
                        <h5 class="card-text">We know that sometimes you want to chat with others about being vaccinated while you are sitting at the community centre, waiting for your turn to be vaccinated. Therefore we have created an intereactive live-chat where you can talk to others for more urgent matters or when you are on the go.</h5>
                        <button class="btn btn-light">Engage in the Chat now >></button>
                    </div>
                </div>
            </div>
        </div>
    )
};