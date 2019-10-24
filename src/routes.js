/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
import AllocationReport from "views/AllocationReport/AllocationReport";
// import Qmap from 'views/Qmap/Qmap'

import UQMap from "views/UQMap";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout

// import RTLPage from "views/RTLPage/RTLPage.js";

// import RTLPage from "views/RTLPage/RTLPage.js";
import Menus from "views/Menu/menus.js";
import StaffReport from "views/StaffReport/StaffReport";
import Calendar from 'views/Calendar';

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/home",
    name: "HOME",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Menus,
    layout: "/admin"
  },
  {
    path: "/UQMap",
    name: "UQMap",
    rtlName: "خرائط",
    icon: LocationOn,
    component: UQMap,
    layout: "/admin"
  },
  {
    path: "/allocationReport",
    name: "Allocation Report",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AllocationReport,
    layout: "/admin"
  },
  {
    path: "/staffReport",
    name: "Staff Report",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: StaffReport,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "الرموز",
    icon: Notifications,
    component: Calendar,
    layout: "/admin"
  }
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
