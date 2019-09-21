import axios from 'axios';

export const fetchContacts = async () => await axios({ method: "get", url: "/api/contacts" })

export const saveContact = async (data) => await axios({ method: "post", url: "/api/contacts", data: data })

export const updateContact = async (id, data) => await axios({ method: "patch", url: `/api/contacts/${id}`, data: data })

export const fetchContact = async (id) => await axios({ method: "get", url: `/api/contacts/${id}` })