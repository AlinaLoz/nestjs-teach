import * as config from 'config';
import * as log4js from 'log4js';
import * as Raven from 'raven';
import { promisify } from 'util';

import { IRavenService } from '../interfaces/raven.service.interface';

export class RavenService implements IRavenService {
    private installed = false;
    private logger = log4js.getLogger('raven.services');

    async init() {
        if (!config.raven.enabled) {
            this.logger.warn('Raven is disabled', 'raven.services');
        } else {
            await this.install();
        }
    }

    async install() {
        await promisify(Raven.config(config.raven.config).install)();
        this.installed = true;
    }

    uninstall() {
        Raven.uninstall();
        this.installed = false;
    }

    warning(message: string, additionalData = {}) {
        this.logger.warn(message);
        this.sendMessageToRaven(message, 'warning', additionalData);
    }

    message(message: string, additionalData = {}) {
        this.logger.log(message);
        this.sendMessageToRaven(message, 'info', additionalData);
    }

    error(error: Error, key: string, additionalData = {}) {
        if (!this.installed) {
            return error;
        }
        const extra = { ...additionalData, key };
        Raven.captureException(error, { extra });
    }

    private sendMessageToRaven(
        message: string,
        level: 'info' | 'warning',
        extra: {},
    ) {
        if (!this.installed) {
            return;
        }
        Raven.captureMessage(message, { level, extra });
    }
}
