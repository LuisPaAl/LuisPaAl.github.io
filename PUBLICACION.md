# Publicar luisepadilla.com (GitHub Pages + Porkbun)

Este ZIP contiene el sitio completo con metadata SEO y configuración de dominio. **No subir el ZIP tal cual**: descomprímelo y sube los archivos y la carpeta `assets/`.

## A) Registrar el dominio

1. Ir a https://porkbun.com/, buscar `luisepadilla.com` y comprobar disponibilidad.
2. Si está disponible, registrarlo a tu nombre y completar verificación de email. Solo se requiere el dominio; no comprar hosting adicional.
3. Activar 2FA y renovación automática, y revisar la tarifa de renovación.

## B) Publicar

1. Crear cuenta en https://github.com/ (si aún no la tienes).
2. Crear repositorio público llamado `TU-USUARIO.github.io` reemplazando TU-USUARIO por tu nombre exacto de usuario GitHub.
3. Subir todo el contenido DESCOMPRIMIDO de este ZIP a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `CNAME`, `robots.txt`, `sitemap.xml`, `.nojekyll`, y la carpeta `assets`. No subir PUBLICACION.md ni README.md si no los necesitas (pueden quedarse).
4. Ir a Settings -> Pages -> Build and deployment -> Deploy from a branch -> main -> /(root) -> Save.
5. En Settings -> Pages -> Custom domain escribir `luisepadilla.com` y guardar (el CNAME ya estará incluido).

## C) Configurar DNS en Porkbun

Ir a Domain Management -> DNS, quitar únicamente registros de parking o redirección que entren en conflicto en @ o www, e insertar:

| Type | Host | Answer/Value |
|---|---|---|
| A | (vacío, raíz) | 185.199.108.153 |
| A | (vacío, raíz) | 185.199.109.153 |
| A | (vacío, raíz) | 185.199.110.153 |
| A | (vacío, raíz) | 185.199.111.153 |
| CNAME | www | TU-USUARIO.github.io |

IMPORTANTE: `TU-USUARIO.github.io` no es literal. Sustituir por tu usuario real de GitHub, no por `luisepadilla.com` ni por la URL que contiene una ruta de repositorio.

Deja los demás registros DNS si están prestando servicios; no borres registros de validación ni de correo sin comprobar antes su función.

La propagación puede tardar hasta 24 horas. Después de que GitHub verifique el DNS, activar **Enforce HTTPS** en Settings -> Pages. Para mayor seguridad, comprobar la titularidad del dominio en Settings -> Pages -> Verify domain (TXT que proporciona GitHub).

## D) Google

1. https://search.google.com/search-console/welcome
2. Add property -> Domain -> `luisepadilla.com`. Copiar TXT de verificación y añadirlo en Porkbun DNS (host vacío).
3. En Search Console: Sitemaps -> `https://luisepadilla.com/sitemap.xml`.
4. En URL Inspection solicitar indexación de `https://luisepadilla.com/`. Google no garantiza indexación ni ranking; puede tardar días o semanas.

## Documentación oficial

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://kb.porkbun.com/article/68-what-is-dns-and-how-do-i-edit-it
