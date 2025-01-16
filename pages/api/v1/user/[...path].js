import middleware from '../../../../middleware/middleware';
import dbConnect from '../../../../utils/dbConnect';
const authController = require("../../../../Api/Controllers/authController");

const handler = middleware();

handler.use(async (req, res, next) => {
    await dbConnect();
    next();
});

// Separate route handlers based on path
handler.all(async (req, res) => {
    const { path } = req.query;

    try {
        switch (path[0]) {
            case 'signup':
                if (req.method === 'POST') {
                    return await authController.signUp(req, res);
                }
                break;
            case 'login':
                if (req.method === 'POST') {
                    return await authController.login(req, res);
                }
                break;
            case 'buy-membership':
                if (req.method === 'POST') {
                    return await authController.buyMembership(req, res);
                }
                break;
            default:
                return res.status(404).json({
                    status: 'fail',
                    message: 'Route not found'
                });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

export default handler;