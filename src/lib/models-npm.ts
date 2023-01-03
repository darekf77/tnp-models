import { ConfigModels } from 'tnp-config';

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
    smartInstallPreparing?: boolean;
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

  export type DependenciesFromPackageJsonStyle = { [name: string]: string; };

  export type TargetProject = {
    path?: string;
    origin: string;
    branch: string;
    links: string[];
  }

  export interface TnpIPackageJSONOverride {
    scripts?: { [script in string]: string; };
    description?: string;
    license?: string;
    private?: boolean;
    author?: string;
    homepage?: string;
    main?: string;
    module?: string;
    exports?: object;
    name?: string;
  }

  export type TrustedType = { [frameworkVersion in ConfigModels.FrameworkVersion]: (string | string[]) };

  export type LinkedRepo = {
    origin: string;
    relativeFoldersLinks?: {
      from: string;
      to: string;
    }[];
  }

  export interface TnpData extends TnpIPackageJSONOverride {
    type: ConfigModels.LibType;
    version?: ConfigModels.FrameworkVersion,
    smartContainerBuildTarget?: string;
    smart?: boolean;
    monorepo?: boolean;
    /**
     * link your local projects *.ts files inside this project.. through tsconfig pathes
     * Example:
     *  - local projct 'tnp-helper' with 'src' folder
     *  -> will be available inside:
     *     import {  from 'tnp-helper';
     */
    linkedProjects?: string[];
    linkedRepos?: LinkedRepo[];

    /**
     * worker plugins for cli
     *
     * workerPlugin: {
     *  'tnp-db': '',
     *  'tnp-db-autoupdate': '/up'
     * }
     */
    workerPlugins?: { [pathOrName in string]: string };
    libReleaseOptions: {
      obscure?: boolean;
      ugly?: boolean;
      nodts?: boolean;
      includeNodeModules?: boolean;
    },
    targetProjects: TargetProject[],
    /**
     * framework available inside project/app
     */
    frameworks?: ConfigModels.UIFramework[];
    /**
     * project is template for other project
     */
    isCoreProject: boolean;
    additionalNpmNames: boolean;
    /**
     * only for container
     */
    overrideCoreDeps?: boolean;
    /**
     * Easy way to skip browser compilation
     */
    isCommandLineToolOnly?: boolean;
    isGlobalSystemTool?: boolean;
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
        trusted: TrustedType;
        /**
         * list of package to dedupe
         */
        dedupe: string[];

        stubForBackend: string[];
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
    /**
     * dependency site baselines
     */
    dependsOn: string[],
    /**
     * Static resurces for standalone project, that are
     * going to be included in bundle
     */
    resources?: string[];
    /**
     * Allowed environment for poroject
     */
    allowedEnv?: ConfigModels.EnvironmentName[];
    /**
     * Check wheter project is generated for static build.
     * Generated projects are inside dist folder in workspace project
     */
    isGenerated?: boolean;

    /**
     * Standalone project generated for release
     */
    isGeneratedForRelease?: boolean;
    /**
     * Usable only in workspace children
     * Required workspace children for particular workspcae child
     */
    required?: string[],
    /**
     * Usable only in workspace children
     * Required workspace servers children for particular workspcae child
     * if server don't need lib that is required for
     * can be put into required[];
     */
    requiredServers?: string[],
    /**
     * Override automation generation
     */
    overrided: {
      tsconfig?: Object;
      dedupe?: string[];
      ignoreDepsPattern?: string[];
      includeOnly?: string[];
      includeAsDev?: string[] | '*';
      linkedFolders?: { from: string; to: string; }[];
      dependencies?: DependenciesFromPackageJsonStyle;
    }
  };

  export interface IPackageJSON extends TnpIPackageJSONOverride {
    name: string;
    husky?: {
      hooks: {
        'pre-push': string;
      }
    };
    version?: string;
    bin?: any;
    preferGlobal?: boolean;
    lastBuildTagHash?: string;
    engines?: { node: string; npm: string; };
    dependencies?: DependenciesFromPackageJsonStyle;
    peerDependencies?: DependenciesFromPackageJsonStyle;
    devDependencies?: DependenciesFromPackageJsonStyle;
    tnp: (TnpData & TnpIPackageJSONOverride);
    firedev: (TnpData & TnpIPackageJSONOverride);
  }

  export type Tnp = TnpData & TnpIPackageJSONOverride;

}

