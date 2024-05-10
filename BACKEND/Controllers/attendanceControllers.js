const attendance = require("../Model/attendanceSchema");
const moment = require("moment");

//const BASE_URL = process.env.BASE_URL


// Add Attendance
exports.attendancepost = async (req, res) => {

    try {
        const { employeeID, intime, outtime, workingtime, attdate } = req.body;

        // Check if all required fields are provided
        if (!employeeID || !intime ) {
            return res.status(400).json({ message: "Needed Inputs are required" });
        }

        // Create a new Work History instance
        const attendanceData = new attendance({
            employeeID, 
            intime, 
            outtime, 
            workingtime,
            attdate,
            datecreated: moment().format("YYYY-MM-DD hh:mm:ss"),
        });

        await attendanceData.save();
        res.status(200).json(attendanceData);

    } catch (error) {
        console.error("Error in attendancepost:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// attendencesget all
exports.attendanceget = async (req, res) => {
    try {
    const search = req.query.search || '';
    const datecreated = req.query.datecreated || null;
    const sort = req.query.sort || "";
    const page = req.query.page || 1;
    const ITEM_PER_PAGE = 5;


    const query = {};

        // Add search query for employeeID filtering
        if (search) {
            query.employeeID = { $regex: search, $options: 'i' };
        }

        // Add datecreated query for filtering
        if (datecreated) {
            query.datecreated = { $gte: new Date(datecreated), $lt: new Date(new Date(datecreated).setDate(new Date(datecreated).getDate() + 1)) };
        }
      
        const skip = (page - 1) * ITEM_PER_PAGE  // 1 * 4 = 4

        const count = await attendance.countDocuments(query);

        const attendancesdata = await attendance.find(query)
        .sort({datecreated:sort == "new" ? -1 : 1})
        .limit(ITEM_PER_PAGE)
        .skip(skip);

        const pageCount = Math.ceil(count/ITEM_PER_PAGE);  // 8 /4 = 2

        res.status(200).json({
            Pagination:{
                count,pageCount
            },
            attendancesdata
        })


    } catch (error) {
        res.status(401).json(error)
    }
}


/*
// get attendance all(without filtering and)
exports.attendanceeget = async (req, res) => {
   
try {
    const attendanceesdata = await attendance.find({});
    res.status(200).json({
        attendanceesdata
    });
    } catch (error) {
        res.status(401).json(error)
    }
}
*/


// single attendance get
exports.singleattendanceget = async (req, res) => {

    const { id } = req.params;

    try {
        const attendancedata = await attendance.findOne({ _id: id });
        res.status(200).json(attendancedata)
    } catch (error) {
        res.status(401).json(error)
    }
}


// attendance edit
exports.attendanceedit = async (req, res) => {
    const { id } = req.params;
    const { employeeID, intime, outtime, workingtime } = req.body;
    

    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    try {
        const updateattendance = await attendance.findByIdAndUpdate({ _id: id }, {
            employeeID, intime, outtime, workingtime, dateUpdated
        }, {
            new: true
        });

        await updateattendance.save();
        res.status(200).json(updateattendance);
    } catch (error) {
        res.status(401).json(error)
    }
}


// delete attendance
exports.attendancedelete = async (req, res) => {
    const { id } = req.params;
    try {
        const deletattendance = await attendance.findByIdAndDelete({ _id: id });
        res.status(200).json(deletattendance);
    } catch (error) {
        res.status(401).json(error)
    }
}


