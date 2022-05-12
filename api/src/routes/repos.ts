import { Router, Request, Response } from 'express';
import { getAllRepos } from '../lib/data-accessors';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
    res.header('Cache-Control', 'no-store');  
    
    const repos = await getAllRepos()
    if (repos instanceof Error)
        res.status(500).send({
            message: repos.message 
        })
    
    else
        res.json(repos);
});
