import * as npmModels from './models-npm';
import * as envModels from './models-environment';
import * as devModels from './models-dev';
import * as systemModels from './models-system';
import * as otherModels from './models-other';
import * as realtimeModels from './models-realtime';

export namespace Models {
  export import npm = npmModels.ModelsNpm;
  export import env = envModels.ModelsEnvinronment;
  export import dev = devModels.ModelsDev;
  export import system = systemModels.ModelsSystem;
  export import other = otherModels.ModelsOther;
  export import realtime = realtimeModels.ModelsRealtime;
}
