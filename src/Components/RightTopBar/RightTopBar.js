import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add';

import styles from './RightTopBar.module.css'

const RightTopBar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
            </div>
            <div className={styles.username}>
                ChunYu Shi
            </div>
            <div className={styles.profileIcon}>
                <img src="http://placekitten.com/37/37" />
            </div>
        </div>
    )
}

export default RightTopBar
