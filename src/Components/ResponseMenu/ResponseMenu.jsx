import React from 'react'
import cls from "./ResponseMenu.module.scss"
import { useSelector } from 'react-redux'
import systemSlice from '../../store/slices/systemSlice/systemSlice'
import ResponseSystemLine from "../../Components/ResponseSystemLine/ResponseSystemLine"
import { Pagination } from '@mui/material'

const ResponseMenu = () => {
    const systems = useSelector(systemSlice.selector).systems
    console.log(systems)



    return (
        <div className={cls.responseMenuContainer}>
            <div className={cls.responseMenu}>
                <div className={cls.mainPart}>
                    <ResponseSystemLine />
                    <ResponseSystemLine />
                    <ResponseSystemLine />
                    <ResponseSystemLine />
                </div>
               

            </div>
            <div className={cls.pagination}>
            <Pagination count={4} variant="outlined" />

            </div>
           

        </div>

    )
}

export default ResponseMenu