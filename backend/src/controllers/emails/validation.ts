import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { FastifyReply, FastifyRequest } from 'fastify';

import { SendEmailRequest } from '../../entities/emails/emails.dto';

export const validateEmailCreate = async (body: FastifyRequest['body'], reply: FastifyReply) => {
    const sendEmailRequest = plainToInstance(SendEmailRequest, body);
    const errors = await validate(sendEmailRequest);
    if (errors.length > 0) {
        return reply.status(400).send({
            message: 'Validation failed',
            errors: errors.reduce<string[]>((acc, error) => {
                const constraints = error.constraints;
                if (constraints) {
                    acc.push(Object.values(constraints)[0]);
                }
                return acc;
            }, [])
        });
    }
    return sendEmailRequest;
}
