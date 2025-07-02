import ratelimit from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try {

        //HERE, In real-world-app you'd like to put the uerId or IP address as the identifier
        const {success} = await ratelimit.limit("my-rate-limit");

        if(!success) {
            return res.status(429).json({message: "Too many requests, please try again later."});
        }
        next();
    } catch (error) {
        console.log("Error limiting rate:", error);
        next(error);
    }           
}

export default rateLimiter;