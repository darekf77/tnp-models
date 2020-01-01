export namespace ModelsSystem {

  //#region @backend
  export class SystemService {

    constructor(
      public name: string,
      public description?: string
    ) {

    }
  }
  //#endregion

  export interface WatchOptions {
    cwd: string;
    wait?: number;
  }


  export interface PsListInfo {
    pid: number;
    ppid: number;
    memory: number;
    cpu: number;
    name: string;
    cmd: string;

  }

}
