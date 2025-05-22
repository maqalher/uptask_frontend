import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/project/create" element={<CreateProjectView  />} />
                    <Route path="/project/:projectId" element={<ProjectDetailsView  />} />
                    <Route path="/project/:projectId/edit" element={<EditProjectView  />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}