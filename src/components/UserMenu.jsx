import React from 'react'
import './UserMenu.scss'
import {motion} from 'framer-motion'
function UserMenu() {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1}}
    className='userMenu'>
        <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Help</li>
            <li>Account</li>
        </ul>
    </motion.div>
  )
}

export default UserMenu