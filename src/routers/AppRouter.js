import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./All";
import Project from "./Project";

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path='/' element={<All />} />
                        <Route path='/Project' element={<Project />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter ; 