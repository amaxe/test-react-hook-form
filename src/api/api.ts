import axios from "axios";
import {EmployeeType, SkillType} from "../redux/staff-reducer";

const instance = axios.create({
    baseURL: "https://61460ad338339400175fc7cd.mockapi.io/api/v1",
})

export const API = {
    getOccupations() {
        return instance.get("/occupations")
    },
    setNewEmployee({firstName, lastName, occupation}: EmployeeType) {
        return instance.post("/staff", {firstName, lastName, occupation})
    },
    setSkills(skills: Array<SkillType>) {
        return instance.post("/skills", skills)
    }
}
