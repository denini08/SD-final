//saber se o usuario ta logado
export const isLogado = () => {
  if (localStorage.getItem("@UPE:googleId")) {
    return true;
  } else {
    return false;
  }
};
