import { ModelsEnvinronment } from './models-environment';
import { ModelsOther } from './models-other';

export namespace ModelsDev {

  export type ProjectBuild = { project: ModelsOther.IProject; appBuild: boolean; };

  export type InitArgOptions = {
    skipNodeModules: boolean;
    recrusive: boolean;
    /**
     * init without installing node modules
     */
    struct?: boolean;
    env: ModelsEnvinronment.EnvironmentName;
  }


  export interface ProjectForAutoBuild {
    cwd: string,
    command: string;
    commandWatch: string;
    args?: string[];
  }

  export interface ProjectForAutoRelease {
    cwd: string,
    command: string;
    args?: string[];
  }

  export interface AutoActionsUser {
    builds?: ProjectForAutoBuild[];
    autoreleases?: ProjectForAutoRelease[];
  }


  export interface ReleaseOptions {
    prod?: boolean;
    args?: string;
    bumbVersionIn?: string[];
  }

  export interface RunOptions {

    /**
     * Show process output
     */
    output?: boolean;

    silence?: boolean;

    /**
     * Modify output line by line
     */
    outputLineReplace?: (outputLine: string) => string;


    // detached?: boolean;
    cwd?: string;

    /**
     * Try command again after fail after n miliseconds
     */
    tryAgainWhenFailAfter?: number;

    /**
     * Use big buffer for big webpack logs
     */
    biggerBuffer?: boolean;
  }


  export interface BuildServeArgsServe {
    port: string;
    baseUrl: string;
    outDir: string;
  }

  export type BuildDir = 'dist' | 'bundle' | 'docs';


  export interface ReplaceOptionsExtended {

    replacements: (string | [string, string] | [string,
      (expression: any, env: ModelsEnvinronment.EnvConfig) => () => boolean])[];
    env?: ModelsEnvinronment.EnvConfig
  }

  export interface StartForOptions {
    progressCallback?: (fractionValue: number) => any;
    prod?: boolean;
    watch?: boolean;
    outDir?: BuildDir;
    appBuild?: boolean;
    args?: string;
    staticBuildAllowed?: boolean;
  };


  export interface IBuildOptions extends StartForOptions {
    noConsoleClear?: boolean;
    genOnlyClientCode?: boolean;
    onlyBackend?: boolean;
    baseHref?: string;
    onlyWatchNoBuild?: boolean;
    buildForAllClients?: boolean;
    forClient?: ModelsOther.IProject[] | string[];
    copyto?: ModelsOther.IProject[] | string[];
    additionalIsomorphicLibs?: string[];
  }


}
