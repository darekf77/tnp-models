export namespace ModelsSystem {

  export interface RegisterServiceOptions {
    killAlreadyRegisterd?: boolean;
    actionWhenAssignedPort?: (itWasRegistered: boolean, registerdOnPort?: number) => any;
  }

  export class SystemService {

    constructor(
      public name: string,
      public description?: string
    ) {

    }
  }

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
