import jwt from 'jsonwebtoken';

const parse = (jwtToken) => {
    if (token) {
        jwt.verify(token, 'secret_key', async(err,token) => {
            if (!err) {
                return {
                    id: token.id,
                    role: token.role
                }
            }
        })

    }
    return null;
}

export default { parse };