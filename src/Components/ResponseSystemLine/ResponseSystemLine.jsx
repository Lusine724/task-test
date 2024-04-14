import React from 'react'
import cls from "./ResponseSystemLine.module.scss"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Checkbox, Switch } from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useState } from 'react';

const ResponseSystemLine = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={cls.darkBack}>
            <div className={cls.responseSystem}>
                <div className={cls.responseSystemLine}>
                    <div className={cls.doneIcon}>
                        <CheckCircleOutlineIcon
                            size="small"
                            sx={{ color: 'rgba(0, 0, 0, 0.26)' }}
                        />
                    </div>
                    <div className={cls.titPart}>
                        <h1>ER0CLNT200</h1>
                        <p>SAP ERP Development system</p>
                    </div>
                </div>
                <div className={cls.lastSync}>
                    <p>Последняя синхронизация: 29/04/2023 </p>
                    <span><ChevronRightIcon size="small" /></span>

                </div>
                <div className={cls.planned}>
                    <p>Запланирован в...</p>
                    <span><ChevronRightIcon size="small" /></span>
                </div>


            </div>
            <div onClick={() => {
                setShow(!show)

            }}>
                <KeyboardDoubleArrowDownIcon
                    className={cls.arrowIcon}
                    sx={{ color: 'rgba(255, 255, 255, 1)' }}

                />{show &&  <div className={cls.openMenu}>
                <div className={cls.streams}>
                <div className={cls.responseSystemLine}>
                                <div className={cls.doneIcon}>
                                    <CheckCircleOutlineIcon
                                        size="small"
                                        sx={{ color: 'rgba(0, 0, 0, 0.26)' }}
                                    />
                                </div>
                                <div className={cls.titPart}>
                                    <h1>ER0CLNT200</h1>
                                    <p>SAP ERP Development system</p>
                                </div>
                            </div>
                            <div className={cls.lastSync}>
                                <p>Последняя синхронизация: 29/04/2023 </p>
                                <span><ChevronRightIcon size="small" /></span>

                            </div>
                            <div className={cls.planned}>
                                <p>Запланирован в...</p>
                                <span><ChevronRightIcon size="small" /></span>
                            </div>

                </div>
                <div className={cls.detail}>
                <div className={cls.detailTxt}>
                            <Checkbox />
                            <p>Детализация полномочий</p>
                        </div>
                        <div className={cls.lastSync2}>
                                <p>Последняя синхронизация: 29/04/2023 </p>
                                <span><ChevronRightIcon size="small" /></span>

                            </div>
                            <div className={cls.planned}>
                                <p>Запланирован в...</p>
                                <span><ChevronRightIcon size="small" /></span>
                            </div>
                            <div className={cls.planned}>
                                <p>Загрузка дельты</p>
                                <span><Switch /></span>
                            </div>
                            <div className={cls.planned}>
                                <p>Синх. буд. присвоений</p>
                                <span><Switch /></span>
                            </div>
                            <div  className={cls.planned2}>
                                <p>Объекты репозитория</p>
                            </div>
                            <div className={cls.systemsName}>
                                <span><KeyboardArrowLeftIcon/></span>
                                <div>
                                    <span><Checkbox/></span>
                                    <p>Профили</p>
                                </div>
                                <span><ChevronRightIcon/></span>
                            </div>
                            <div className={cls.lastSync2}>
                                <p>Последняя синхронизация: 29/04/2023 </p>
                                <span><ChevronRightIcon size="small" /></span>

                            </div>
                            <div className={cls.planned}>
                                <p>Запланирован в...</p>
                                <span><ChevronRightIcon size="small" /></span>
                            </div>
                            <div className={cls.planned}>
                                <p>Загрузка дельты</p>
                                <span><Switch /></span>
                            </div>
                            <div className={cls.planned}>
                                <p>Синх. буд. присвоений</p>
                                <span><Switch /></span>
                            </div>
                            
                            <div className={cls.syncSchedul}>
                                <button type="submit">Запустить синхр. данных</button>
                            </div>
                            <div className={cls.syncPlane}>
                                <button type="submit">Запустить синхр. данных</button>
                            </div>
                            <div className={cls.closeMenu} onClick={()=>{
                                !show
                            }}>
                                <button className={cls.closeBtn}>
                                    <KeyboardDoubleArrowUpIcon
                                        sx={{ color: 'rgba(255, 255, 255, 1)' }}
                                    />
                                </button>
                            </div>
                            
                </div>
            </div>   }
                            
            </div>
        </div>


    )
}

export default ResponseSystemLine