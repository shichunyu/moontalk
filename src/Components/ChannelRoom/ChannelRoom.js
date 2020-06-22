import React from 'react'

import NoChannelOpen from '../NoChannelOpen/NoChannelOpen'

import styles from './ChannelRoom.module.css'

const ChannelRoom = () => {
    return (
        <div className={styles.wrapper}>
            <NoChannelOpen/>
        </div>
    )
}

export default ChannelRoom;
