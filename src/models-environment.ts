//#region @backend
import { ConnectionOptions } from 'typeorm';
//#endregion

import { ConfigModels } from 'tnp-config';
import { ModelsNpm } from './models-npm';
import { ModelsDev } from './models-dev';

export namespace ModelsEnvinronment {

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
    //#endregion
  }

  export interface EnvConfig {

    pathes?: any;
    config?: any;
    configsFromJs?: any;
    /**
     * I will check if code should be available for npm version
     */
    notForNpm?: boolean;
    isCoreProject?: boolean; // generated
    isStandaloneProject?: boolean; // generated
    name?: ConfigModels.EnvironmentName; // generated
    frameworks?: ConfigModels.UIFramework[];
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
    clientProjectName?: string;
    currentLibProjectSourceFolder?: 'src' | 'components';
    currentProjectName?: string;
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
        outDir?: ModelsDev.BuildDir;
      }
    }

  }



}
