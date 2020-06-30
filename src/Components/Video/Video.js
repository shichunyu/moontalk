import React from 'react'

// Styles
import styles from './Video.module.css'

const Video = () => {

    var constraints = { video: true }

    function successCallback(stream) {
        console.log("Success!")
        console.log(stream)
        // var video = document.querySelector("video")
        // video.src = window.URL.createdObjectURL(stream)
    }

    function errorCallback(error) {
        console.log("navigtor.getUserMedia error: ", error)
        if (error.name == "NotAllowedError") {
            console.log("Permission Denied")
        } else if (error.name == "NotFoundError") {
            console.log("No video or audio device found")
        }
    }

    navigator.mediaDevices.getUserMedia(constraints).then(successCallback).catch(errorCallback)

    return (
       <div>
           <video autoPlay>
               Video not working
           </video>
       </div>
    )
}

export default Video