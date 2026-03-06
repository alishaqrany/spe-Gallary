import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import Bounce from 'react-reveal/Bounce';


const ImageGridhlifeAfter = ({ setSelectedImg }) => {
    const { docs } = useFirestore('hlifeAfter');

    return (
        <div className='row mg'>
            {docs && docs.map(doc => (
                 <div className="img-wrap col-md-4" key={doc.id} onClick={() => { setSelectedImg(doc.url); }} >
                    <Bounce top>
                    <img src={doc.url} alt="Uploaded Images" className='mx-2 my-3' />
                    </Bounce>
                </div> 

            ))}
        </div>
    )
}

export default ImageGridhlifeAfter