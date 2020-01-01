export namespace ModelsLibTypes {
  export type LibType = 'unknow'
    | 'angular-lib'
    // | 'angular-lib-v2'
    | 'isomorphic-lib'
    // | 'isomorphic-lib-v2'
    | 'angular-client'
    | 'ionic-client'
    | 'workspace'
    // | 'workspace-v2'
    | 'container'
    | 'docker'
    | 'vscode-ext'
    | 'chrome-ext'
    | 'unknow-npm-project';

  export const GlobalLibTypeName = {
    angularLib: 'angular-lib',
    // angularLibV2: 'angular-lib-v2',
    isomorphicLib: 'isomorphic-lib',
    // isomorphicLibV2: 'isomorphic-lib-v2',
    angularClient: 'angular-client',
    ionicClient: 'ionic-client',
    workspace: 'workspace',
    // workspaceV2: 'workspace-v2',
    container: 'container',
    docker: 'docker',
    unknowNpmProject: 'unknow-npm-project',
    vscodeExt: 'vscode-ext',
    chromeExt: 'chrome-ext',
    singleFileProject: 'single-file-project',
  };

  export const LibTypeArr: LibType[] = [
    GlobalLibTypeName.angularLib,
    GlobalLibTypeName.isomorphicLib,
    GlobalLibTypeName.angularClient,
    GlobalLibTypeName.ionicClient,
    GlobalLibTypeName.workspace,
    GlobalLibTypeName.container,
    GlobalLibTypeName.docker,
    GlobalLibTypeName.unknowNpmProject,
    GlobalLibTypeName.vscodeExt,
    GlobalLibTypeName.chromeExt,
  ] as LibType[];

  export type CoreLibCategory = LibType | 'common';

  export const CoreLibCategoryArr: CoreLibCategory[] = [
    GlobalLibTypeName.angularLib,
    GlobalLibTypeName.isomorphicLib,
    GlobalLibTypeName.angularClient,
    GlobalLibTypeName.ionicClient,
    GlobalLibTypeName.docker,
    'common'
  ] as CoreLibCategory[];

  export type NewFactoryType = LibType | 'model' | 'single-file-project';

}
