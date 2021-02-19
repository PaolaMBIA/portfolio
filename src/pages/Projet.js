import React from 'react';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Project from '../components/Project';

export const Projet1 = () => {
    return (
        <>
            <Nav />
            <main>
            <div className="project">
                <Project projectNumber={0} />
                <Buttons right={'/projet-2'} />
                </div>
                </main>
        </>
    )
}

export const Projet2 = () => {
    return (
        <main>
            <Nav />
            <div className="project">
                <Project projectNumber={1} />
                <Buttons left={'/projet-1'} right={'/projet-3'}/>
            </div>
        </main>
    )
}

export const Projet3 = () => {
    return (
        <main>
            <Nav />
            <div className="project">
                <Project projectNumber={2} />
                <Buttons left={'/projet-2'} right={'/projet-4'}/>

            </div>
        </main>
    )
}

export const Projet4 = () => {
    return (
        <main>
            <Nav />
            <div className="project">
                <Project projectNumber={3} />
                <Buttons left={'/projet-3'} right={'/projet-5'}/>
            </div>
        </main>
    )
}

export const Projet5 = () => {
    return (
        <main>
            <Nav />
            <div className="project"> 
                <Project projectNumber={4} />
                <Buttons left={'/projet-4'} />
            </div>
        </main>
    )
}