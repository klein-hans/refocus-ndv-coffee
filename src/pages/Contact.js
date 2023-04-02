import { Form, redirect } from 'react-router-dom';

function Contact() {
    return (
        <div className='contact'>
            <h3>Contact Us</h3>
            <Form method='post' action='/contact'>
                <label>
                    <span>Email</span>
                    <input type='email' name='email' />
                </label>
                <br />
                <label>
                    <span>Message</span>
                    <textarea rows='4' name='message'></textarea>
                </label>
                <button>Submit</button>
            </Form>
        </div>
    );
}

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message'),
    };

    return redirect('/contact');
};
