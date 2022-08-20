class LoginController {

    login = (req, res) => {
        return res.send({
            "success": true,
            "message": "Login sucessfully personified",
            "data": []
        })
    }
}

var logincontroller = new LoginController()
module.exports = { logincontroller }