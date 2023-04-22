import { ConfigModels } from 'tnp-config';

export namespace ModelsPwa {

  export interface ManifestIcon {
    "src": string; // "assets/icons/icon-96x96.png",
    "sizes": string; // "96x96",
    "type": string; // "image/png",
    "purpose": string; // "maskable any"
  }

  export interface Manifest {
    "name": string;//  "app",
    "short_name": string;//  "app",
    "theme_color": string;// "#1976d2",
    "background_color": string;//  "#fafafa",
    "display": "standalone",
    "scope": string;// "./",
    "start_url": string;//  "start_url": "./", => "start_url" "https://darekf77.github.io/bs4-breakpoint/"
    icons: ManifestIcon[];
  };

}
