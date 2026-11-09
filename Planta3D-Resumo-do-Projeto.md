# Planta 3D da casa — resumo do projeto

Documento de memória para retomar o projeto. O código completo está no `index.html` da pasta `Planta3D-Site`. Este texto **não** recria o modelo sozinho: guarde também o `index.html`.

## 1. O que é
Maquete 3D interativa da casa, feita em um único arquivo HTML com Three.js (r128), publicada como site no GitHub Pages e instalável no celular como app.

- Modelo único, com botão **Telhado** para ligar e desligar a cobertura.
- Modo **Caminhar** em primeira pessoa, com teclado, mouse e joystick no celular.
- Funciona sem internet depois da primeira visita (service worker).

## 2. Origem
- Planta 2D enviada no início, com medidas internas livres dos cômodos.
- Plantas 1, 2 e 3 foram os testes iniciais. Ficou só a evolução da antiga "planta 5", em formato casa caixote.
- A escala da maquete foi estimada a partir da imagem: cerca de 37,9 px por metro. As medidas do 3D são **aproximadas**, e não de projeto.

## 3. Arquivos do site (pasta `Planta3D-Site`)
| Arquivo | Função |
|---|---|
| `index.html` | O modelo inteiro (código e dados) |
| `libs/three.min.js`, `libs/OrbitControls.js` | Biblioteca 3D, versão r128, guardada dentro do site |
| `manifest.webmanifest` | Nome e ícones, para instalar como app |
| `sw.js` | Guarda uma cópia no aparelho e confere versão nova ao abrir (troque `planta3d-vX` a cada atualização) |
| `icon-192.png`, `icon-512.png` | Ícones do app |
| `LEIA-ME.txt` | Instruções de publicação |

## 4. Como publicar e atualizar
1. Repositório público no GitHub (por exemplo `planta3d`), com `index.html` na **raiz**.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Endereço: `https://USUARIO.github.io/planta3d/`.
4. Atualizar: enviar os arquivos novos com o mesmo nome (Upload files ou GitHub Desktop), fazer o commit e esperar 1 a 2 minutos.
5. Instalar no celular: "Adicionar à tela inicial".

## 5. Comandos e botões do app
- **Barra de baixo:** Telhado, Porta de entrada, Porta ripada, Porta corredor.
- **Canto superior esquerdo:** Ocultar menu, Nomes, Caminhar.
- **Caminhar:** W A S D andam, setas giram, Shift corre, Esc sai. Arrastar na tela olha em volta (o mundo acompanha o dedo). O início é fora da casa, ao lado da piscina. Paredes, bancadas, geladeiras e a piscina bloqueiam.

## 6. Decisões de projeto (estado final)
**Casa**
- Sala com pé-direito de 3,8 m e o resto da casa a 2,8 m (formato caixote, lajes planas).
- Entrada única pela cozinha: porta de madeira de 2,0 m, com 4 folhas, sendo as 2 das pontas fixas e as 2 do meio correndo sobre elas.
- Porta de correr ripada entre sala e cozinha. Aberta, corre atrás do aquário.
- Aquário de 2,0 × 0,6 × 0,6 m sobre base de alvenaria, junto à parede da despensa.
- Despensa menor, com porta de correr de madeira. Lavanderia maior, com porta para fora na quina esquerda (varal) e **sem porta** para a despensa.
- Porta de correr de madeira na entrada do corredor, e porta de 0,9 m no fim dele, abrindo para dentro do quarto de casal (dobradiça à esquerda).
- Quarto de casal só com cama, criados-mudos e TV na parede à frente da cama.
- Closet com armário marrom escuro, e porta de blindex de 75 cm para o banheiro da suíte. Espelho grande ao lado da porta.
- Pisos: cinza mais escuro na casa, cinza claro nos banheiros e na lavanderia. Azulejo nos banheiros.

**Sala**
- Sofá de couro marrom escuro em L, flutuando no meio, tapete de pele de vaca, rack baixo (0,60 m) preto e marrom escuro rústico com TV na parede, árvore de Natal na quina junto à porta de vidro.

**Cozinha (planta final)**
- Granito preto São Gabriel em L (parede oeste e parede da frente), eletrodomésticos sobre a pedra, uma prateleira suspensa.
- Pia dupla sob janela ampla, centralizada. Filtro de água branco no canto sudeste.
- Ilha norte-sul de 1,2 m, com cooktop na ponta sul (4 cm para dentro da borda), de frente para a pia. Madeira escura em L no lado leste e na ponta norte, com 4 banquetas de madeira. Pendentes pretos.
- Janela e porta de entrada alinhadas com a ilha.

**Tablado e área externa**
- Tablado de madeira ripada, com rede e cachorro de porte médio.
- Garagem com piso escuro e telhado de telha (3,5 m na versão coberta).
- Área de churrasco: churrasqueira de tijolo, bancada de pedra em U com 4 banquetas de balcão, cervejeira vertical encostada na parede, bancada com sacos de carvão, mesa de bilhar (horizontal) e mesa de jantar comprida escura, suporte de tacos de parede.
- Piscina azul.

## 7. O que ficou de fora ou pendente
- Medidas livres com espessura de parede: **não concluído.** A planta baixa com as medidas para marcação do terreno e do alicerce não foi gerada. Faça isso com engenheiro ou arquiteto, com cotas de projeto.
- Walls caramelo e palmeiras foram testadas e depois desfeitas.
- A planta 1, 2 e 3 foram retiradas do site.
- Nada foi testado em celular real.

## 8. Cuidados
- O site no GitHub Pages público pode ser aberto por quem tiver o link.
- O modelo é ilustrativo: não substitui projeto arquitetônico, estrutural, hidráulico ou elétrico.
- Guarde `index.html` e a pasta `libs` em um local próprio, fora do OneDrive da empresa.
