import axios from "axios";
import {EmployeeType, SkillType} from "../redux/staff-reducer";

const instance = axios.create({
    baseURL: "https://605dbaf39386d200171bb218.mockapi.io/api/v1",
})


export const API = {
    getOccupations() {
        return instance.get("/occupations")
    },
    getStaff() {
        return instance.get("/staff")
    },
    setNewEmployee({firstName, lastName, occupation}: EmployeeType) {
        return instance.post("/staff", {firstName, lastName, occupation})
    },
    setSkills(skills: Array<SkillType>) {
        return instance.post("/skills", skills)
    }
}