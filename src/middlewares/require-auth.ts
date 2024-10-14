import {Request, Response, NextFunction} from 'express';

import {NotAuthorizeError} from '../errors';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizeError();
  }

  next();
}