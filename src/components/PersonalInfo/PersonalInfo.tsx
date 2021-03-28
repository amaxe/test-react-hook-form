import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addNewEmployee, OccupationType} from "../../redux/staff-reducer";
import style from "./PersonalInfo.module.scss";
import {Preloader} from "../../common/utils/Preloader";

type InputsType = {
    firstName: string
    lastName: string
    occupation?: "PRESIDENT" | "PHILANTHROPIST" | "ASTRONAUT" | "JOCKEY"
}

export default function PersonalInfo() {
    const {register, handleSubmit, errors} = useForm<InputsType>()

    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<InputsType> = ({firstName, lastName, occupation}) => {
        dispatch(addNewEmployee({firstName, lastName, occupation}))
    }

    const occupations = useSelector<AppRootStateType, Array<OccupationType>>(
        state => state.staff.occupations
    )
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.staff.isLoading)

    return (
        isLoading
            ? <Preloader/>
            : <form onSubmit={handleSubmit(onSubmit)} className={style.content}>
                <div className={style.personalInfoBlock}>
                    <div className={style.firstName}>
                        <label>First name</label>
                        <input type="text"
                               name="firstName"
                               ref={register({required: true, maxLength: 100})}/>
                        {errors.firstName && <span className={style.error}>First name is required</span>}
                    </div>
                    <div className={style.occupation}>
                        <label>Occupation</label>
                        <select name="occupation" ref={register}>
                            <option value=""></option>
                            {occupations.map((item, index) => {
                                return (
                                    <option
                                        key={index + item.code}
                                        value={item.code}
                                    >
                                        {item.code}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={style.lastName}>
                        <label>Last name</label>
                        <input type="text"
                               name="lastName"
                               ref={register({required: true, maxLength: 100})}/>
                        {errors.lastName && <span className={style.error}>Last name is required</span>}
                    </div>
                </div>
                <input type="submit" value="SAVE" className={style.saveBtn}/>
            </form>
    )
}