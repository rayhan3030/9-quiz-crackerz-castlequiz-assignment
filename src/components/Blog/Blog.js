import React from 'react';

const Blog = () => {
    return (
        <div>

            <h1 className='text-4xl font-semibold mt-10 pb-20'> Welcome to progrraming Related Question and answer Section </h1>


            <div className='border bt-10'>
                <h1 className=' text-3xl text-red-600'>Question 1: What is the purpose of react router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page <br />
                    Web Applications. React Router is used to define multiple <br />
                    routes in the application. When a user types a specific URL <br />
                    into the browser, and if this URL path matches any 'route'  <br />
                    inside the router file, the user will be redirected to that <br />
                    particular route.</p>
            </div>
            <div className='border bt-10'>
                <h1 className=' text-3xl text-red-600'>Question 2: How does Context API Works?</h1>
                <p>The React Context API is a way for a React app to effectively produce <br />
                    global variables that can be passed around. This is the alternative <br />
                    to "prop drilling" or moving props from grandparent to child to parent, <br />
                    and so on. Context is also touted as an easier, lighter approach to state <br />
                    management using Redux.</p>
            </div>
            <div className='border bt-10'>
                <h1 className=' text-3xl text-red-600'>Question 3: What is useRef Hooks?</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be <br />
                    used to store a mutable value that does not cause a re-render <br />
                    when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blog;