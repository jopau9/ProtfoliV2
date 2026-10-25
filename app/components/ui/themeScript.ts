/** Clau de localStorage on es desa la tria explícita de tema. */
export const THEME_STORAGE_KEY = "jp-theme";

/**
 * Inline al <head>: aplica la tria desada abans que es pinti res.
 * Viu fora de ThemeToggle perquè el layout (component de servidor) el pugui importar.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;
