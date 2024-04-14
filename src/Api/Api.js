import { Value } from "sass"
import axios from "axios";

export const addStream = async (info, values) => {
    const newStreams = [
        ...info.streams,
    ]
    let adder = 0;
    const getId = () => {
        return (Math.max(...[...info.streams.map(item => +item.id), 0]) + ++adder).toString()
    }

    if (values.details || values.deltaDetails || values.futureDetails) {
        newStreams.push({
            id: getId(),
            name: "details",
            lastSync: new Date().toJSON(),
            value: values.details,
            deltaValue: values.deltaDetails,
            futureValue: values.futureDetails,

        })
    }
    if (values.profiles || values.deltaProfiles || values.futureProfiles) {
        newStreams.push({
            id: getId(),
            name: "profiles",
            lastSync: new Date().toJSON(),
            value: values.profiles,
            deltaValue: values.deltaProfiles,
            futureValue: values.futureProfiles
        })
    }
    if (values.roles || values.deltaRoles || values.futureRoles) {
        newStreams.push({
            id: getId(),
            name: "roles",
            lastSync: new Date().toJSON(),
            value: values.roles,
            deltaValue: values.deltaRoles,
            futureValue: values.futureRoles
        })
    }
    if (values.users || values.deltaUsers || values.futureUsers) {
        newStreams.push({
            id: getId(),
            name: "users",
            lastSync: new Date().toJSON(),
            value: values.users,
            deltaValue: values.deltaUsers,
            futureValue: values.futureUsers
        })
    }

    await axios.patch(`http://localhost:8000/systems/${info.id}`, {
        streams: newStreams
    })  

}