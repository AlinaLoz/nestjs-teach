import { DynamicModule, Injectable, Scope  } from '@nestjs/common';

import { getEchojsProvider } from './echojs.provider';


export class EchojsModule {
	static forRoot(url: string): DynamicModule {

		return {
			module: EchojsModule,
			providers: [getEchojsProvider(url)],
			exports: ["TOKEN_ECHOJS"],
		};
	}
}
