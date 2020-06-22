import React from 'react'

import styles from './NoChannelOpen.module.css'

const NoChannelOpen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <p>
                    Click on a channel to start talking
                </p>
                <p>
                    or
                </p>
                <p>
                    Invite a teammate
                </p>
            </div>
        </div>
    )
}

export default NoChannelOpen
