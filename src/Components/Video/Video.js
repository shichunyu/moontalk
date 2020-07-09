import React, { useRef } from 'react'
import adapter from 'webrtc-adapter'

// Styles
// import styles from './Video.module.css'

const Video = () => {
    const servers = null
    const audio1 = useRef()
    const audio2 = useRef()

    // const audio1 = document.querySelector('audio#audio1')
    // const audio2 = document.querySelector('audio#audio2')

    let pc1
    let pc2
    let localStream

    // // Enabling opus DTX is an expert option without GUI.
    // // eslint-disable-next-line prefer-const
    // let useDtx = false

    // // Disabling Opus FEC is an expert option without GUI.
    // // eslint-disable-next-line prefer-const
    // let useFec = true

    const offerOptions = {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 0,
        voiceActivityDetection: false
    }

    var constraints = { video: false, audio: true }

    function gotStream(stream) {
        console.log('Received local stream')
        localStream = stream
        const audioTracks = localStream.getAudioTracks()
        if (audioTracks.length > 0) {
            console.log(`Multiple audio tracks. Using Audio device: ${audioTracks[0].label}`)
        }
        localStream.getTracks().forEach(track => pc1.addTrack(track, localStream))
        console.log('Adding Local Stream to peer connection')

        pc1.createOffer(offerOptions)
            .then(gotDescription1, onCreateSessionDescriptionError)
    }

    function onCreateSessionDescriptionError(error) {
        console.log(`Failed to create session description: ${error.toString()}`)
    }

    function gotDescription1(desc) {
        console.log(`Offer from pc1\n${desc.sdp}`)
        pc1.setLocalDescription(desc)
            .then(
                () => {
                    // desc.sdp = forceChosenAudioCodec(desc.sdp)
                    pc2.setRemoteDescription(desc).then(() => {
                        return pc2.createAnswer().then(gotDescription2, onCreateSessionDescriptionError)
                    }, onSetSessionDescriptionError)
                }, onSetSessionDescriptionError
            )
    }

    function gotDescription2(desc) {
        console.log(`Answer from pc2\n${desc.sdp}`)
        pc2.setLocalDescription(desc).then(
            () => {
                // desc.sdp = forceChosenAudioCodec(desc.sdp)
                // if (useDtx) {
                //     desc.sdp = desc.sdp.replace('useinbandfec=1', 'useinbandfec=1usedtx=1')
                // }
                // if (!useFec) {
                //     desc.sdp = desc.sdp.replace('useinbandfec=1', 'useinbandfec=0')
                // }
                pc1.setRemoteDescription(desc).then(() => {}, onSetSessionDescriptionError)
            }, onSetSessionDescriptionError
        )
    }

    function onSetSessionDescriptionError(error) {
        console.log(`Failed to set session description: ${error.toString()}`)
    }

    function errorCallback(error) {
        console.log("navigtor.getUserMedia error: ", error)
        if (error.name === "NotAllowedError") {
            console.log("Permission Denied")
        } else if (error.name === "NotFoundError") {
            console.log("No video or audio device found")
        } else {
            console.log(error)
        }
    }

    function startCall() {
        console.log("starting call")
        pc1 = new RTCPeerConnection(servers)
        pc1.onicecandidate = e => onIceCandidate(pc1, e)
        console.log("pc1: " + pc1)
        pc2 = new RTCPeerConnection(servers)
        pc2.onicecandidate = e => onIceCandidate(pc2, e)
        console.log("pc2: " + pc2)
        pc2.ontrack = gotRemoteStream
        // Request local stream
        navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(errorCallback)
    } 

    function gotRemoteStream(e) {
        console.log('Received Remote Stream')
        console.log("audio1: " + audio1)
        console.log("audio2: " + audio2)
        // if (audio2.srcObject !== e.streams[0]) {
        //     audio2.srcObject = e.streams[0]
        //     console.log('Received remote stream')
        // }
    }

    function getOtherPc(pc) {
        return (pc === pc1) ? pc2 : pc1
    }

    function getName(pc) {
        return (pc === pc1) ? 'pc1' : 'pc2'
    }

    function onIceCandidate(pc, event) {
        getOtherPc(pc).addIceCandidate(event.candidate)
            .then(
                () => onAddIceCandidateSuccess(pc),
                err => onAddIceCandidateError(pc, err)
            )
        console.log(`${getName(pc)} ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`)
    }


    function onAddIceCandidateSuccess() {
        console.log('AddIceCandidate success.')
    }

    function onAddIceCandidateError(error) {
        console.log(`Failed to add ICE Candidate: ${error.toString()}`)
    }
    
    function endCall() {
        console.log("ending call")
        const stream = audio1.srcObject
        const tracks = stream.getTracks()
        console.log(tracks)
        
        tracks.forEach(function(track) {
            track.stop()
        })

        audio1.srcObject = null

        console.log(tracks)
    }


    return (
       <div>
            <audio ref={audio1} autoPlay playsInline controls={true}>
               You browser doesn't seem to support audio :(
            </audio>
            <br/>
            <button id="talk" onClick={startCall}>Talk</button>
            <button id="hangup" onClick={endCall}>Hang Up</button>
            <br/>
            <audio ref={audio2} autoPlay playsInline controls={true}>
               You browser doesn't seem to support audio :(
            </audio>
       </div>
    )
}

export default Video