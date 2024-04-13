import React from 'react'
import cls from "./SystemLine.module.scss"
import { Checkbox, Switch } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'


const SystemLine = (props) => {
    const name = props.name;
    const data = props.data
  return (
    <div className={`${cls.checkbox} ${cls.checkbox2}` }>
    <div className={cls.integrationBox}>
        <Checkbox color="default"/>
        <p>{name}</p>                                            
    </div>
    <div className={cls.lastSync}>
        <p>Последняя синхронизация:</p>
        <span>{data}</span>
    </div>
    <div className={cls.downloadSwitch}>
        <Switch color='default'/>
    </div>
    <div>
        <Switch color='default' />
    </div>
    <div className={cls.syncData}>
        <p>Запланирован в...</p>
        <button className={cls.systemButton}> <ChevronRightIcon size="small"/> </button>        
    </div>
</div>
  )
}

export default SystemLine