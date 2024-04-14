import React from 'react'
import { Checkbox, FormControlLabel} from '@mui/material'
import { Field, Formik } from 'formik'
import { useState } from 'react'
import cls from "./System.module.scss"
import SystemLine from '../SystemLine/SystemLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Systems = ({ info }) => {
    const [initialValues] = useState({
        details: false,
        profiles: false,
        roles: false,
        users: false,
        selectAll: false,
        deltaDetails: false,
        deltaProfiles: false,
        deltaRoles: false,
        deltaUsers: false,
        futureDetails: false,
        futureProfiles: false,
        futureRoles: false,
        futureUsers: false,
        futureSelectAll: false
    })
    const [show, setShow] = useState(true)

    const handleSubmit = (values) => {
        console.log(values)

    }
    const handleSelectAll = (e, formik) => {
        const value = e.target.value !== "true"
        Object.keys(initialValues).forEach(item => {
            formik.setFieldValue(item, value)//poxarinum e item-i value-n
        })


    }
    return (
        <div className={cls.contanier}>
            <div className={cls.contanierTop}>
                <div className={cls.systemName}>
                    <button className={cls.systemButton} onClick={(evt) => {
                        setShow(!show)
                    }}> <ChevronRightIcon size="small" /> </button>
                    <p>{info.name}</p>
                    <span>{info.description}</span>
                </div>
                <div className={cls.syncTxt}>
                    <p className={cls.syncTime}>
                        <CheckCircleOutlineIcon size="small" /> Синхронизировано {new Date(info.lastSync).toLocaleString("ru-RU").replace(",", "")}
                    </p>
                </div>
                <div className={cls.syncData}>
                    <p>Запланирован в...</p>
                    <button className={cls.systemButton}> <ChevronRightIcon size="small" /> </button>
                </div>
            </div>
            {show && <div className={cls.contanierBottom}>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {
                        (formik) => {
                            return (
                                <form className={cls.formPart} onSubmit={formik.handleSubmit}>
                                    <div className={cls.formContainer}>
                                        <SystemLine
                                            label={"Детализация полномочий"}
                                            info={info.streams.filter(item => item.name === "details")}
                                            name="details"
                                        />
                                        <div className={cls.repozitory}>
                                            <h1>Объекты репозитория</h1>
                                            <SystemLine
                                                label={"Профили"}
                                                name="profiles"
                                                info={info.streams.filter(item => item.name === "profiles")}
                                            />
                                            <SystemLine
                                                label={"Роли"}
                                                name="roles"
                                                info={info.streams.filter(item => item.name === "roles")}
                                            />
                                            <SystemLine
                                                label={"Пользователи"}
                                                name="users"
                                                info={info.streams.filter(item => item.name === "users")}
                                            />
                                        </div>
                                        <div className={cls.selectLine}>
                                            <div className={cls.chooseAll}>
                                                <Field
                                                    name="selectAll"
                                                    as={FormControlLabel}
                                                    type="checkBox"
                                                    control={<Checkbox 
                                                        color='default' 
                                                        sx={{
                                                            "&:hover": {                                                              
                                                              backgroundColor: 'white'

                                                            }
                                                          }}                                                         

                                                        />}
                                                    onChange={(e) => {
                                                        handleSelectAll(e, formik)

                                                    }}
                                                />
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

                </Formik>


            </div>}


        </div>
    )
}

export default Systems