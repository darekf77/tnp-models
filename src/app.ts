//#region @notForNpm
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-tnp-models',
template: 'hello from tnp-models'
})
export class TnpModelsComponent implements OnInit {
constructor() { }

ngOnInit() { }
}

@NgModule({
imports: [],
exports: [TnpModelsComponent],
declarations: [TnpModelsComponent],
providers: [],
})
export class TnpModelsModule { }
//#endregion

//#region @backend
async function start(port: number)  {

}

export default start;

//#endregion

//#endregion