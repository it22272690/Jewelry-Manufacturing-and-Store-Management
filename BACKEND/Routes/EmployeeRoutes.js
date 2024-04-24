const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/employeesControllers");
const workcontrollers = require("../Controllers/workHistoryControllers");
const attcontrollers = require("../Controllers/attendanceControllers");
const leavecontrollers = require("../Controllers/leaveControllers");
const upload = require("../multerconfig/storageConfig")


// routes
router.post("/employee/registeremp",upload.single("emp_profile"),controllers.employeepost);
router.get("/employee/details",controllers.employeeget);
router.get("/employee/:id",controllers.singleemployeeget);
router.put("/employee/edit/:id",upload.single("emp_profile"),controllers.employeeedit);
router.delete("/employee/delete/:id",controllers.employeedelete);
router.put("/employee/status/:id",controllers.employeestatus);
router.get("/employeeexport",controllers.employeeExport);

//work history
router.post("/workhistory/addwork",workcontrollers.workhistorypost);
router.get("/workhistory/workdetails",workcontrollers.workhistoryget);
router.put("/workhistory/workstatus/:id",workcontrollers.workhistorystatus);
router.get("/workhistory/:id",workcontrollers.singleworkhistoryget);
router.put("/workhistory/edit/:id",workcontrollers.workhistoryedit);
router.delete("/workhistory/delete/:id",workcontrollers.workhistorydelete);

//attendance
router.post("/attendance/addattendance",attcontrollers.attendancepost);
router.get("/employees", controllers.employeeidget);  // Route to fetch employee IDs
router.get("/attendance/attdetails",attcontrollers.attendanceget);  //Route to get all attendance details
router.get("/attendance/:id",attcontrollers.singleattendanceget);   //Route to get single attendance detail
router.put("/attendance/edit/:id",attcontrollers.attendanceedit);
router.delete("/attendance/delete/:id",attcontrollers.attendancedelete);

//leave
router.post("/leave/addleave",leavecontrollers.leavepost);
router.get("/leave/leavedetails",leavecontrollers.leaveget);

module.exports = router;
