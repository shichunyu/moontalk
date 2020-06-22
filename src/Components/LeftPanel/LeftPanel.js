import React from 'react'

// Components
import LeftTopBar from '../LeftTopBar/LeftTopBar'
import ChannelList from '../ChannelList/ChannelList'

// Styles
import styles from './LeftPanel.module.css'

const LeftPanel = () => {
    return (
        <div className={styles.wrapper}>
            <LeftTopBar/>
                <ChannelList/>

        </div>
    )
}

export default LeftPanel