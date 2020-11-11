import Application from 'vertical-collection-issue/app';
import config from 'vertical-collection-issue/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
