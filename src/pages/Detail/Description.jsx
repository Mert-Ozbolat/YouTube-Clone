import millify from 'millify'
import React from 'react'

const Description = ({ video }) => {
    return (
        <div className='bg-secondary rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80'>
            <div className='flex gap-4 mb-2'>
                <p className='font-bold'>{millify(video.viewCount)} Görünülenme</p>

                <p>
                    {
                        new Date(video.publisDate).toLocaleDateString('tr', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        })
                    }
                </p>
            </div>
            <p className='whitespace-pre-wrap'>{video.description}</p>
        </div>
    )
}

export default Description