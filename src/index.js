import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function DogBreed() {
    return(
        <span className="dogBreed">Chihuahua</span>
    )
}

function Picture() {
    return(
        <img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t31.0-8/20424318_999361506872425_8835266368886368429_o.jpg?_nc_cat=104&_nc_ht=scontent.fmia1-2.fna&oh=c31f937f39208147301429a0c028cd30&oe=5CE1B806" className="dogPic" alt="Skippy: Chihuahua" />
    )
}

function LifeSpan() {
    return(
        <span className="lifeSpan">Lifespan: 15-20 Yrs.</span>
    )
}

function Dog(){
    return(
        <div className="dogCard">
        <div className="dogContent">
        <DogBreed />
        <Picture />
        <LifeSpan />
        </div>
        <div className="footerColor">
        </div>
        </div>
    );
}




ReactDOM.render(<Dog />, document.getElementById('root'));

