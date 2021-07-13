import React from 'react';

import Essay from './Essay.jsx'

const Homework = () => {
    return (
        <div>
            <h2>HOMEWORK</h2>
            <Essay
                number = { 1 }
                question='What is the difference between Git, Github, and Heroku?'
            >
                <p>
                    Git is a version control system that tracks changes in any set of files. It allows team to work together in one project without worring each individual is doing.
                    Its goals include speed, data integrity, and support distributed, non-linear work flows.
                </p>
                <p>
                    Heroku is a cloud platform where you can locate your code and deploy. You can place your application and show to the others. You can use many languages such as Ryby, Java, Node.js, Scala,Python, and PHP.
                </p>
                <p>
                    Github is a place to push our code and play well with others. It also allows to show your projects to others. You can create a repositories. 
                    Someone can work on their local computers and merge their works. Good thing is its open source and most of the codes are open.
                </p>
            </Essay>
            <Essay
                number = { 2 }
                question='Question 2'
            >
                My long winded Answer 2
            </Essay>


        </div>
    );
}

export default Homework;