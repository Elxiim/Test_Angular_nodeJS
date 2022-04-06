// @ANSWER  --------- Exercice 6 ------------
// @DESC    implement loginStrength

const logStrength = (value) => {
  let loginStrength = 0;

  let regexp = /[^A-Za-z0-9]+/gi;
  let regex_lettre_min_maj = /^[a-z]+$|^[A-Z]+$/gi;
  let regex_special_char = /a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/gi;
  let regex_nombre = /^(?:[1-9]\d*|\d)$/gi;
  let regex_lettre = /^[a-zA-Z\s]/gi;
  let regex_lettre_chiffre_maj_min = /^(?:[1-9]\d*|\d)$|^[a-z]+$|^[A-Z]+$/gi;
  let regex_specialChar_chiffre_lettre_min_maj =
    /(^[0-9a-zA-Z]{1,+})|a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/gi;
  let regex_huit =
    /(^[0-9a-zA-Z]{1,+})|a-zA-Z0-9!@#\$%\^\&*\)\(+=._- | ([a-zA-Z\s]|^(?:[1-9]\d*)){0, 2}/gi;
  let regex_all =
    /(^[0-9a-zA-Z]{1,+}) & a-zA-Z0-9!@#\$%\^\&*\)\(+=._- & ([a-zA-Z\s] & ^(?:[1-9]\d*))/gi;

  let loginStrength_chiffre_lettre = value.match(regexp);
  let loginStrength_lettre = value.match(regex_lettre);
  let loginStrength_nombre = value.match(regex_nombre);
  let loginStrength_special_char = value.match(regex_special_char);
  let login_lettre_min_maj = value.match(regex_lettre_min_maj);
  let login_lettre_chiffre_maj_min = value.match(regex_lettre_chiffre_maj_min);
  let login_chiffre_lettre_min_maj = value.match(
    regex_specialChar_chiffre_lettre_min_maj
  );
  let login_regex_huit = value.match(regex_huit);
  let login_all = value.match(regex_all);

  if (loginStrength_nombre) {
    loginStrength = 1;
  } else if (loginStrength_lettre) {
    loginStrength = 2;
  } else if (loginStrength_chiffre_lettre) {
    loginStrength = 3;
  } else if (login_lettre_min_maj) {
    loginStrength = 4;
  } else if (login_lettre_chiffre_maj_min) {
    loginStrength = 5;
  } else if (loginStrength_special_char) {
    loginStrength = 6;
  } else if (login_chiffre_lettre_min_maj) {
    loginStrength = 7;
  } else if (login_regex_huit) {
    loginStrength = 8;
  } else if (login_all) {
    loginStrength = 9;
  }

  return loginStrength;
};

module.exports = logStrength;
