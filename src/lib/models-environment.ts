//#region @backend
import { ConnectionOptions } from 'typeorm';
//#endregion

import { ConfigModels } from 'tnp-config';
import { ModelsNpm } from './models-npm';
import { ModelsDev } from './models-dev';

export namespace ModelsEnvinronment {

  export interface FiredevLoaderConfig {
    name?: FiredevLoaders;
    color?: string;
  }

  export interface EnvConfigProject {
    baseUrl: string;
    host?: string; // generated
    externalHost?: string;
    name: string;  // checked
    type?: ConfigModels.LibType; // checked

    port: number; // override type port
    //#region @backend
    $db?: ConnectionOptions;
    ommitAppBuild?: boolean;
    isWatchBuild?: boolean; // generated
    isWebsqlBuild?: boolean; // generated
    //#endregion
  }

  export type FiredevLoaders = 'lds-default' |
    'lds-ellipsis' |
    'lds-facebook' |
    'lds-grid' |
    'lds-heart' |
    'lds-ripple'

  export interface EnvConfig {

    /**
     * angular production mode
     */
    angularProd?: boolean;
    /**
     * replace title in firedev app
     */
    title?: string;
    /**
     * override pwa manifest values
     */
    pwa?: {
      name?: string;
      short_name?: string;
      start_url?: string;
      // theme_color?: string;
      // background_color?: string;
      // display?: string;
      // scope?: string;
    },

    loading?: {
      /**
       * this is persented before boostrapign of angular
       * at the begining of first index.html fetch
       */
      preAngularBootstrap?: {
        /**
         * loder path to image or
         * build in loader config
         */
        loader?: string | FiredevLoaderConfig,
        background?: string,
      },
      /**
       * this loader is presented when
       * firedev app data is being loader
       * (right after *preAngularBootstrap*)
       */
      afterAngularBootstrap?: {
        /**
        * loder path to image or
        * build in loader config
        */
        loader?: string | FiredevLoaderConfig,
        background?: string;
      },
    },

    pathes?: any;
    config?: any;
    configsFromJs?: any;
    /**
     * I will check if code should be available for npm version
     */
    notForNpm?: boolean;
    isCoreProject?: boolean; // generated
    isStandaloneProject?: boolean; // generated
    isSmartContainer?: boolean; // generated
    isSmartContainerTargetProject?: boolean; // generated
    name?: ConfigModels.EnvironmentName; // generated
    frameworks?: ConfigModels.UIFramework[];
    /**
     * override domain name (use useDomain property to make it work)
     */
    domain?: string;
    /**
     * actually build enviroment for domain from enviroment.js
     */
    useDomain?: boolean;
    dynamicGenIps?: boolean;
    ip?: string | 'localhost';
    workspace: {
      workspace: EnvConfigProject;
      build?: {
        browser: {
          minify: boolean;
          aot: boolean;
          production: boolean;
        },
        server: {
          minify: boolean;
          production: boolean;
        }
      },
      projects: EnvConfigProject[]
    }
    clientProjectName?: string;
    currentLibProjectSourceFolder?: 'src' | 'components';
    currentProjectName?: string;
    currentProjectGenericName?: string;
    currentProjectLaunchConfiguration?: string;
    currentProjectTasksConfiguration?: string;
    currentProjectPort?: number;
    currentProjectLocation?: string;
    currentFrameworkVersion?: string;
    currentProjectIsSite?: boolean;
    currentProjectIsStrictSite?: boolean;
    currentProjectIsDependencySite?: boolean;
    currentProjectIsStatic?: boolean;
    currentProjectComponentsFolder?: string;
    currentProjectTsConfigPathes?: string;
    currentProjectTsConfigPathesForBrowser?: string;
    currentProjectType?: ConfigModels.LibType;
    packageJSON?: ModelsNpm.IPackageJSON;

    cloud?: {
      ports: {
        update: number;
      }
    }

    build?: {
      number?: number;
      hash?: string;
      date?: Date;
      options?: {
        isWatchBuild?: boolean;
        isWebsqlBuild?: boolean;
        outDir?: ModelsDev.BuildDir;
      }
    }

  }



}
