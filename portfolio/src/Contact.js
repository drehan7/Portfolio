import React from 'react'

function Contact({ section }) {
    function sendEmail(e) {

    }


    return (
        <>{(section === 'contact' && (

            <div className="contact-container">
                <form onSubmit={sendEmail}>
                    <div className="forms-container">
                        <div className="name-form">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="subject-form">
                            <input type="text" placeholder="Subject" name="subject" />
                        </div>
                        <div className="email-form">
                            <input type="email" placeholder="Email Address" name="email" />
                        </div>
                        <div className="message-form">
                            <textarea placeholder="Message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send Email" />
                        </div>

                    </div>

                </form>

            </div>
        ))}
        </>
    )
}

export default Contact

