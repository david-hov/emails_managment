import { createEmail, getAllEmails } from '../controllers/emails/emails.controller';

export const emailRoutes = async (fastify): Promise<void> => {
    fastify.post('/email', createEmail);
    fastify.get('/email', getAllEmails);
};
