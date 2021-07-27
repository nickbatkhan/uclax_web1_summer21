import React from 'react';

import Essay from './Essay.jsx'
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {
    return (
        <div>
            <SunAndMoon />
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
                    Instead of navigating the user to different pages, single-page apps present the contents in an easy, elegant and effective way as it loads all the contents on just one single page.
                </p>
                <p>
                    Being on just one page, SPAs are faster than traditional multi-page web sites.The reason is that when you enter a single-page application website, you download a page only one time and the components of the page change and load only when it is required. 
                </p>
                <p>
                    Benefits of single page apps are smooth and fast, they are easy to develop and deploy, SPAs are easier to debug, can be transited to mobile apps by reusing the same backend code. Major drawbacks are performs poor on the search engine and less secure compared to traditional multi-page apps because of its cross-site scripting.
                </p>
                <p>
                    On the other hand, multi-page applications are the traditional web applications that reload the entire page and displays the new one when a user interacts with the web app. Major drawbacks are comparatively complex development and coupled backend and frontend.
                </p>
            </Essay>

            <Essay
                number = { 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                <p>
                    Web Designer looks in to the visual look of a website and interactive design work. Web Designers plan, create and code web pages. many of which combine text with sounds, pictures, graphics, and video clips. Web designer is responsible for creating the design and layout of a website.
                </p>
                <p>
                    Front End Developer, ensures the website visitors can easily interact with the page. They do this through the combination of design, technology, and programming to code a website's apprearance, as well as taking care of debugging. Some technologies are HTML, CSS and JavaScipt.
                </p>
                <p>
                    Back End Developer is responsible for server-side web application logic and integration and security of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front end delopers and mobile application developers.
                </p>
                    Overall, their jobs are different but interacts with each other due to they are working on one product. Back end works on the server side and makes sure that its safe enougn.
                <p>
                    Finally, web designer, front end developer and back end developer, they all work on one thing and final product is one. Its important in practice that everyone is working together.
                </p>
            </Essay>

        </div>
    );
} 

export default Homework;