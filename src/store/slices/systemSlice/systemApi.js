import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSystems = createAsyncThunk("system/fetchSystems", async()=>{
const response = await axios.get("http://localhost:8000/systems")
console.log(response)

    return response.data
})
