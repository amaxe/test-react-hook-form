import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";
import style from './App.module.scss'

function App() {
    return (
        <div className={style.app}>
            <div className={style.container}>
                <Router>
                    <div className={style.header}>
                        <NavLink exact to="/recruit-agency-form" activeClassName={style.activeTab}
                                 className={style.personalInfoTab}>
                            PERSONAL INFO
                        </NavLink>
                        <NavLink exact to="/recruit-agency-form/skills" activeClassName={style.activeTab}
                                 className={style.skillsTab}>
                            SKILLS
                        </NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/recruit-agency-form" render={() => <PersonalInfo/>}/>
                        <Route exact path="/recruit-agency-form/skills" render={() => <Skills/>}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
