import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversations } = useConversations();
    function handleCheckboxChange(contactId) {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => prevId !== contactId);
            }
            else {
                return [...prevSelectedContactIds, contactId];
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        createConversations(selectedContactIds);
        closeModal();
    }
    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id} >
                            <Form.Check
                                type='checkbox'
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                </Form>
            </Modal.Body>
        </>
    )
}
