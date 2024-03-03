import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type Purpose = "generic" | "hotel" | "advertisement";

export type CustomRemoteConfig = RemoteConfig & {
	exposedModule: string;
	displayName: string;
	routePath?: string;
	remoteName?: string;
	ngModuleName: string;
	purpose: Purpose;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;
