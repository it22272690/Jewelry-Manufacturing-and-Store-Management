const leave = require("../Model/leaveSchema");
const moment = require("moment");

//const BASE_URL = process.env.BASE_URL


// Leave Registration
exports.leavepost = async (req, res) => {

    try {
        const { empsId, leavedate, leavedes } = req.body;

        // Check if all required fields are provided
        if (!empsId || !leavedate || !leavedes) {
            return res.status(400).json({ message: "All inputs are required" });
        }

        // Create a new Work History instance
        const leaveData = new leave({
            empsId,           
            leavedate,
            leavedes,           
            datecreated: moment().format("YYYY-MM-DD hh:mm:ss"),
        });

        await leaveData.save();
        res.status(200).json(leaveData);

    } catch (error) {
        console.error("Error in leavepost:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



// leave get
exports.leaveget = async (req, res) => {

    const search = req.query.search || ""
    const page = req.query.page || 1
    const ITEM_PER_PAGE = 5;

    const query = {
        empsId: { $regex: search, $options: "i" }
    }
    

    try {


        const skip = (page - 1) * ITEM_PER_PAGE  // 1 * 4 = 4

        const count = await leave.countDocuments(query);

        const leavesdata = await leave.find(query)
                  
            .limit(ITEM_PER_PAGE)
            .skip(skip);

        const pageCount = Math.ceil(count / ITEM_PER_PAGE);  // 8 /4 = 2

        res.status(200).json({
            Pagination: {
                count, pageCount
            },
            leavesdata
        })


    } catch (error) {
        res.status(401).json(error)
    }
}
