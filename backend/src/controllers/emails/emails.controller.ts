import { FastifyReply, FastifyRequest } from 'fastify';

import { Filter } from '../../types';
import { AppDataSource } from '../../db';
import { Email } from '../../entities/emails/emails.entity';
import { validateEmailCreate } from './validation';

export const createEmail = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const sendEmailRequest = await validateEmailCreate(request.body, reply);
        if (sendEmailRequest) {
            const { to, cc, bcc, subject, body } = sendEmailRequest;
            const emailRepo = AppDataSource.getRepository(Email);
            const email = emailRepo.create({ to, cc, bcc, subject, body });
            await emailRepo.save(email);
            return reply.status(201).send({ message: 'Email saved successfully', data: email });
        }
    } catch (error) {
        console.log('Error', error);
        return reply.status(500).send({ message: 'Internal server error', error: error.message });
    }
}

export const getAllEmails = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const { filter, limit, page, orderBy, orderDir } = request.query as Filter;
        const parsedFilter = JSON.parse(filter);
        const maxNumber = parseInt(limit, 10);
        const skipNumber = (parseInt(page, 10) - 1) * maxNumber;

        const emailRepo = AppDataSource.getRepository(Email);
        const [emails, total] = await emailRepo.createQueryBuilder('email')
            .where(qb => {
                if (parsedFilter.hasOwnProperty('q') && parsedFilter.q.length !== 0) {
                    qb.where(`email.to ILIKE :to`, { to: parsedFilter['q'].trim() })
                    qb.orWhere(`email.cc ILIKE :cc`, { cc: parsedFilter['q'].trim() })
                    qb.orWhere(`email.bcc ILIKE :bcc`, { bcc: parsedFilter['q'].trim() })
                    qb.orWhere(`email.subject ILIKE :subject`, { subject: parsedFilter['q'].trim() })
                }
            })
            .orderBy(`email.${orderBy}`, orderDir === 'ASC' ? 'ASC' : 'DESC')
            .skip(skipNumber)
            .take(maxNumber)
            .getManyAndCount();

        return reply.status(200).send({
            message: 'Emails fetched successfully',
            data: emails,
            total: total,
        });
    } catch (error) {
        return reply.status(500).send({
            message: 'Internal server error',
            error: error.message,
        });
    }
};
