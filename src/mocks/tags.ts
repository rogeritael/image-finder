const default_path = "../assets/images";

export const tags = [
    {
        name: 'Nome de teste',
        path: `${default_path}/`,
        tags: ['mobile', 'dark-mode'],
        links: [
            {
                linkName: 'imagem original',
                linkUrl: 'https://google-images/image001'
            },
        ]
    },
    {
        name: 'Imagem 45',
        path: `${default_path}/`,
        tags: ['mobile', 'desktop'],
        links: [
            {
                linkName: 'imagem original',
                linkUrl: 'https://google-images/image001'
            },
        ]
    },
    {
        name: 'Alguma coisa',
        path: `${default_path}/`,
        tags: ['ideias', 'light'],
        links: [
            {
                linkName: 'imagem original',
                linkUrl: 'https://google-images/image001'
            },
        ]
    },
]


//escolher um caminho a partir do meu site
//o app vai percorrer as imagens contidas nesse caminho, e para cada uma vai adicionar o path e um nome default
//depois o usuário escolhe como vai trata-las

//PROFILE / GROUPS -> um usuário pode ter vários profiles, 1 na versão gratuita, e 10 na versão paga, onde ele pode dividir as imagens, por exemplo,
//referências, ideias, referencias descartadas


// ao iniciar ele cria esse array de imagens com as informações no localStorage, e editamos a partir de lá
//podemos exportar as informações salvas no localstorage e importar em outro computador