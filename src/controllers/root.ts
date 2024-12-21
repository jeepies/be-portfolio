import type { Request, Response } from 'express';
import pkg from '../../package.json' // is this technically allowed? who knows.

export function index(request: Request, response: Response) {
    response.status(200).json({
        success: true,
        data: {
            version: pkg.version
        }
    });
}