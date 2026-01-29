import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./sidebar/Sidebar";
import UserManagement from "./pages/userManagement/UserManagement";
import DisableUserList from "./pages/disableUserList/DisableUserList";
import UserPermission from "./pages/userPermission/UserPermission";
import DashboardPermission from "./pages/dashboardPermission/DashboardPermission";
import BackDatedEntry from "./pages/backDatedEntry/BackDatedEntry";
import UserWiseSeries from "./pages/userWiseSeries/UserWiseSeries";
import UserwiseProduction from "./pages/userwiseProduction/UserwiseProduction";
import UserWiseAuth from "./pages/userWiseAuth/UserWiseAuth";
import UserClient from "./pages/userClient/UserClient";
import PlantWiseSeries from "./pages/plantWiseSeries/PlantWiseSeries";
import AlertSetting from "./pages/alertSetting/AlertSetting";
import UserWisePermission from "./pages/userWisePermission/UserWisePermission";
import CompanyPlantSetup from "./pages/companyPlantSetup/CompanyPlantSetup";
import WebConfig from "./pages/webConfig/WebConfig";
import FinancialYear from "./pages/financialYear/FinancialYear";
import FinancialMonthMaster from "./pages/financialMonthMaster/FinancialMonthMaster";
import ScheduleMonthMaster from "./pages/scheduleMonthMaster/ScheduleMonthMaster";
import WeeklyOffHoliday from "./pages/weeklyOffHoliday/WeeklyOffHoliday";


function App() {
  return (
    <BrowserRouter>

      <Sidebar />

      <Routes>

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ERP Setting Submenu Routes */}
        <Route path="/user-config" element={<h2 style={{ marginLeft: "240px" }}>User Configuration</h2>} />
        <Route path="/erp-config" element={<h2 style={{ marginLeft: "240px" }}>ERP Configuration</h2>} />
        <Route path="/change-password" element={<h2 style={{ marginLeft: "240px" }}>Change Password</h2>} />
        <Route path="/login-history" element={<h2 style={{ marginLeft: "240px" }}>Login History</h2>} />
        <Route path="/dealer-management" element={<h2 style={{ marginLeft: "240px" }}>Dealer Management</h2>} />
        <Route path="/dashboard-backup" element={<h2 style={{ marginLeft: "240px" }}>Dashboard Backup</h2>} />
        <Route path="/delete-record" element={<h2 style={{ marginLeft: "240px" }}>Delete Record</h2>} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/disable-user-list" element={<DisableUserList />} />
        <Route path="/user-permission" element={<UserPermission />} />
        <Route path="/dashboard-permission" element={<DashboardPermission />} />
        <Route path="/backdated-entry" element={<BackDatedEntry />} />
        <Route path="/user-wise-series" element={<UserWiseSeries />} />
        <Route path="/userwise-production" element={<UserwiseProduction />} />
        <Route path="/userwise-auth" element={<UserWiseAuth />} />
        <Route path="/user-client" element={<UserClient />} />
        <Route path="/plant-wise-series" element={<PlantWiseSeries />} />
        <Route path="/alert-setting" element={<AlertSetting />} />
        <Route path="/user-wise-permission" element={<UserWisePermission />} />
        <Route path="/company-plant-setup" element={<CompanyPlantSetup />} />
        <Route path="/web-config" element={<WebConfig />} />
        <Route path="/financial-year" element={<FinancialYear />} />
        <Route path="/financial-month" element={<FinancialMonthMaster />} />
        <Route path="/schedule-month-master" element={<ScheduleMonthMaster />} />
        <Route path="/weekly-off" element={<WeeklyOffHoliday />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
