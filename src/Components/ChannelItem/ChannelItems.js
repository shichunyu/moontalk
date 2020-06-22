import React from 'react'

// Material UI Icons
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import styles from './ChannelItem.module.css'

const ChannelItem = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.channelInfo}>
                    <div className={styles.channelName}>
                        Channel Name
                    </div>
                    <div className={styles.members}>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                        <img src="http://placekitten.com/25/25"/>
                    </div>
                </div>
                <div className={styles.status}>
                    <VolumeOffIcon/>
                </div>            
            </div>
            <div>
                <hr/>
            </div>
        </div>
    )
}

export default ChannelItem
