import React from 'react'

import {useParams} from 'react-router-dom'

const MyProject = () => {
    const { id } = useParams();
    return (
        <div className="content1">
            <h2>{id}</h2>
        </div>
    )
}

export default MyProject
