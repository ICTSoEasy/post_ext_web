import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the post_ext_web extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'post_ext_web:plugin',
  description: 'A JupyterLab extension to post a folder to an external website.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension post_ext_web is activated!');
  }
};

export default plugin;
