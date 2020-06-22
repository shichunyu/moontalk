import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add';

import styles from './LeftTopBar.module.css'

const LeftTopBar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <MenuIcon/>
            </div>
            <div className={styles.orgName}>
                Moon Talk
            </div>
            <div className={styles.add}>
                <AddIcon/>
            </div>
        </div>
    )
}

export default LeftTopBar
