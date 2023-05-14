import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Menyu} from "./pages/userPages/Menyu";
import {UserLayout} from "./layout/UserLayout";
import {Contact} from "./pages/userPages/Contact";
import {Blog} from "./pages/userPages/Blog";
import {Login} from "./pages/auth/Login";
import {Dashboard} from "./pages/adminPages/Dashboard";
import {DashBoardLayout} from "./layout/DashBoardLayout";
import {NotFound} from "./pages/NotFound";
import {Aware} from "./pages/adminPages/aware/Aware";
import {AwareAdd} from "./pages/adminPages/aware/AwareAdd";
import {Messages} from "./pages/adminPages/Messages";
import {Course} from "./pages/userPages/Course";
import {CoursePhotoUpload} from "./pages/adminPages/course/CoursePhotoUpload";
import {CourseAdd} from "./pages/adminPages/course/CourseAdd.jsx";
import {Settings} from "./pages/adminPages/Settings.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={< UserLayout/>}>
                    <Route index element={< Menyu/>}/>
                    <Route path={"/contact"} element={< Contact/>}/>
                    <Route path={"/blog"} element={< Blog/>}/>
                </Route>
                <Route path={"/auth/universal-academy/login"} element={< Login/>}/>
                <Route path="/auth/universal-academy/admin" element={<DashBoardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={"/auth/universal-academy/admin/aware"} element={<Aware/>}/>
                    <Route path={"/auth/universal-academy/admin/aware/add"} element={<AwareAdd/>}/>
                    <Route path={"/auth/universal-academy/admin/message"} element={<Messages/>}/>
                    <Route path={"/auth/universal-academy/admin/course"} element={<Course/>}/>
                    <Route path={"/auth/universal-academy/admin/course/upload"} element={<CoursePhotoUpload/>}/>
                    <Route path={"/auth/universal-academy/admin/course/add"} element={<CourseAdd/>}/>
                    <Route path={"/auth/universal-academy/admin/setting"} element={<Settings/>}/>
                </Route>
                <Route path={"*"} element={< NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
