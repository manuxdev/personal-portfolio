"use client";
export default function ViewTransition() {
  window.navigation.addEventListener("navigate", (e) => {
    const toUrl = new URL(e.destination.url);

    //revisar si es pagina externa si es asi ignorar
    if (location.origin !== toUrl.origin) return;

    //si es nav en el mismo dominio, intercept
    e.intercept({
      async handler() {
        //cargar pagina de destino utilizando fetch
        const response = await fetch(toUrl.pathname); //clean-code
        const text = await response.text();
        //quedarnos con el contenido de lhtml dentro de la etiqueta body
        const [, data] = text.match(/<body>([\s\S]*)<\/body>/i);

        document.startViewTransition(() => {
          // scroll hacia arriba
          document.body.innerHTML = data;
          document.documentElement.scrollTop = 0;
        });
      },
    });
  });
}
