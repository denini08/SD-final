//saber se o usuario ta logado
export const isLogado = () => {
  if (sessionStorage.getItem("@UPE:googleId")) {
    return true;
  } else {
    return false;
  }
};

export const novoLogin = (googleId, name, email) => {
  sessionStorage.setItem("@UPE:googleId", googleId);
  sessionStorage.setItem("@UPE:name", name);
  sessionStorage.setItem("@UPE:email", email);
};
