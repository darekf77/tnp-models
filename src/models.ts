import * as npmModels from './models-npm';
import * as libsModels from './models-libs';
import * as envModels from './models-environment';
import * as devModels from './models-dev';
import * as systemModels from './models-system';
import * as otherModels from './models-other';

export namespace Models {
  export import libs = libsModels.ModelsLibTypes;
  export import npm = npmModels.ModelsNpm;
  export import env = envModels.ModelsEnvinronment;
  export import dev = devModels.ModelsDev;
  export import system = systemModels.ModelsSystem;
  export import other = otherModels.ModelsOther;
}
