import React from 'react'
import Systems from '../Systems/Systems'
import { Pagination } from '@mui/material'
import cls from "./Main.module.scss"
import { useSelector } from 'react-redux'
import systemSlice from '../../store/slices/systemSlice/systemSlice'

const Main = () => {

  const systems = useSelector(systemSlice.selector).systems
  return (
    <div className={cls.mainPart}>

      {
        systems.map((item, index) => {
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