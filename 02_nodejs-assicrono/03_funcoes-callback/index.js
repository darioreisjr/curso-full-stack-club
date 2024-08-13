// função sem o callback
// const loginUser = (email, password) => {
//   // Chamar banco de dados para pegar os dados do usuário
//   setTimeout(() => {
//     console.log('Usuario verificado no banco de dados!');
//     return { email };
//   }, 3000);
// };

// const user = loginUser("test@test.com", "password");

// console.log(user);

//vai retornar
// undefined
// Usuario verificado no banco de dados!

// função com callback
const loginUser = (email, password, callback, onError) => {
  // Chamar banco de dados para pegar os dados do usuário
  setTimeout(() => {
    //const error = true;
    const error = false;

    if (error) {
      return onError('Erro na conexão ao banco de dados!');
    }

    console.log('Usuario verificado no banco de dados!');
    callback({ email });
  }, 3000);
};

const getUserVideos = (onSucess, onError) => {
  // Chamar banco de dados para pegar os videos
  setTimeout(() => {
    console.log('Videos carregados!');
    onSucess(['Video 1', 'Video 2', 'Video 3']);
  }, 2000);
};

const getuserVideoDetails = (onSucess, onError) => {
  setTimeout(() => {
    console.log('Detalhes do vídeo carregados!');
    onSucess({ id: '1', name: 'Node.js assícrono', duration: 1 });
  }, 2000);
};

const user = loginUser(
  'test@test.com',
  'password',
  (user) => {
    console.log('Usuario Logado com sucesso!');
    console.log(user);

    getUserVideos(
      (videos) => {
        console.log('Vídeos do usuario recupeado com sucesso!', videos);
        getuserVideoDetails(
          (video) => {
            console.log('Detalhes do vídeo do usuario:', video);
          },(error)=>{
            console.log('Ocorreu um erro ao carregar os detalhes do vídeo:', error);
          },
        );
      },
      (error) => {
        console.log('Ocorreu um erro ao carregar os videos:', error);
      },
    );
  },
  (error) => {
    console.log('Ocorreu um erro:', error);
    // Ao callback de erro ser chamado, o resultado é passado como argumento
    // console.log(error);
  },
);
