'use strict';

const path = require('node:path');

hexo.extend.filter.register('before_generate', async function () {

    const input = path.join(
        this.theme_dir,
        'source',
        'css',
        'index.scss'
    );

    const css = await this.render.render({
        path: input
    });

    this.route.set(
        'css/index.css',
        css
    );

});