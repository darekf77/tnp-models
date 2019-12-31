import { ModelsEnvinronment } from './models-environment';
import { ModelsLibTypes } from './models-libs';

export namespace ModelsNpm {

  export type SaveAction = 'save' | 'show' | 'hide';

  export type PackageJsonSaveOptions = {
    action: SaveAction;
    newDeps: any;
    toOverride: any;
    reasonToShowPackages: string;
    reasonToHidePackages: string;
  }
  export interface ActualNpmInstallOptions {
    generatLockFiles?: boolean;
    useYarn?: boolean;
    pkg?: ModelsNpm.Package;
    reason: string;
    smoothInstall?: boolean;
    remove?: boolean;
  }


  export interface NpmInstallOptions {
    remove?: boolean;
    npmPackages?: ModelsNpm.Package[],
    smoothInstall?: boolean;
  }

  export type NpmDependencyType = 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies'
    | 'bundleDependencies' | 'bundledDependencies' | 'extensionDependencies'
    | '_phantomChildren';

  export type TnpNpmDependencyType = 'tnp_overrided_dependencies' | 'tnp_required_workspace_child';

  export const ArrNpmDependencyType: NpmDependencyType[] = [
    'dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies', ,
    'bundleDependencies', 'bundledDependencies', 'extensionDependencies', '_phantomChildren'
  ]

  export const ArrTnpNpmDependencyType: TnpNpmDependencyType[] = [
    'tnp_overrided_dependencies', 'tnp_required_workspace_child'
  ]



  export type InstalationType = '-g' | '--save' | '--save-dev';

  export const InstalationTypeArr = ['-g', '--save', '--save-dev'];

  export type Package = { name: string; version?: string; installType?: InstalationType; };

  export type DependenciesFromPackageJsonStyle = { [name: string]: string; }

  export interface IPackageJSON {
    name: string;
    husky?: {
      hooks: {
        'pre-push': string;
      }
    };
    version: string;
    bin?: any;
    main?: string;
    preferGlobal?: boolean;
    engines?: { node: string; npm: string; }
    license?: string;
    private?: boolean;

    dependencies?: DependenciesFromPackageJsonStyle;
    devDependencies?: DependenciesFromPackageJsonStyle;
    tnp: {
      type: ModelsLibTypes.LibType;
      version?: 'v1' | 'v2',
      /**
       * framework available inside project/app
       */
      frameworks?: ModelsEnvinronment.UIFramework[];
      /**
       * project is template for other project
       */
      isCoreProject: boolean;
      /**
       * only for container
       */
      overrideCoreDeps?: boolean;
      /**
       * Easy way to skip browser compilation
       */
      isCommandLineToolOnly?: boolean;
      /**
       * Only for isomorphic lib
       * - if true => generate controllers.ts, entities.ts
       */
      useFramework: boolean;
      /**
       * Core and contant dependecies for all projects (workspace type/standalone)
       */
      core: {
        dependencies: {
          /**
           * this dependenices are always included in some way
           */
          always?: string[];
          /**
           * this dependencies are only included as devDependencies
           */
          asDevDependencies?: string[];
          /**
           * list of package to dedupe
           */
          dedupe: string[];
          /**
           * Comon dependencies for all kinds of project types
           */
          common: DependenciesFromPackageJsonStyle | { [groupAlias: string]: DependenciesFromPackageJsonStyle };
          /**
           * Dependencies only for specyfic project type
           */
          onlyFor: { [libType: string]: DependenciesFromPackageJsonStyle | { [groupAlias: string]: DependenciesFromPackageJsonStyle }; }
        }
      }
      /**
       * Only for site projects.
       * Relative path to baseline.
       */
      basedOn: string,
      basedOnAbsolutePath1: string, // QUICK_FIX
      basedOnAbsolutePath2: string, // QUICK_FIX
      /**
       * Static resurces for standalone project, that are
       * going to be included in bundle
       */
      resources?: string[];
      /**
       * Allowed environment for poroject
       */
      allowedEnv?: ModelsEnvinronment.EnvironmentName[];
      /**
       * Check wheter project is generated for static build.
       * Generated projects are inside dist folder in workspace project
       */
      isGenerated?: boolean;
      /**
       * Usable only in workspace children
       * Required workspace children for particular workspcae child
       */
      required?: string[],
      /**
       * Override automation generation
       */
      overrided: {
        dedupe?: string[];
        ignoreDepsPattern?: string[];
        includeOnly?: string[];
        includeAsDev?: string[] | '*';
        dependencies?: DependenciesFromPackageJsonStyle;
      }
    };
  }

}
