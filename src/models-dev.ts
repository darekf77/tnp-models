import { ModelsEnvinronment } from './models-environment';
import { ConfigModels } from 'tnp-config';

export namespace ModelsDev {

  export type InitArgOptions = {
    skipNodeModules: boolean;
    recrusive: boolean;
    /**
     * init without installing node modules
     */
    struct?: boolean;
    env: ConfigModels.EnvironmentName;
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
    useTempFolder?: boolean;
    uglify?: boolean;
    obscure?: boolean;
    nodts?: boolean;
    args?: string;
    bumbVersionIn?: string[];
  }

  export interface BuildServeArgsServe {
    port: string;
    baseUrl: string;
    outDir: string;
  }

  export type BuildDir = 'dist' | 'bundle' | 'docs';

  export type ReplacementString = '@backend' | '@backendFunc' | '@cutCodeIfTrue' | '@cutCodeIfTrue' | '@notForNpm';
  export const ReplacementStringArr = [
    '@backend', '@backendFunc', '@cutCodeIfTrue', '@cutCodeIfTrue', "@notForNpm"
  ] as ReplacementString[];

  export type Replacement = (string | [string, string] | [string,
    (expression: any, env: ModelsEnvinronment.EnvConfig) => () => boolean]);

  export interface ReplaceOptionsExtended {

    replacements: Replacement[];
    env?: ModelsEnvinronment.EnvConfig
  }

  export interface StartForOptions {
    progressCallback?: (fractionValue: number) => any;
    prod?: boolean;
    watch?: boolean;
    nodts?: boolean;
    uglify?: boolean;
    obscure?: boolean;
    watchOnly?: boolean;
    outDir?: BuildDir;
    appBuild?: boolean;
    args?: string;
    staticBuildAllowed?: boolean;
  };

}