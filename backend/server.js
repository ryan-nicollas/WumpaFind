const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    express.static(
        path.join(__dirname, "..")
    )
);

app.get("/api/populares", async (req, res) => {
    try {
        const resposta = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                    accept: "application/json"
                }
            }
        );

        if (!resposta.ok) {
            throw new Error(
                `TMDB respondeu com ${resposta.status}`
            );
        }

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Não foi possível carregar os filmes populares."
        });
    }
});

app.get("/api/filmes", async (req, res) => {
    const pesquisa = req.query.q;

    if (!pesquisa) {
        return res.status(400).json({
            erro: "Digite o nome de um filme."
        });
    }

    try {
        const resposta = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(pesquisa)}&language=pt-BR`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                    accept: "application/json"
                }
            }
        );

        if (!resposta.ok) {
            throw new Error(
                `TMDB respondeu com ${resposta.status}`
            );
        }

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Não foi possível buscar os filmes."
        });
    }
});

app.get("/api/filmes/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const resposta = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
                    accept: "application/json"
                }
            }
        );

        if (!resposta.ok) {
            throw new Error(
                `TMDB respondeu com ${resposta.status}`
            );
        }

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Não foi possível carregar os detalhes."
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `WumpaFind rodando em http://localhost:${PORT}`
    );
});