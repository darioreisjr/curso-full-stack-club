const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve([{ id: '1', name: 'Macbook', price: 900 }]);
      reject('Erro ao carregar os produtos'); //Caso queira simular um error
    }, 2000);
  });
};

const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: '1', name: 'Notebook' }]);
    }, 2000);
  });
};

const loadsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: '1', name: 'Dario Reis', age: 29 }]);
    }, 2000);
  });
};

const init = async () => {
  // const products = await loadProducts();
  // const categories = await loadCategories();
  // const users = await loadsers();

  // console.log({
  //   products,
  //   categories,
  //   users,
  // });

  // Promiise.all executa várias promises simultâneamente
  // try {
  //   const [products, categories, users] = await Promise.all([
  //     loadProducts(),
  //     loadCategories(),
  //     loadsers(),
  //   ]);

  //   console.log({
  //     products,
  //     categories,
  //     users,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const results = await Promise.allSettled([
      loadProducts(),
      loadCategories(),
      loadsers(),
    ]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

init();
