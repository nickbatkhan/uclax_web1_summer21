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
                    Its goals include speed, data integrity, and support distributed, non-linear work flows. Git is a software, maintained by linux, focused on version control and code sharing. Again, its  a version control system to manage source code history.
                </p>
                <p>
                    Heroku is a cloud platform where you can locate your code and deploy. You can place your application and show to the others. You can use many languages such as Ryby, Java, Node.js, Scala,Python, and PHP. You can host your code and create a website like sample.herokuapp.com. 
                    Its a good place to show your work to others.
                </p>
                <p>
                    Github is a place to push our code and play well with others. Its a cloud-based hosting service that lets you manage git repositories. It also allows to show your projects to others. You can create a repositories. 
                    Someone can work on their local computers and merge their works. Good thing is its open source and most of the codes are open. Github is a service, a graphical user interface, hosted on the web and focused on centralized source code hosting.
                </p>
            </Essay>
            <Essay
                number = { 2 }
                question='Explain the difference between HTML, CSS JS'
            >
                <p>
                    If we imagine creating a website as building a house, HTML is the way the skeleton of the house, CSS is how the rooms are located and designed such as colors of the floor. JS is more advanced part of the building such as elevator.
                </p>
                <p>
                    The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It instructs the browser on how to display text and images in a web page. You can view an HTML file using any browser on any type of computer.
                </p>
                <p>
                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of the document written in markup language. It handles the page’s layouts, colors, fonts, cell paddling of the table cells, the style, and colors of the table’s border, and the paddling around images or other objects.

                </p>
                <p>
                    Javascript (JS) is a text based programming language used both on the client-side and server side that allows to make web pages interactive. In another word, JS makes the website responsive and interactive. For instance, google.com, when you type what you are searching and it gets response with the answers, this is the magic of the Javascript.
                </p>
            </Essay>
            <Essay
                number = { 3 }
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
                <p>
                    paragraph 1
                </p>
                <p>
                    paragraph 2
                </p>
                <p>
                    Paragraph 3
                </p>
                <p>
                    Paragraph 4
                </p>
            </Essay>

        </div>
    );
}

export default Homework;