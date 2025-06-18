document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.flashcard-container');
    
    // Dados dos flashcards (pode ser substituído por uma chamada API)
    const flashcardsData = [
        {
            id: 1,
            frontTitle: "JavaScript",
            frontImage: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            backTitle: "O que é JavaScript?",
            backContent: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
            backImage: "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png"
        },
        {
            id: 2,
            frontTitle: "HTML",
            frontImage: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
            backTitle: "O que é HTML?",
            backContent: "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.",
            backImage: "https://miro.medium.com/v2/resize:fit:1400/1*lJ32Bl-lHWmNMUSiSq17gQ.png"
        },
        {
            id: 3,
            frontTitle: "CSS",
            frontImage: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
            backTitle: "O que é CSS?",
            backContent: "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML. O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
            backImage: "https://miro.medium.com/v2/resize:fit:1400/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
        },
        {
            id: 4,
            frontTitle: "React",
            frontImage: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            backTitle: "O que é React?",
            backContent: "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
            backImage: "https://miro.medium.com/v2/resize:fit:1400/1*HSisLuifMO6KbLfPOKtLow.jpeg"
        }
    ];

    // Criar flashcards dinamicamente
    flashcardsData.forEach(cardData => {
        const card = createFlashCard(cardData);
        container.appendChild(card);
    });

    // Função para criar um flashcard
    function createFlashCard(data) {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.dataset.id = data.id;

        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <img src="${data.frontImage}" alt="${data.frontTitle}">
                    <h2>${data.frontTitle}</h2>
                    <p>Clique para virar</p>
                </div>
                <div class="flashcard-back">
                    <h2>${data.backTitle}</h2>
                    <img src="${data.backImage}" alt="${data.backTitle}">
                    <p>${data.backContent}</p>
                </div>
            </div>
        `;

        // Adicionar evento de clique
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        return card;
    }
});
