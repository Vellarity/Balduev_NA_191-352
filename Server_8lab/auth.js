import express from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';

const app = express();

app.use(express.json());
app.listen(process.env.PORT || 3000, () => {
    console.log('Authentication service started on port 3000');
});
const users = [{
    id: '1',
    loginname: 'chich',
    password: '1243',
}];

const accessTokenSecret = "supersecrettoken1243supersecrettoken1243";

app.post('/login', (req, res) => {
    // Read username and password from request body
    const { loginname, password } = req.body;
    // Filter user from the users array by username and password
    const user = users.find(u => { return u.loginname === loginname && u.password === password });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ loginname: user.loginname, id: user.id }, accessTokenSecret);

        res.json({
            accessToken,
        });
    } else {
        res.send('Username or password incorrect');
    }
});

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, loginname) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.loginname = loginname;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/protected', authenticateJWT, (req,res) =>{
    let file = fs.readFileSync('send.jpg')
    let filebase = file.toString('base64')
    res.json({basefile: filebase})
})