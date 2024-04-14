import React from 'react'
import cls from "./SystemLine.module.scss"
import { Checkbox, FormControlLabel, Switch } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Field } from 'formik'


const SystemLine = ({
    label,
    name,
    info
}) => {

    return (
        <div className={`${cls.checkbox} ${cls.checkbox2}`}>
            <div className={cls.integrationBox}>
                <Field
                    type="checkbox"
                    name={name}
                    as={FormControlLabel}
                    control={<Checkbox
                        color='default'
                        sx={{
                            "&:hover": {
                                backgroundColor: 'white',
                                color: "black",
                                height: 1                    

                            }
                        }}
                    />}
                />
                <p>{label}</p>
            </div>
            <div className={cls.lastSync}>
                <p>Последняя синхронизация:</p>
                <span>{new Date(info.map(item => item.lastSync).sort().at(-1)).toLocaleString("ru-RU")}</span>
            </div>
            <div className={cls.downloadSwitch}>
                <Field
                    type="checkbox"
                    name={"delta" + name[0].toUpperCase() + name.slice(1)}
                    as={FormControlLabel}
                    control={<Switch
                        color='default'
                        sx={{
                            "&:hover": {
                                backgroundColor: 'white'

                            }
                        }}
                    />}
                />

            </div>
            <div>
                <Field
                    type="checkbox"
                    name={"future" + name[0].toUpperCase() + name.slice(1)}
                    as={FormControlLabel}

                    control={<Switch
                        color='default'
                        sx={{
                            "&:hover": {
                                backgroundColor: 'white'

                            }
                        }}
                    />}
                />
            </div>
            <div className={cls.syncData}>
                <p>Запланирован в...</p>
                <button className={cls.systemButton}> <ChevronRightIcon size="small" /> </button>
            </div>
        </div>
    )
}

export default SystemLine