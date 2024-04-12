import React from 'react'
import cls from "./Header.module.scss"
//import {ReactComponnet as SearchIcon} from "../../Icons/search.svg"


const Header = () => {
    return (
        <header className={cls.header}>
            <h1>Загрузка интеграционных данных</h1>
            <div>
                
                <input placeholder='Search' />
                         
            </div>



        </header>
    )
}

export default Header