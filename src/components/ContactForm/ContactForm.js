import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContactsList } from "redux/contacts/selectors";
import { Formik } from "formik";
import * as Yup from 'yup';
import { AuthButton, AuthForm, AuthFormField, ErrorSection, AuthFormWrapper, AuthTitle } from "pages/RegisterPage/RegisterPageStyles";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').max(32, 'Name must be at most 32 characters').required('Name is required'),
    number: Yup.string().email('Invalid number').required('Number is required').matches(/^\+[0-9\s-]{6,10}$/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'),
   
})

const initialValues = {
    name: '',
    number: '',
}

export default function ContactForm() {
    const contacts = useSelector(selectContactsList);
    const dispatch = useDispatch();

    const onFormSubmit = (values,  { resetForm }) => {
        const contact = {
            name: values.name,
            number: values.number,
        }
        
        const isContactInContactList = contact => {
            return (contacts.find(cont => cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) !== undefined)
        }

        if (!isContactInContactList(contact) ) {
            dispatch(addContact(contact));
        } else alert(`${contact.name} is already in contacts.`);

        resetForm();
    }

    return (
        <>
            <AuthTitle>Add new contact</AuthTitle>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onFormSubmit}>
                <AuthForm>
                    <AuthFormWrapper>
                        <ErrorSection name="name" component="div" />
                        <AuthFormField type="text" id="name" name="name" placeholder='Name' />
                    </AuthFormWrapper>

                    <AuthFormWrapper>
                        <ErrorSection name="number" component="div" />
                        <AuthFormField type="tel" id="number" name="number" placeholder='Phone number' />
                    </AuthFormWrapper>

                    <AuthButton type="submit">Add contact</AuthButton>
                </AuthForm>
            </Formik>
        </>
        
    )
}
