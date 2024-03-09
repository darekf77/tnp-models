import { ModelsEnvinronment } from './models-environment';
import { ConfigModels } from 'tnp-config';

export namespace ModelsDev {

  export type InitArgOptions = {
    skipNodeModules?: boolean;
    recrusive?: boolean;
    branding?: boolean;
    skipSmartContainerDistInit?: boolean;
    /**
     * init without installing node modules
     */
    struct?: boolean;
    websql?: boolean;
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
    includeNodeModules?: boolean;
    nodts?: boolean;
    args?: string;
    /**
     * quick automatic release of lib
     */
    automaticRelease?: boolean;
    /**
    * quick automatic release of docs app(s)
    */
    automaticReleaseDocs?: boolean;
    bumbVersionIn?: string[];
    /**
     * Force relase all project (ommit release cache)
     */
    all?: boolean;
    /**
    * release only trusted packages for current framework version
    */
    trusted?: boolean;
    shouldReleaseLibrary?: boolean;
    releaseType: 'major' | 'minor' | 'patch';
  }


  export interface TscCompileOptions {
    cwd: string;
    watch?: boolean;
    outDir?: BuildDir;
    generateDeclarations?: boolean;
    tsExe?: string;
    diagnostics?: boolean;
    hideErrors?: boolean;
    debug?: boolean;
  }


  export interface BuildServeArgsServe {
    port: string;
    baseUrl: string;
    outDir: string;
  }

  export type BuildDir = 'dist';
  export type BuildDirBrowser = 'browser' | 'websql';

  export type ReplacementString = '@backend' | '@backendFunc' | '@cutCodeIfTrue' | '@cutCodeIfFalse' | '@notForNpm';
  export const ReplacementStringArr = [
    '@backend', '@backendFunc', '@cutCodeIfTrue', '@cutCodeIfFalse', "@notForNpm"
  ] as ReplacementString[];

  export type Replacement = (ReplacementString
    | [ReplacementString, string]
    | [ReplacementString, (expression: any, env: ModelsEnvinronment.EnvConfig) => () => boolean]
  );

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
    websql?: boolean;
    obscure?: boolean;
    includeNodeModules?: boolean;
    watchOnly?: boolean;
    outDir?: BuildDir;
    appBuild?: boolean;
    args?: string;
    staticBuildAllowed?: boolean;
  };

}
