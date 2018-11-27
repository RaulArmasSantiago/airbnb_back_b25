import jwt from 'jsonwebtoken';

let verifyToken = (req,res,next) => {
    const bearerHeader = req.headers['authorization'];

    console.log(req.headers);

    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        console.log(bearer);

        const bearerToken = bearer[1];

        jwt.verify(bearerToken, process.env.VERIFY_SECRET, (err,decoded) => {
            if(!err){
                //Incorporacion del token a la peticion del cliente
                req.token = bearerToken;
                //
                next();
            }else{
                res.status(401).send({
                    "message":"la autenticacion falló..."
                });
            }
        });
    }else{
        res.status(401).send({
            "message":"no tienes permisos"
        })
    }
}

export default verifyToken;