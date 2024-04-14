import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice ({
    name: "system",
    reducers: {

    },
    initialState: {
        "systems": [
            {
                "id": 1,
                "name": "ER0CLNT200",
                "description": "SAP ERP Development system",
                "lastSync": "2024-04-13T10:34:46.718Z",
                "status": "success",
                "streams": [
                    {
                        "id": 1,
                        "name": "details",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 2,
                        "name": "profiles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 3,
                        "name": "roles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 4,
                        "name": "users",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    }
                ]
            },
            {
                "id": 2,
                "name": "ER0CLNT200",
                "description": "SAP ERP Development system",
                "lastSync": "2024-04-13T10:34:46.718Z",
                "status": "success",
                "streams": [
                    {
                        "id": 1,
                        "name": "details",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 2,
                        "name": "profiles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 3,
                        "name": "roles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 4,
                        "name": "users",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    }
                ]
            },
            {
                "id": 3,
                "name": "ER0CLNT200",
                "description": "SAP ERP Development system",
                "lastSync": "2024-04-13T10:34:46.718Z",
                "status": "success",
                "streams": [
                    {
                        "id": 1,
                        "name": "details",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 2,
                        "name": "profiles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 3,
                        "name": "roles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 4,
                        "name": "users",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    }
                ]
            },
            {
                "id": 4,
                "name": "ER0CLNT200",
                "description": "SAP ERP Development system",
                "lastSync": "2024-04-13T10:34:46.718Z",
                "status": "success",
                "streams": [
                    {
                        "id": 1,
                        "name": "details",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 2,
                        "name": "profiles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 3,
                        "name": "roles",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    },
                    {
                        "id": 4,
                        "name": "users",
                        "lastSync": "2024-04-13T10:34:46.718Z",
                        "status": "success",
                        "value": true,
                        "deltaValue": true,
                        "futureValue": true
                    }
                ]
            }
           
        ]
    }
})

export default{
    reducer: systemSlice.reducer,
    selector: state => state.system

} 