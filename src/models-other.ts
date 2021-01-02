import * as _ from 'lodash';
import { ConfigModels } from 'tnp-config';

export namespace ModelsOther {

  export type ModifiedFiles = { modifiedFiles: string[] };

  export class Range {

    static clone(r: Range) {
      return new Range(r.from, r.to);
    }

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
    findNearestProjectType: ConfigModels.LibType;
    findNearestProjectTypeWithGitRoot: ConfigModels.LibType;
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


  export type RecreateFile = { where: string; from: string; linked?: boolean; };



}
