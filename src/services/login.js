export function login(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "teste@gmail.com" && password === "teste") {
      setTimeout(() => {
        resolve(
          {
            name: "Usuário Teste",
            email: "teste@gmail.com",
          },
          2000
        );
      });
    } else {
      setTimeout(() => reject(null), 2000)
    }
  });
}
