import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter basename="wood-forest-google">
                <Routes>
                    <Route>
                        <Route path='/' element={<All />} />
                        <Route path='/Project' element={<Project />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/Skill' element={<Skill />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter ; 