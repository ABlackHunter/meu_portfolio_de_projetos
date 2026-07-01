# Executive Portfolio — Anderson Santos de Sousa

Portfólio web executivo, **bilíngue (PT/ES)**, com fundo 3D (Three.js), microinterações,
design premium (navy · graphite · gold) e modo **print/PDF**.

> Enterprise Program Director · PMO Executive · Digital Transformation · Technology Strategy · M&A / Carve-out

Stack: **HTML + CSS + JavaScript puro** (sem build, sem framework). Three.js é carregado via CDN.
Funciona abrindo o arquivo direto no navegador **ou** publicado em qualquer hosting estático.

---

## 1. Como rodar localmente

### Opção A — abrir direto (mais simples)
Dê duplo-clique em **`index.html`**. Tudo funciona, inclusive o fundo 3D
(usamos a build global do Three.js justamente para não depender de servidor).

### Opção B — servidor local (recomendado)
Evita qualquer bloqueio do navegador e simula o ambiente de produção:

```bash
# dentro da pasta portfolio-anderson/

# Python (já instalado na sua máquina)
python -m http.server 5173
# abra http://localhost:5173

# ou, se preferir Node:
npx serve .
```

---

## 2. Onde trocar a FOTO

A foto fica na pasta **`assets/`**.

1. Salve a foto real como **`assets/anderson.jpg`** (formato quadrado funciona melhor).
2. Pronto — a página usa esse arquivo automaticamente.

Enquanto o arquivo não existir, aparece um **placeholder elegante** (`assets/photo-placeholder.svg`).
Se quiser usar outro nome/arquivo, edite o `src` em `index.html`:

```html
<img id="execPhoto" src="assets/anderson.jpg" ... >
```

---

## 3. Onde editar os TEXTOS

**Todo o conteúdo está em um único arquivo: [`content.js`](content.js).**

- `CONTENT.pt` → versão em **Português**
- `CONTENT.es` → versão em **Espanhol**

Cada seção é um bloco fácil de achar: `hero`, `profile`, `signals`, `timeline`,
`programs`, `skills`, `education`, `contact`. Para editar uma frase, basta alterar
o texto entre aspas. Para adicionar um item à timeline, copie um bloco `{ ... }` e ajuste.

Dados de contato (telefone, e-mail, LinkedIn, cidade) ficam no objeto `CONTACT`,
no topo do `content.js` — mude em um só lugar e vale para os dois idiomas.

> ⚠️ Mantenha as duas versões (pt/es) com a mesma estrutura de itens.

---

## 4. Modo PDF / impressão

Clique em **“Salvar PDF”** (no topo ou na seção de contato) — abre a caixa de
impressão do navegador. Escolha **“Salvar como PDF”**.
Existe um CSS de impressão dedicado: fundo claro, texto preto, 3D oculto e layout
compacto, otimizado para 1–2 páginas A4.

---

## 5. Como publicar

O site é 100% estático. Suba a pasta `portfolio-anderson/` em qualquer um destes:

### GitHub Pages
```bash
git init && git add . && git commit -m "Executive portfolio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```
No GitHub: **Settings → Pages → Branch: main / root** → salve.
URL: `https://SEU_USUARIO.github.io/SEU_REPO/`.

### Vercel
- Importe o repositório em [vercel.com/new](https://vercel.com/new) **ou** rode `npx vercel` na pasta.
- Framework Preset: **Other**. Build command: *(vazio)*. Output dir: `.`

### Netlify
- Arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop) (deploy instantâneo), **ou**
- Conecte o repositório: Build command vazio, Publish directory `.`

---

## 6. Personalização rápida (cores e fontes)

Abra `styles.css` e ajuste as variáveis no topo (`:root`):

```css
--gold: #c9a24a;     /* dourado premium  */
--tech: #4f8ff7;     /* azul tecnológico */
--navy-900: #060c18; /* fundo principal  */
--font-display: "Sora", ...;   /* títulos */
--font-sans: "Inter", ...;     /* corpo   */
```

As mesmas cores são usadas no fundo 3D (`scene.js`, objeto `COLORS`).

---

## 7. Estrutura de arquivos

```
portfolio-anderson/
├─ index.html                 # estrutura da página
├─ styles.css                 # design + responsivo + print
├─ content.js                 # ★ TODO o texto (PT/ES) — edite aqui
├─ app.js                     # renderização, toggle de idioma, interações
├─ scene.js                   # fundo 3D (Three.js)
├─ README.md
└─ assets/
   ├─ anderson.jpg            # (você adiciona) foto real
   ├─ photo-placeholder.svg   # placeholder usado se a foto não existir
   └─ favicon.svg
```

---

## 8. Notas técnicas

- **Acessibilidade / performance:** respeita `prefers-reduced-motion` (desliga o 3D),
  reduz partículas no mobile e pausa a animação quando a aba fica em segundo plano.
- **Sem métricas inventadas:** todo o conteúdo vem do material fornecido.
- **Offline-friendly:** se o Three.js (CDN) ou o WebGL não carregarem, o site continua
  perfeito apenas com o gradiente de fundo.
- Idioma inicial segue o navegador (ou a última escolha salva em `localStorage`).
