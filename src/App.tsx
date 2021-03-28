import React, {useEffect} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";
import style from './App.module.scss'
import {useDispatch} from "react-redux";
import {getOccupations} from "./redux/staff-reducer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOccupations)
    }, [dispatch]);

    return (
        <div className={style.app}>
            <div className={style.container}>
                <Router>
                    <div className={style.header}>
                        <NavLink exact to="/" activeClassName={style.activeTab}
                                 className={style.personalInfoTab}>
                            PERSONAL INFO
                        </NavLink>
                        <NavLink exact to="/skills" activeClassName={style.activeTab}
                                 className={style.skillsTab}>
                            SKILLS
                        </NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <PersonalInfo/>}/>
                        <Route exact path="/skills" render={() => <Skills/>}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
