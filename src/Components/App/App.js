import React from 'react'

// Components
import LeftTopBar from '../LeftTopBar/LeftTopBar'
import ChannelList from '../ChannelList/ChannelList'
import RightTopBar from '../RightTopBar/RightTopBar'
import ChannelRoom from '../ChannelRoom/ChannelRoom'
import SimpleBar from 'simplebar-react';

// Styles
import styles from './App.module.css'
import 'simplebar/dist/simplebar.min.css';

const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftPanel}>
                <LeftTopBar/>
                <SimpleBar className={styles.scroll}>
                    <ChannelList/>
                </SimpleBar>
            </div>
            <div className={styles.rightPanel}>
                <RightTopBar/>
                <SimpleBar className={styles.scroll}>
                    <ChannelRoom/>
                </SimpleBar>
            </div>
        </div>
    )
}

export default App;
