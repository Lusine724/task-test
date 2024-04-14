import React from 'react'
import cls from "./ResponseMenu.module.scss"
import { useSelector } from 'react-redux'
import systemSlice from '../../store/slices/systemSlice/systemSlice'
import ResponseSystemLine from "../../Components/ResponseSystemLine/ResponseSystemLine"
import { Pagination } from '@mui/material'

const ResponseMenu = () => {
    const systems = useSelector(systemSlice.selector).systems
   
    return (
        <div className={cls.responseMenuContainer}>
            <div className={cls.responseMenu}>
                <div className={cls.mainPart}>
                    {
                        systems.map((item, index) => {
                            return (
                                <ResponseSystemLine
                                    info={item}
                                    key={index}

                                />)
                        })
                    }


                </div>


            </div>
            <div className={cls.pagination}>
                <Pagination count={4} variant="outlined" />

            </div>


        </div>

    )
}

export default ResponseMenu