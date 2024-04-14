import React from 'react'
import cls from "../../Components/Systems/System.module.scss"
import DownloadIcon from "../../Icons/download.svg?react"

const DetailTime = ({
    stream
}) => {

    const transleatFunc =(name)=>{
        switch(name){
            case "details":
                return "Детализация полномочий";
            case "profiles":
                return "Профили";
            case "roles":
                return "Роли";
            case "users":
                return "Пользователи";         

        }
    }
    return (
        <div>
            <div className={cls.detailsTime}>
                <div><span>{transleatFunc(stream.name)}</span></div>
                <div><span>{new Date(stream.lastSync).toLocaleString("ru-RU").replace(",", "")}</span></div>
                <div><span>{new Date(stream.lastSync).toLocaleString("ru-RU").replace(",", "")}</span></div>
                <div><span>{new Date(stream.lastSync).toLocaleString("ru-RU").replace(",", "")}</span></div>
                <div><DownloadIcon /></div>
            </div>
        </div>
    )
}

export default DetailTime