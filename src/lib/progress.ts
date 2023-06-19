import { _ } from 'tnp-core';
import { CLASS } from 'typescript-class-helpers';
import { ConfigModels } from 'tnp-config';
import { PROGRESS_DATA as BASE } from 'tnp-core';

//#region @backend
declare const global: any;
//#endregion


//#region @websql
export function helloBackend() {

  console.log('asdasd')

}
//#endregion
//#region @browser
export function helloFrontend() {
  console.log('asdasd')
}
//#endregion

@CLASS.NAME('PROGRESS_DATA')
export class PROGRESS_DATA extends BASE {

}
