import jwt from 'jsonwebtoken';

const parseToken = (jwtToken) => {

    if (!jwtToken) {
        return {
            id: null,
            role: null
        }
    }

    const token =  jwt.verify(jwtToken, 'secret_key')
    if (!token) {
        return {
            id: null,
            role: null
        }
    }

    return {
        id: token.id,
        role: token.role
    }

}

export { parseToken };