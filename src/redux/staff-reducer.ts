import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {API} from "../api/api";
import {AppRootStateType} from "./store";

export type OccupationType = {
    code: string,
    name: string
}

export type EmployeeType = {
    firstName: string
    lastName: string
    occupation?: string
}

export type SkillType = string

export type InitStateType = {
    occupations: Array<OccupationType>
    skills: Array<SkillType>
    staff: Array<EmployeeType>
    isLoading: boolean
}

let initState: InitStateType = {

    occupations: [
        {
            "code": "PRESIDENT",
            "name": "President"
        },
        {
            "code": "PHILANTHROPIST",
            "name": "Bill Gates"
        },
        {
            "code": "ASTRONAUT",
            "name": "Astronaut"
        },
        {
            "code": "JOCKEY",
            "name": "Jockey"
        }
    ],
    skills: [],
    staff: [],
    isLoading: false
}

export const staffReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "rec-agency/staff/SET_OCCUPATIONS":
            return {
                ...state, occupations: [...state.occupations, ...action.payload] //
            }

        case "rec-agency/staff/SET_SKILLS":
            return {
                ...state, skills: [...state.skills, ...action.payload]
            }

        case "rec-agency/staff/SET_NEW_EMPLOYEE":
            return {
                ...state, staff: [...state.staff, action.payload]
            }

        case "rec-agency/staff/SET_LOADING":
            return {
                ...state, isLoading: action.value
            }

        default:
            return state
    }
}

// Actions
const setOccupations = (payload: Array<OccupationType>) => {
    return {
        type: 'rec-agency/staff/SET_OCCUPATIONS',
        payload
    } as const
}

const setNewEmployee = (payload: EmployeeType) => {
    return {
        type: 'rec-agency/staff/SET_NEW_EMPLOYEE',
        payload
    } as const
}

const setSkills = (payload: Array<SkillType>) => {
    return {
        type: 'rec-agency/staff/SET_SKILLS',
        payload
    } as const
}

const setLoading = (value: boolean) => {
    return {
        type: 'rec-agency/staff/SET_LOADING',
        value
    } as const
}

// Thunks
type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>
type ThunkDispatchType = ThunkDispatch<AppRootStateType, unknown, ActionsType>

export const getOccupations = async (dispatch: ThunkDispatchType) => {
    try {
        dispatch(setLoading(true))
        console.log('fetching data... ')
        let res = await API.getOccupations()
        dispatch(setLoading(false))
        let data = res.data[0].occupations
        dispatch(setOccupations(data))
    } catch (e) {
        console.log(e)
        dispatch(setLoading(false))
    }
}

export const addNewEmployee = (payload: EmployeeType): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        console.log("sending data... ", payload)
        let res = await API.setNewEmployee(payload)
        console.log(res)
        dispatch(setNewEmployee(payload))
    } catch (e) {
        console.log(e)
    }
}

export const addSkills = (payload: Array<SkillType>): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        console.log("sending data... ", payload)
        let res =await API.setSkills(payload)
        console.log(res)
        dispatch(setSkills(payload))
    } catch (e) {
        console.log(e)
    }
}

// Actions types
type SetOccupationsType = ReturnType<typeof setOccupations>
type SetNewEmployeeType = ReturnType<typeof setNewEmployee>
type SetSkillsType = ReturnType<typeof setSkills>
type SetLoadingType = ReturnType<typeof setLoading>

type ActionsType =
    | SetOccupationsType
    | SetNewEmployeeType
    | SetSkillsType
    | SetLoadingType