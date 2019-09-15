import echo from 'echojs-lib';
import { Scope} from "@nestjs/common";

export const getEchojsProvider = (url) => {
	return {
        scope: Scope.TRANSIENT,
		provide: "TOKEN_ECHOJS",
		useFactory: async () => {
			console.log('connect');

			await echo.connect(url);
			return echo;
		},
	};
};
