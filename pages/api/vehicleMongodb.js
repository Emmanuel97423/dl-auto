import dbConnect from "../../utils/dbConnect";

export default async (req, res) => {
    await dbConnect()
};