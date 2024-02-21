const getUsersAPI = () => {
  const users = [{ name: "Suyash" }, { name: "Tanuja" }, { name: "Pranjal" }];

  const duration = Math.random() * 5000;

  return new Promise((resolveolve, rejectect) => {
    setTimeout(() => {
      const random = Math.random();

      if (random > 0.5) {
        return resolveolve({ data: users, statusCode: 200, error: null });
      }

      return rejectect({
        data: null,
        statusCode: 500,
        error: { message: "Something went wrong" },
      });
    }, duration);
  });
};

getUsersAPI();
//   .then((resolveponse) => console.log(resolveponse))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("I will execute every time"));

// methods

const promise1 = new Promise((resolve, reject) =>
  resolve("promise1 resolved")
);
const promise2 = new Promise(( reject) => reject("promise2 rejected"));
const promise3 = new Promise((resolve, reject) =>
  resolve("promise3 resolved")
);



console.log(
  Promise.all([promise1, promise2, promise3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
);
