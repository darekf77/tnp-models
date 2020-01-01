import * as _ from 'lodash';
import { ModelsLibTypes } from './models-libs';
import { ModelsEnvinronment } from './models-environment';

export namespace ModelsOther {

  export type ModifiedFiles = { modifiedFiles: string[] };

  export class Range {

    static from(from: number) {
      // const self = this;
      return {
        to(to: number) {
          return new Range(from, to);
        }
      }
    }

    constructor(
      public from: number,
      public to: number) {
      if (_.isNative(from) || _.isNative(to)) {
        throw `This Range type is only for positive numbers`
      }
    }

    get length() {
      return this.to - this.from;
    }

    get array() {
      const arr = [];
      for (let index = this.from; index <= this.to; index++) {
        arr.push(index);
      }
      return arr;
    }

    contains(anotherRangeOrNumber: Range | number) {
      if (_.isNumber(anotherRangeOrNumber)) {
        return anotherRangeOrNumber >= this.from && anotherRangeOrNumber <= this.to;
      }
      anotherRangeOrNumber = anotherRangeOrNumber as Range;

      return (anotherRangeOrNumber.from >= this.from && anotherRangeOrNumber.to <= this.to);
    }

  }

  export type RootArgsType = {
    tnpNonInteractive: boolean;
    tnpShowProgress: boolean;
    tnpNoColorsMode: boolean;
    findNearestProject: boolean;
    findNearestProjectWithGitRoot: boolean;
    findNearestProjectType: ModelsLibTypes.LibType;
    findNearestProjectTypeWithGitRoot: ModelsLibTypes.LibType;
    cwd: string;
  };


  export interface GenerateProjectCopyOpt {
    override?: boolean;
    markAsGenerated?: boolean;
    regenerateOnlyCoreProjects?: boolean;
    forceCopyPackageJSON?: boolean;
    filterForBundle?: boolean;
    showInfo?: boolean;
    ommitSourceCode?: boolean;
    regenerateProjectChilds?: boolean;
    useTempLocation?: boolean;
  }





  export type SourceFolder = 'src' | 'components' | 'custom' | 'tmp-src';

  export type FileEvent = 'created' | 'changed' | 'removed' | 'rename';

  export type CutableFileExt = 'scss' | 'css' | 'sass' | 'html' | 'ts';

  export type FileExtension = 'ts' | 'js' | 'json' | 'html' | 'jpg' | 'png' | 'txt' | CutableFileExt;


  export type RecreateFile = { where: string; from: string };



  export interface IProject {
    isSite: boolean;
    isCoreProject: boolean;
    isCommandLineToolOnly: boolean;
    isGenerated: boolean;
    isWorkspaceChildProject: boolean;
    isBasedOnOtherProject: boolean;
    isForRecreation: boolean;
    isWorkspace: boolean;
    isContainer: boolean;
    isContainerChild: boolean;
    isStandaloneProject: boolean;
    isUnknowNpmProject: boolean;
    isTnp: boolean;
    useFramework: boolean;
    name: string;
    genericName: string;
    defaultPort?: number;
    version: string;
    _routerTargetHttp?: string;
    customizableFilesAndFolders: string[];
    type: ModelsLibTypes.LibType;
    backupName: string;
    location: string;
    resources: string[];
    env: ModelsEnvinronment.EnvConfig;
    allowedEnvironments: ModelsEnvinronment.EnvironmentName[];
    children: IProject[];
    distribution: IProject;
    childrenThatAreLibs?: IProject[];
    childrenThatAreClients?: IProject[];
    childrenThatAreThirdPartyInNodeModules?: IProject[];
    parent: IProject;
    preview: IProject;
    baseline: IProject;
  }



}
