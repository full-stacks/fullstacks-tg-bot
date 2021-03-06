import fs from 'fs';
import path from 'path';
import { Middleware } from 'telegraf-ts';
import { Context } from '../../context';
import { resolveModule } from '../../utils';

const themesHandler: Middleware<Context> = async ctx => {
  const themesDir = resolveModule('highlight.js/styles');
  const themeFiles = fs.readdirSync(themesDir);
  const themes = themeFiles.map(theme => path.parse(theme).name);

  await ctx.reply(themes.join('\n'));
};

export default themesHandler;
