import { Middleware } from 'telegraf';
import { Context } from '../../context';

const kickHandler: Middleware<Context> = (ctx, next) => {
  if (ctx.message.left_chat_member.username !== ctx.me) {
    return next();
  }

  return ctx.db.groups.remove({ id: ctx.chat.id }, {});
};

export default kickHandler;
