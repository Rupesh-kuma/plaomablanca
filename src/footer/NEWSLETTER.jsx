const Newsletter = () => {
    return (
        <>
            <div className="newsletter_image pt-5">
                <div className="mx-auto text-center text-light pt-5 mb-4 ">
                    <h1>NEWSLETTER</h1>
                    <p>Sign up to our newsletter to get exclusive news <br/>about upcoming events and products</p>
                </div>
                <div className="text-center text-light">
                    <div className="d-flex justify-content-center bg-light mb-4 search_width mx-auto gap-4">
                    <input type="email" placeholder="Enter you email" className="p-4 w-100 d-block fs-5 border-0"/>
                    <button className="bg-dark text-light d-block px-5">sign up</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="checkbox" className="" />
                        <p> By signing up you agree with our Terms & Conditions and Privacy Policy.<br/>
                            To opt out, click Unsubscribe in our emails.</p>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Newsletter;