const loginUser = (email, password) => {
  // Retorne uma promise
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false; // troque para true para força este erro
      if (error) {
        return reject('Erro na conexão ao banco.');
      }
      resolve({ email, password });
    }, 3000);
  });
};

const getuserVideos = () => {
  return new Promise((resolve, reject) => {
    const error = false; // troque para true para força este erro
    if (error) {
      return reject('Erro ao recuperar vídeos.');
    }
    setTimeout(() => {
      resolve(['Video 1', 'Video 2', 'Video 3']);
    }, 2000);
  });
};

const getuserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    const error = false; // troque para true para força este erro
    if (error) {
      return reject('Erro ao recuperar detalhes do vídeo.');
    }
    setTimeout(() => {
      resolve({ id: '1', name: 'Node.js Assíncrono', duration: 1 });
    }, 2000);
  });
};

const getUserData = async () => {
  try {
    const user = await loginUser('test@test.com', 'password');

    console.log('Usuário logado com sucesso!');
    console.log('Dados do usuário: ', user);

    const videos = await getuserVideos();

    console.log('Vídeos do usuário recuperados com sucesso!', videos);

    const videodetails = await getuserVideoDetails();

    console.log('Detalhes do áudio 1 do usuário:', videodetails);
  } catch (error) {
    console.log(error);
  }
};

// console.log('Pegando dados do usuário...');

// getUserData().then(() => {
//   console.log('Dados do usuário recuperados com sucesso!');
// });

// Outra forma de fazer o mesmo codigo acima
const init = async () => {
  console.log('Pegando dados do usuário...');

  await getUserData();

  console.log('Dados do usuário recuperados com sucesso!');
};

init();
