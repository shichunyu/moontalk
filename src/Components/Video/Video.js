import React, { Component } from 'react'

// Styles
import styles from './Video.module.css'

class Video extends Component {
    constructor(props) {
        super(props)

        this.localVideoref = React.createRef()
        this.remoteVideoref = React.createRef()
    }

    componentDidMount() {
        const pc_config = null

        // const pc_config = {
        //     "iceServers": [
        //         {
        //             urls: 'stun: [STUN-IP]:[PORT]',
        //             'credential': '[YOUR CREDENTIAL]',
        //             'username': '[USERNAME]'
        //         }
        //     ]
        // }

        this.pc = new RTCPeerConnection(pc_config)

        this.pc.onicecandidate = (e) => {
            if (e.candidate) console.log(JSON.stringify(e.candidate))
        }

        this.pc.oniceconnectionstatechange = (e) => {
            console.log(e)
        }

        this.pc.ontrack = (e) => {
            this.remoteVideoref.current.srcObject = e.streams[0]
        }

        const constraints = { video: true }
    
        const success = (stream) => {
            window.localStream = stream
            this.localVideoref.current.srcObject = stream
            this.pc.addTrack(stream)
            // options.stream.getTracks().forEach(track => this.pc.addTrack(track, options.stream))
        }
    
        const failure = (e) => {
            console.log('getUserMedia Error: ', e)
        }
    
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(failure)
    }

    createOffer = () => {
        console.log('Offer')
        this.pc.createOffer({offerToReceiveVideo: 1}).then(
            sdp => {
                console.log(JSON.stringify(sdp))
                this.pc.setLocalDescription(sdp)
            }, e => {}
        )
    }

    setRemoteDescription = () => {
        const desc = JSON.parse(this.textref.value)
        this.pc.setRemoteDescription(new RTCSessionDescription(desc))
        console.log('remote desc set')
    }

    createAnswer = () => {
        console.log('Answer')
        this.pc.createAnswer({offerToReceiveVideo: 1}).then(
            sdp => {
                console.log(JSON.stringify(sdp))
                this.pc.setLocalDescription(sdp)
            }, e => {}
        )
    }

    addCandidate = () => {
        const candidate = JSON.parse(this.textref.value)
        console.log('Adding candidate: ', candidate)

        this.pc.addIceCandidate(new RTCIceCandidate(candidate))
    }

    render() {
        return (
            <div>
                <video className ={styles.vid} ref={this.localVideoref} autoPlay>
                    Sorry your browser doesn't support video
                </video>
                <video className ={styles.vid} ref={this.remoteVideoref} autoPlay>
                    Sorry your browser doesn't support video
                </video>
                <br/>
                <button onClick={this.createOffer}>Offer</button>
                <button onClick={this.createAnswer}>Answer</button>
                <br/>
                <textarea ref={ref => { this.textref = ref}} />
                <br />
                <button onClick={this.setRemoteDescription}>Set Remote Desc</button>
                <button onClick={this.addCandidate}>Add Candidate</button>
            </div>
        )
    }
}

export default Video