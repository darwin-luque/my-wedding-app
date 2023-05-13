import { createInvitationHandler } from '../handlers/invitations/create';
import { listInvitationsHandler } from '../handlers/invitations/list';
import { router } from '../trpc';

export const invitationsRouter = router({
  create: createInvitationHandler,
  list: listInvitationsHandler,
});
