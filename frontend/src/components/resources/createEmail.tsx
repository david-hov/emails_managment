import { useState } from 'react';
import { TopToolbar, Create, SimpleForm, TextInput, required } from 'react-admin';
import { Box, Button, Modal } from '@mui/material';

export const Actions = () => {
    const [openModal, setOpenModal] = useState(false);

    const onSuccess = () => {
        setOpenModal(false);
    };

    return (
        <TopToolbar>
            {openModal &&
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                    <Create
                        resource='email'
                        mutationOptions={{ onSuccess }}
                        sx={{ width: 500, height: 500, margin: '0 auto' }}
                    >
                        <SimpleForm>
                            <Box display='flex' gap='15px'>
                                <TextInput validate={required()} source='to' />
                                <TextInput source='cc' />
                            </Box>
                            <Box display='flex' gap='15px'>
                                <TextInput source='bcc' />
                                <TextInput source='subject' />
                            </Box>
                            <TextInput validate={required()} multiline source='body' />
                        </SimpleForm>
                    </Create>
                </Modal>
            }
            <Button onClick={() => setOpenModal(true)} variant='contained'>
                Create
            </Button>
        </TopToolbar>
    );
};
