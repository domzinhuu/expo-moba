export const validatePassword = (value: string = "") => {
  let regex = /(?=.*[A-Z])/

  if (!regex.test(value)) {
    return "Deve conter ao menos 1 caracter MAIÚSCULO"
  }

  regex = /(?=.*[a-z])/

  if (!regex.test(value)) {
    return "Deve conter ao menos 1 caracter MINÚSCULO"
  }

  regex = /(?=.*[0-9])/

  if (!regex.test(value)) {
    return "Deve conter ao menos 1 caracter NUMÉRICO"
  }

  regex = /(?=.*[^A-Za-z0-9])/

  if (!regex.test(value)) {
    return "Deve conter ao menos 1 caracter ESPECIAL"
  }

  regex = /(?=.{8,})/

  if (!regex.test(value)) {
    return "Deve possuir ao menos 8 caracteres"
  }

  return true
}
