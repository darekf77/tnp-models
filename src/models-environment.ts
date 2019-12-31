//#region @backend
import { ConnectionOptions } from 'typeorm';
//#endregion

import { ModelsLibTypes } from './models-libs';
import { ModelsNpm } from './models-npm';
import { Models } from './index';

export namespace ModelsEnvinronment {

  export type EnvironmentName = 'local' | 'static' | 'dev' | 'stage' | 'prod' | 'online' | 'test';



  export interface EnvConfigProject {
    baseUrl: string;
    host?: string; // generated
    externalHost?: string;
    name: string;  // checked
    type?: ModelsLibTypes.LibType; // checked

    port: number; // override type port
    //#region @backend
    $db?: ConnectionOptions;
    ommitAppBuild?: boolean;
    isWatchBuild?: boolean; // generated
    //#endregion
  }

  export type UIFramework = 'bootstrap' | 'material' | 'ionic';

  export interface EnvConfig {

    pathes?: any;
    isCoreProject?: boolean; // generated
    isSiteProject?: boolean; // generated
    isStandaloneProject?: boolean; // generated
    name?: EnvironmentName; // generated
    frameworks?: UIFramework[];
    domain?: string;
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
    currentProjectName?: string;
    currentProjectLocation?: string;
    currentProjectIsSite?: boolean;
    currentProjectIsStatic?: boolean;
    currentProjectComponentsFolder?: string;
    currentProjectType?: ModelsLibTypes.LibType;
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
        outDir?: Models.dev.BuildDir;
      }
    }

  }



}
