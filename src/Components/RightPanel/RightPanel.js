import React from 'react'

// Components
import RightTopBar from '../RightTopBar/RightTopBar'
import ChannelRoom from '../ChannelRoom/ChannelRoom'

// Styles
import styles from './RightPanel.module.css'

const RightPanel = () => {
    return (
        <div className={styles.wrapper}>
            <RightTopBar />
            <ChannelRoom />
        </div>
    )
}

export default RightPanel