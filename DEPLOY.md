# Deploy do portfólio na Vercel

## 1. Criar o repositório no GitHub

No terminal, dentro desta pasta (`Portifolio`):

```bash
git init
git add index.html style.css script.js assets/ README.md
git commit -m "feat: portfolio single page"
```

Crie o repositório em https://github.com/new com o nome **portfolio** (público, sem README inicial), depois:

```bash
git remote add origin https://github.com/kiograco/portfolio.git
git branch -M main
git push -u origin main
```

> O card "Portfólio" do site já aponta para `github.com/kiograco/portfolio` — o nome precisa ser exatamente esse.

## 2. Publicar na Vercel

1. Acesse https://vercel.com/new e faça login com o GitHub.
2. Importe o repositório **portfolio**.
3. Framework preset: **Other** (site estático, sem build).
4. Build command: vazio · Output directory: vazio (raiz).
5. Deploy. O site sai em `https://portfolio-<hash>.vercel.app`.

## 3. Depois do deploy

- Em Settings → Domains, renomeie para algo limpo (ex.: `caiograco.vercel.app`).
- Atualize o `demoUrl` do card Portfólio no `script.js` (troque `null` pela URL final) e o campo Website do repositório no GitHub.
- Adicione a URL do site na bio do GitHub e no LinkedIn (seção Destaques/Featured).
- Teste as metatags OG em https://www.opengraph.xyz após o deploy (a imagem `assets/og/og-image.jpg` precisa da URL absoluta do site para funcionar em compartilhamentos — troque para `https://SEU-SITE.vercel.app/assets/og/og-image.jpg` no index.html).
