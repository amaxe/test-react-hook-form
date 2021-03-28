import React from 'react';
import {SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {addSkills} from "../../redux/staff-reducer";
import style from "./Skills.module.scss"

export default function Skills() {
    const {register, control, handleSubmit} = useForm()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "skill"
    })

    type InputsType = {
        skill: string
    }
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<InputsType> = data => {
        console.log("form data: ", data)
        let arrayOfData = Object.values(data)
        let filteredData = arrayOfData.filter(i => i.length > 0)
        filteredData.length > 0 && dispatch(addSkills(filteredData))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.content}>
            <div className={style.skillsBlock}>
                <label>Skills</label>
                <div className={style.skill}>
                    <input ref={register()} name={"skill0"} defaultValue=""/>
                    <button type="button" onClick={() => append({})} className={style.addBtn}>+</button>
                </div>

                {fields.map(({id, skill}, index) => {
                    return (
                        <div key={id} className={style.skill}>
                            <input ref={register()} name={`skill${index + 1}`} defaultValue={skill}/>
                            <button type="button" onClick={() => remove(index)} className={style.removeBtn}>-</button>
                        </div>
                    )
                })}
            </div>
            <input type="submit" value="SAVE" className={style.saveBtn}/>
        </form>
    )
}