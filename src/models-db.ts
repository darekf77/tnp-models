//#region imports
//#region isomorphic
import { Helpers } from 'tnp-core';
import { _ } from 'tnp-core';
import { CLASS } from 'typescript-class-helpers';
//#endregion
//#endregion

export namespace ModelsDb {

  //#region get entity name from class name
  export function entityNameFromClassName(className: string) {
    className = className.replace('Instance', 's');
    if (className.endsWith('sss')) { // ex. processes
      className = className.replace('sss', 'sses');
    }
    return _.lowerCase(className);
  }
  //#endregion

  //#region get entity name by class name
  export function getEntityNameByClassName(className: string): string {
    return className === 'Project' ? 'projects'
      : entityNameFromClassName(className) as string;
  }
  //#endregion

  //#region get entity name by class fn
  export function getEntityNameByClassFN(classFN: Function) {
    return getEntityNameByClassName(CLASS.getName(classFN));
  }
  //#endregion
}

export abstract class DBBaseEntity<T = any> {

  //#region constructor
  /**
  * Please don not crate another construct in
  */
  protected constructor(protected readonly data?: Partial<T>) {
    if (!data) {
      data = {} as any;
    }
    // @ts-ignore
    this.data = data as any;
  }
  //#endregion

  //#region @backend
  abstract isEqual(anotherInstace: DBBaseEntity<any>): boolean;
  /**
   * prepare instance just before save
   * prepare instance after retrieve raw data from be
   */
  abstract prepareInstance(reason?: string): Promise<DBBaseEntity<any>>;
  abstract getRawData(): Promise<object>;
  abstract assignProps(): void;

  get entityName() {
    return ModelsDb.entityNameFromClassName(CLASS.getNameFromObject(this) as string);
  }
  public static get entityName() {
    return ModelsDb.entityNameFromClassName(CLASS.getName(this));
  }
  //#endregion
}

export abstract class BaseController<C> {
  protected crud: C;
  constructor(crud: C) {
    Helpers.log('initing');
    this.crud = crud;
  }

  abstract addExisted<S = any>(recreateScope: S): Promise<any>;

  abstract update(): Promise<any>;

}
