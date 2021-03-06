import { Middleware } from 'telegraf-ts';
import { Context } from '../../context';

const unbanHandler: Middleware<Context> = async ctx => {
  const userId = Number(ctx.message.text.split(' ')[1]);

  if (!(await ctx.can('can_restrict_members'))) {
    return ctx.replyWithRandomGif(ctx.gifs.unAuthorized);
  }

  await ctx.unbanChatMember(userId);
  return ctx.db.users.update({ id: userId }, { $set: { status: 'memeber' } });
};

export default unbanHandler;
