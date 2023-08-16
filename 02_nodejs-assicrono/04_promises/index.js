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

const user = loginUser('test@test.com', 'password')
  .then((user) => {
    console.log('Usuario logado com sucesso!');
    console.log('Dados do suario:', user);

    return getuserVideos();
  })
  .then((videos) => {
    console.log('Vídeos do usuário recuperados com sucesso!', videos);

    return getuserVideoDetails();
  })
  .then((videodetails) => {
    console.log('Detalhes do vídeo 1 do usuário:', videodetails);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
