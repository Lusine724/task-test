import React from 'react'
import Systems from '../Systems/Systems'
import { Pagination } from '@mui/material'
import cls from "./Main.module.scss"

const Main = () => {
  return (
    <div>
        <Systems/>
        <Systems/>
        <Systems/>

        <div className={cls.pagination}>
        <Pagination count={10} shape="rounded" />
        </div>
    </div>
  )
}

export default Main