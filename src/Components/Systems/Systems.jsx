import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { Field, Formik } from 'formik'
import { useState } from 'react'
import cls from "./System.module.scss"
import SystemLine from '../SystemLine/SystemLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { addStream } from '../../Api/Api'
import { useDispatch } from 'react-redux'
import { fetchSystems } from '../../store/slices/systemSlice/systemApi'
import { Modal } from '@mui/material'
import DownloadIcon from "../../Icons/download.svg?react"
import GroupIcon from "../../Icons/group.svg?react"
import DetailTime from '../DetailTime/DetailTime'




// import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
// import CloseIcon from '@material-ui/icons/Close'


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
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    const dispatch = useDispatch()
    const handleSubmit = async (values) => {
        setTimeout(async () => {
            await addStream(info, values)
            dispatch(fetchSystems())
        }, 1000)



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
                    <div className={cls.syncTime}>
                        <button onClick={handleOpen} >
                            <CheckCircleOutlineIcon size="small" /> Синхронизировано {new Date(info.lastSync).toLocaleString("ru-RU").replace(",", "")}
                        </button>
                    </div>
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


            </div>
            }
            <Modal
                open={open}
                onClose={handleClose}
                className={cls.modal}
            >
                <div className={cls.openSyncContainer}>
                    <div className={cls.openSync}>
                        <div className={cls.openSyncTit}>
                            <h1>Статусы интеграций HR4CLNT150 SAP HCM Development system</h1>
                            <span onClick={handleClose}><GroupIcon /></span>
                        </div>
                        <div className={cls.responseSyncContainer}>
                            <div className={cls.responseSyncContainerItem}>
                                <div className={cls.itemChilds}>
                                    <p>Поток</p>
                                    <h1>Детализация полномочий</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Дата начала</p>
                                    <h1>04.05.2023 12:45</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Дата окончания</p>
                                    <h1>04.05.2023 12:45</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Статус</p>
                                    <h1>Синхронизировано</h1>
                                </div>
                                <div className={cls.download}>
                                    <p>Скачать</p>
                                    <span><DownloadIcon/></span>
                                </div>                        

                            </div>
                            <div className={cls.responseSyncContainerItem}>
                                <div className={cls.itemChilds}>
                                    <p>Поток</p>
                                    <h1>Детализация полномочий</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Дата начала</p>
                                    <h1>04.05.2023 12:45</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Дата окончания</p>
                                    <h1>04.05.2023 12:45</h1>
                                </div>
                                <div className={cls.itemChilds}>
                                    <p>Статус</p>
                                    <h1>Синхронизировано</h1>
                                </div>
                                <div className={cls.download}>
                                    <p>Скачать</p>
                                    <span><DownloadIcon/></span>
                                </div>                        

                            </div>

                        </div>
                        <div className={cls.detailsTimeUp}>
                            <div><span>Поток</span></div>
                            <div><span>Дата начала</span></div>
                            <div><span>Дата окончания</span></div>
                            <div><span>Синхронизировано</span></div>
                            <div><span></span></div>
                        </div>

                        <div className={cls.menuSync}>
                            <div className={cls.infoSync}>
                                {info.streams && info.streams.map((item)=>{
                                    return <DetailTime stream = {item}/>           

                                }
                                )}
                                {console.log(info)}
                                
                                
                            </div>
                        </div>

                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default Systems