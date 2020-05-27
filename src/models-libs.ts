export namespace ModelsLibTypes {

  export type FrameworkVersion = 'v1' | 'v2' | 'v3';
  export type LibType = 'unknow'
    | 'isomorphic-lib'
    | 'angular-lib' // https://cli.angular.io/
    | 'electron-lib' // https://github.com/maximegris/angular-electron
    | 'ionic-lib'
    | 'angular-client'
    | 'ionic-client'
    | 'workspace'
    | 'container'
    | 'docker'
    | 'vscode-ext'
    | 'chrome-ext'
    | 'unknow-npm-project'
    | 'game-engine-lib-pixi' // https://github.com/pixijs/pixi.js
    | 'game-engine-lib-phaser' // https://github.com/photonstorm/phaser
    | 'game-engine-lib-excalibur' // https://github.com/excaliburjs/Excalibur
    | 'game-engine-lib-babylon' // https://github.com/BabylonJS/Babylon.js
    ;

  export const GlobalLibTypeName = {
    isomorphicLib: 'isomorphic-lib',
    angularLib: 'angular-lib',
    electronLib: 'electron-lib',
    ionicLib: 'ionic-lib',
    angularClient: 'angular-client',
    ionicClient: 'ionic-client',
    workspace: 'workspace',
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
