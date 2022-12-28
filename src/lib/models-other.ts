import { _ } from 'tnp-core';
import { ConfigModels } from 'tnp-config';
import { CLASS } from 'typescript-class-helpers';

export namespace ModelsOther {

  export type ModifiedFiles = { modifiedFiles: string[] };

  @CLASS.NAME('Range')
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
        throw new Error(`This Range type is only for positive numbers`);
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
    /**
     * copy links as folders and files
     */
    dereference?: boolean;
  }


  export type SourceFolder = 'src' | 'components' | 'custom' | 'tmp-src';


  export const ImageFileExtensionArr: ConfigModels.ImageFileExtension[] = [
    'jpg', 'jpeg', 'png', 'svg'
  ];


  export type RecreateFile = { where: string; from: string; linked?: boolean; };



}
