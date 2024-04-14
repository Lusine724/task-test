import React, { useState } from 'react'
import Systems from '../Systems/Systems'
import { Pagination } from '@mui/material'
import cls from "./Main.module.scss"
import { useSelector } from 'react-redux'
import systemSlice from '../../store/slices/systemSlice/systemSlice'
import { useEffect } from 'react'

const Main = () => {

  const systems = useSelector(systemSlice.selector).systems
  const [filteredSystems, setFilteredSystems] = useState([])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("search")
    if (query && systems) {
        setFilteredSystems(
            systems.filter(item => {
                return (
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.description.toLowerCase().includes(query.toLowerCase())
                )
            })
        )
    } else {
        setFilteredSystems(systems)
    }
}, [systems]);


return (
  <div className={cls.mainPart}>

    {
      filteredSystems.map((item, index) => {
        return <Systems
          info={item}
          key={index}
        />
      })
    }
    <div className={cls.pagination}>
      <Pagination count={10} shape="rounded" />
    </div>
  </div>
)
}

export default Main