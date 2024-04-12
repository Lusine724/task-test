import React from 'react'
import { Checkbox, Switch } from '@mui/material'
import { Formik } from 'formik'
import { useState } from 'react'
import cls from "./System.module.scss"

const Systems = () => {
    const [initialValues, setInitialValues] = useState({})

    const handleSubmit = () => {

    }
    return (
        <div className={cls.contanier}>
            <div className={cls.contanierTop}>
                <div>
                    <button> {">"} </button>
                    <p>ER0CLNT200</p>
                </div>

                <div><p>Синхронизировано 02.05.2023 12:55</p></div>
                <div>Запланирован в...</div>
            </div>
            <div className={cls.contanierBottom}>
                <Formik
                    initialValues={initialValues}
                    onSubmite={handleSubmit}
                >
                    {
                        () => {
                            return (
                                <form action="" className={cls.formPart}>
                                    <div className={cls.checkbox}>
                                        <div className={cls.integrationBox}>
                                            <Checkbox/>
                                             <p>Детализация полномочий</p>
                                        </div>
                                        <div className={cls.lastSync}>
                                            <p>Последняя синхронизация:</p>
                                            <span>10/02/24</span>
                                        </div>
                                        <div className={cls.downloadSwitch}>
                                        <Switch />
                                        </div>
                                        <div>
                                        <Switch />
                                        </div>
                                        <div>
                                            <p>Запланирован в...</p>
                                        </div>
                                    </div>
                                    <div className={cls.repozitory}>2</div>
                                    <div className={cls.allObjects}>3</div>
                                </form>
                            )
                        }
                    }

                </Formik>
            </div>

        </div>
    )
}

export default Systems