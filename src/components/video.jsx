import React from "react";
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'
export default function Video() {

  // const vurl = document.getElementById('vurl').value;
    return (
      <> 
    


            <p className="d-flex justify-content-center align-items-center 0 " >
            <ReactPlayer url='https://www.youtube.com/watch?v=pF5RkP5kynM' controls='true' playing='true' />


              
                
            </p> 
            {/* <ReactVideo
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                poster="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                primaryColor="gray"
                // other props
            /> 
          
                        <Player
              className='mxh'
              resizeMod='cover'
              style={{
              width:'80%',
              height:300

              }}
                // playsInline
                poster="img/gallery.jpg"
                src="https://youtu.be/pF5RkP5kynM"
              // src={vurl}
                />

                <Player
                 src="https://youtu.be/pF5RkP5kynM"
                 poster="img/gallery.jpg">
                <BigPlayButton position="center" />
              </Player>

          
          */}
        </>
      );
    }
    
