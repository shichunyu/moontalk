import React from 'react'

// Components
import ChannelItem from '../ChannelItem/ChannelItems'

// Styles
import styles from './ChannelList.module.css'

const ChannelList = () => {
    return (
        <div className={styles.wrapper}>
            <ol>
                <li>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>
                    <ChannelItem/>

                </li>
            </ol>
        </div>
    )
}

export default ChannelList
