import React from 'react'
import cls from "./Header.module.scss"
import SearchIcon from '@mui/icons-material/Search'




const Header = () => {
    return (
        <header className={cls.header}>
            <h1 className={cls.headTitle}>Загрузка интеграционных данных</h1>
            <div>
                <input placeholder='Поиск' className={cls.serachInput} />
                <div className={cls.searchIcon}>
                    <SearchIcon color="disabled"/>
                </div>
            </div>
        </header>
    )
}

export default Header