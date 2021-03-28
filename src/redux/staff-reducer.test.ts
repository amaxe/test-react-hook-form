import {InitStateType, staffReducer} from "./staff-reducer";

let initState: InitStateType

beforeEach(() => {
    initState = {
        occupations: [
            {
                code: "TEST_1",
                name: "Test_1"
            }
        ],
        skills: ["Skill_1", "Skill_2"],
        staff: [
            {
                firstName: "FN_1",
                lastName: "LN_1",
                occupation: "JOCKEY"
            }
        ],
        isLoading: false
    }
})

test('Set occupations', () => {
    let payload = [
        {code: "TEST_2", name: "Test_2"}
    ]
    const newState = staffReducer(initState, {type: "rec-agency/staff/SET_OCCUPATIONS", payload})
    expect(newState.occupations[0].code).toBe("TEST_1")
    expect(newState.occupations[1].code).toBe("TEST_2")
    expect(newState.occupations.length).toBe(2)
})

test('Set new employee', () => {
    let payload = {
        firstName: "FN_2",
        lastName: "LN_2",
        occupation: "PRESIDENT"
    }
    const newState = staffReducer(initState, {type: "rec-agency/staff/SET_NEW_EMPLOYEE", payload})
    expect(newState.staff[0].lastName).toBe("LN_1")
    expect(newState.staff[1].occupation).toBe("PRESIDENT")
    expect(newState.staff.length).toBe(2)
})

test('Set skills', () => {
    let payload = ["Skill_3"]
    const newState = staffReducer(initState, {type: "rec-agency/staff/SET_SKILLS", payload})
    expect(newState.skills[0]).toBe("Skill_1")
    expect(newState.skills[2]).toBe("Skill_3")
    expect(newState.skills.length).toBe(3)
})


test('Set loading', () => {
    let value = true
    const newState = staffReducer(initState, {type: "rec-agency/staff/SET_LOADING", value})
    expect(newState.isLoading).toBe(true)

})