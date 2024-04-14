import React from 'react'
import cls from "./Header.module.scss"
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'




const Header = () => {
    const [value, setValue] = useState("")
    return (
        <header className={cls.header}>
            <h1 className={cls.headTitle}>Загрузка интеграционных данных</h1>
            <div className={cls.searchPart}>
                <p>{value}</p>
                <input placeholder='Поиск' className={cls.serachInput} value={value} type='text' onChange={(evt)=>{
                 setValue(evt.target.value)                
                 

                }}/>
                <div className={cls.searchIcon}>
                    <SearchIcon color="disabled"/>
                </div>
            </div>
        </header>
    )
}

export default Header