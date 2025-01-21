import { ILoggedUser } from '../interfaces/global';

export const pageIsMobile = () => {
  try {
    const isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return (
          navigator.userAgent.match(/IEMobile/i) ||
          navigator.userAgent.match(/WPDesktop/i)
        );
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    if (isMobile.any()) return true;
    else return false;
  } catch (error) {
    console.error(error)
    return false;
  }
}

export const saveToken = (token: string) => {
  localStorage.setItem('authToken', token);
}

export const getToken = () => {
  const authToken = localStorage.getItem('authToken');

  return authToken;

}

export const saveUserLogged = (user: ILoggedUser) => {
  localStorage.setItem('userLogged', JSON.stringify(user));
}

export const getUserLogged = () => {
  const userLogged = localStorage.getItem('userLogged');

  return JSON.parse(userLogged || '{}');

}