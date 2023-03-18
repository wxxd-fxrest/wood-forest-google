import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./All";

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path='/' element={<All />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter ; 