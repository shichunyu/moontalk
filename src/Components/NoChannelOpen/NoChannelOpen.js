import React from 'react'

// Components
import VideoPlayer from '../Video/Video'

// Styles
import styles from './NoChannelOpen.module.css'

const NoChannelOpen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <VideoPlayer/>
            </div>
        </div>
    )
}

export default NoChannelOpen
