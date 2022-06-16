import React, {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FaUserFriends } from 'react-icons/fa'
import { DateRangePicker } from 'react-date-range'
import './Search.scss'
import { motion } from 'framer-motion'
function Search() {
  
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect =  (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}} className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <div className="search__down">
            <h2>
                Number of guests 
                <FaUserFriends/>
            </h2>
            <input type="number" min={0} defaultValue={5}/>

            <button className="search__downResult">
                Search Result
            </button>
        </div> 
    </motion.div>
  )
}

export default Search