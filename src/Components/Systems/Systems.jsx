import React from 'react'
import { Checkbox, Switch } from '@mui/material'
import { Formik } from 'formik'
import { useState } from 'react'
import cls from "./System.module.scss"
import SystemLine from '../SystemLine/SystemLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Systems = () => {
    const [initialValues, setInitialValues] = useState({})
    const [show, setShow] = useState(true)

    const handleSubmit = () => {

    }
    return (
        <div className={cls.contanier}>
            <div className={cls.contanierTop}>
                <div className={cls.systemName}>
                    <button className={cls.systemButton} onClick={(evt)=>{
                        setShow(!show)
                    }}> <ChevronRightIcon size="small"/> </button>
                    <p>ER0CLNT200</p>
                    <span>SAP ERP Development system, если описание больше ...</span>
                    <p className={cls.syncTime}>
                        <CheckCircleOutlineIcon size = "small"/> Синхронизировано 02.05.2023 12:55</p>
                </div>
                <div className={cls.syncData}>
                    <p>Запланирован в...</p>
                    <button className={cls.systemButton}> <ChevronRightIcon size="small"/> </button>
                </div>
            </div>
            <div className={cls.contanierBottom}>
                {
                    show ?    <Formik
                    initialValues={initialValues}
                    onSubmite={handleSubmit}
                >
                    {
                        () => {
                            return (
                                <form action="" className={cls.formPart}>
                                    <div className={cls.formContainer}>
                                        <SystemLine name={"Детализация полномочий"} data={"29/04/2023"} />
                                        <div className={cls.repozitory}>
                                            <h1>Объекты репозитория</h1>
                                            <SystemLine name={"Профили"} data={"29/04/2023"} />
                                            <SystemLine name={"Роли"} data={"29/04/2023"} />
                                            <SystemLine name={"Пользователи"} data={"29/04/2023"} />
                                        </div>
                                        <div className={cls.selectLine}>
                                            <div className={cls.chooseAll}>
                                                <Checkbox color="default" />
                                                <p>Выбрать все</p>
                                            </div>
                                            <div className={cls.syncSchedul}>
                                                <p>Настроить планирование синхр.</p>
                                                <button type="submit">Запустить синхр. данных</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            )
                        }
                    }

                </Formik> : <form action="" className={cls.formPart}></form>
                }
             
            </div>

        </div>
    )
}

export default Systems