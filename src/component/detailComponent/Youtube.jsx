import React from 'react'
import PropTypes from "prop-types";

export default function Youtube({ embedId }) {
    return (
        <div>
            <iframe
                className='w-full h-96 lg:w-[1024px] lg:h-[520px] mb-10 px-5'
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /> 
        </div>
    )
}

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
};
