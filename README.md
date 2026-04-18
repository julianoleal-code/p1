WeatherNow 

Portal de previsão do tempo desenvolvido com **Next.js 14** e **App Router**.  
Consome a API da [OpenWeatherMap](https://openweathermap.org/api) para exibir clima em tempo real por cidade.

**Aluno:** Juliano Bichuli Leal  
**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas – FAETERJ Barra Mansa  
**Disciplina:** Programação e Design para Web II

---

Como configurar a API Key

1. Crie um arquivo chamado `.env.local` na raiz do projeto (se não existir)
2. Adicione a linha abaixo com a chave fornecida pelo professor:

```
NEXT_PUBLIC_WEATHER_KEY=sua_chave_aqui
```

> **Nunca suba o `.env.local` para o GitHub!** Ele já está no `.gitignore`.

---

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador em: [http://localhost:3000](http://localhost:3000)


