import React, { useEffect, useState } from 'react';
import {projectsData} from '../data/projectsData';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

const MyProject = () => {
    const { id } = useParams();
    const [resultPost, setResultPost] = useState({ mySearchPost1: projectsData })

    useEffect(() => {
        const fiterResult = projectsData.filter(e => e.id === parseInt(id));

        setResultPost({ mySearchPost1: fiterResult })

        console.log(fiterResult)
    
    }, [id])
    
    return (
        <div className="content1">
            <img src="./assets/img/projet-2.jpg" alt='{e.title}' />
            {
                resultPost.mySearchPost1.map(e =>
                    <div>
                        <h1 style={{ color: "whitesmoke" }}>{e.title}</h1>
                        <p style={{ color: "whitesmoke" }}>{e.infos}</p>
                        <p style={{ color: "whitesmoke" }}>{e.link}</p>
                        {
                            e.img.map(element =>
                                <div>
                                    <img src="./assets/img/projet-2.jpg" alt={e.title} />
                                    <p style={{ color: "whitesmoke" }}>{ element}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default MyProject
