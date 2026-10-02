const campoPesquisa = document.getElementById("campoPesquisa");
const botaoPesquisar = document.getElementById("botaoPesquisar");
const listaFilmes = document.getElementById("listaFilmes");
const tituloResultados = document.getElementById("tituloResultados");

const modalFilme = document.getElementById("modalFilme");
const conteudoModal = document.getElementById("conteudoModal");
const fecharModal = document.getElementById("fecharModal");
const modalOverlay = document.getElementById("modalOverlay");

async function carregarPopulares() {
    tituloResultados.textContent = "Filmes populares";

    listaFilmes.innerHTML = `
        <p class="mensagem">
            Carregando filmes...
        </p>
    `;

    try {
        const resposta = await fetch("/api/populares");

        if (!resposta.ok) {
            throw new Error(
                "Erro ao carregar filmes populares."
            );
        }

        const dados = await resposta.json();

        mostrarFilmes(dados.results);

    } catch (erro) {
        console.error(erro);

        listaFilmes.innerHTML = `
            <p class="mensagem">
                Não foi possível carregar os filmes.
            </p>
        `;
    }
}

async function pesquisarFilmes() {
    const pesquisa = campoPesquisa.value.trim();

    if (pesquisa === "") {
        carregarPopulares();
        return;
    }

    tituloResultados.textContent =
        `Resultados para "${pesquisa}"`;

    listaFilmes.innerHTML = `
        <p class="mensagem">
            Buscando filmes...
        </p>
    `;

    try {
        const resposta = await fetch(
            `/api/filmes?q=${encodeURIComponent(pesquisa)}`
        );

        if (!resposta.ok) {
            throw new Error(
                "Erro ao buscar filmes."
            );
        }

        const dados = await resposta.json();

        mostrarFilmes(dados.results);

    } catch (erro) {
        console.error(erro);

        listaFilmes.innerHTML = `
            <p class="mensagem">
                Não foi possível carregar os filmes.
            </p>
        `;
    }
}

function mostrarFilmes(filmes) {
    listaFilmes.innerHTML = "";

    if (!filmes || filmes.length === 0) {
        listaFilmes.innerHTML = `
            <p class="mensagem">
                Nenhum filme encontrado.
            </p>
        `;

        return;
    }

    filmes.forEach(function (filme) {
        const card = document.createElement("article");

        card.classList.add("card-filme");

        const poster = filme.poster_path
            ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
            : "";

        const ano = filme.release_date
            ? filme.release_date.substring(0, 4)
            : "—";

        const nota =
            typeof filme.vote_average === "number"
                ? filme.vote_average.toFixed(1)
                : "—";

        const titulo =
            filme.title || "Título indisponível";

        card.innerHTML = `
            <div class="poster-container">

                ${
                    poster
                        ? `
                            <img
                                src="${poster}"
                                alt="Pôster de ${titulo}"
                                loading="lazy"
                            >
                        `
                        : `
                            <div class="sem-poster">
                                🎬
                            </div>
                        `
                }

                <div class="nota-poster">
                    <span>★</span> ${nota}
                </div>

            </div>

            <div class="info-filme">

                <h3>${titulo}</h3>

                <div class="meta">
                    <span>${ano}</span>
                </div>

            </div>
        `;

        card.addEventListener(
            "click",
            function () {
                abrirDetalhes(filme.id);
            }
        );

        listaFilmes.appendChild(card);
    });
}

async function abrirDetalhes(id) {
    modalFilme.classList.add("ativo");

    modalFilme.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-aberto"
    );

    conteudoModal.innerHTML = `
        <div class="loading-modal">
            Carregando detalhes...
        </div>
    `;

    try {
        const resposta = await fetch(
            `/api/filmes/${id}`
        );

        if (!resposta.ok) {
            throw new Error(
                "Erro ao carregar detalhes."
            );
        }

        const filme = await resposta.json();

        mostrarDetalhes(filme);

    } catch (erro) {
        console.error(erro);

        conteudoModal.innerHTML = `
            <div class="loading-modal">
                Não foi possível carregar
                os detalhes deste filme.
            </div>
        `;
    }
}

function mostrarDetalhes(filme) {
    const backdrop = filme.backdrop_path
        ? `https://image.tmdb.org/t/p/original${filme.backdrop_path}`
        : "";

    const ano = filme.release_date
        ? filme.release_date.substring(0, 4)
        : "—";

    const nota =
        typeof filme.vote_average === "number"
            ? filme.vote_average.toFixed(1)
            : "—";

    const duracao =
        formatarDuracao(filme.runtime);

    const generos = filme.genres
        ? filme.genres
              .map(function (genero) {
                  return `
                      <span class="genero">
                          ${genero.name}
                      </span>
                  `;
              })
              .join("")
        : "";

    conteudoModal.innerHTML = `
        <div
            class="modal-backdrop"
            ${
                backdrop
                    ? `style="background-image: url('${backdrop}')"`
                    : ""
            }
        >

            <div class="modal-info">

                <h2>
                    ${filme.title}
                </h2>

                ${
                    filme.tagline
                        ? `
                            <p class="modal-tagline">
                                ${filme.tagline}
                            </p>
                        `
                        : ""
                }

                <div class="modal-meta">

                    <span>
                        ${ano}
                    </span>

                    <span>
                        ${duracao}
                    </span>

                    <span class="avaliacao">
                        ★ ${nota}
                    </span>

                </div>

            </div>

        </div>

        <div class="modal-body">

            <div class="generos">
                ${generos}
            </div>

            <h3>Sinopse</h3>

            <p class="modal-sinopse">
                ${
                    filme.overview ||
                    "Sinopse não disponível."
                }
            </p>

        </div>
    `;
}

function formatarDuracao(minutos) {
    if (!minutos) {
        return "Duração indisponível";
    }

    const horas =
        Math.floor(minutos / 60);

    const minutosRestantes =
        minutos % 60;

    return `${horas}h ${minutosRestantes}min`;
}

function fecharDetalhes() {
    modalFilme.classList.remove("ativo");

    modalFilme.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-aberto"
    );
}

botaoPesquisar.addEventListener(
    "click",
    pesquisarFilmes
);

campoPesquisa.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            pesquisarFilmes();
        }
    }
);

fecharModal.addEventListener(
    "click",
    fecharDetalhes
);

modalOverlay.addEventListener(
    "click",
    fecharDetalhes
);

document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.key === "Escape" &&
            modalFilme.classList.contains("ativo")
        ) {
            fecharDetalhes();
        }
    }
);

carregarPopulares();