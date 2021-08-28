import React from 'react';

import './Home.scss';
import { CardsData } from './Cards/CardsData';

export const Home: React.FC = ()=> {
    return(
        <div id="home" className="container text-center">
            <div className="row">
                <h1 className="font-weight-bold mt-3">Home</h1>
                <h3 className="mt-1">Welcome to the vaccine app!</h3>
                <h6  className="font-italic mt-3">In here you will find many useful features to help you cope with the covid apocalypse...I mean times!</h6>
            </div>
            <div className="container-fluid">
                <div className="card-deck">
            {CardsData.map((card, index)=>{
                return(
                    <div className="card">
                        <div key={index} className="card-body mt-3">
                            <h3 className="class-title">{card.title}</h3>
                            <h4 className="class-subtitle">{card.subtitle}</h4>
                            <p className="card-text">{card.text}</p>
                            <button className="btn btn-secondary">{card.button}</button>
                        </div>
                    </div>
                    )
                })}</div>
            </div>
        </div>
    )
};