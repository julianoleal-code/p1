# WeatherNow 

Portal de previsão do tempo desenvolvido com **Next.js 14** e **App Router**.  
Consome a API da [OpenWeatherMap](https://openweathermap.org/api) para exibir clima em tempo real por cidade.

**Aluno:** Juliano Bichuli Leal  
**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas – FAETERJ Barra Mansa  
**Disciplina:** Programação e Design para Web II

---

## Como configurar a API Key

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

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
