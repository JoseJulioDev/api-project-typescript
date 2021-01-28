import {Request, Response} from 'express';

import createUser from './services/CreateUser';

export function home(request: Request, response: Response){

    const user = createUser({
        name: 'José Julio',
        email: 'josejulioumbelino.dev@gmail.com', 
        password: '54321',
        tecs: [
            'React js', 
            'React native', 
            'Node js',
            {title: 'javascript', experience: 1}
        ]
    });

    return response.json({message: 'Api node typescript'});
}