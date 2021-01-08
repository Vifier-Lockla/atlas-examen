import {Request, Response} from 'express';

import {ACCOUNT} from '../data/account-data';
import {LoginInformation} from '../model/UserProfil';


/**
 * User attempts to log in => control coherency from information sent and information registered in the persistent mechanism.
 * @param req HTTP request received.
 * @param res HTTP response to return.
 */
export function checkLogin(req: Request, res: Response): void {
  const login = req.body.login;
  const password = req.body.password;
  const accounts: any = Object.values(ACCOUNT);

  const accountFind = accounts.find(item => (item.pseudo === login || item.email === login) && item.password === password);

  if (!!accountFind) {
    const account: LoginInformation = {id: accountFind.id, pseudo: accountFind.pseudo, email: accountFind.email};
    res.status(200).json(account);
  }
  else {
    const message = {
      level: 'ERROR',
      code: 'WRONG CREDENTIALS',
      text: 'Vous n\'êtes pas connecté : Veuillez vérifier vos login/mot de passe !'
    };
    res.status(401).json(message);
  }
}

/**
 * Get account details to feed profil page.
 * @param req HTTP request received.
 * @param res HTTP response to return.
 */
export function geAccountById(req: Request, res: Response): void {
  const accountId = req.params.id;
  const accounts: any = Object.values(ACCOUNT);
  const account = accounts.find(item => item.id === accountId);

  if (!!account) {
    res.status(200).json(account);
  }
  else {
    const message = {
      level: 'ERROR',
      code: 'WRONG ID',
      text: 'Ce compte est introuvable'
    };
    res.status(401).json(message);
  }

}
