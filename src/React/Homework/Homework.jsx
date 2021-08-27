import React from 'react';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx'
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    const { media } = useMediaQuery();

    console.log('media', media);

    return (
        <div>

            { media.mdUp && <SunAndMoon />}

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
            <Essay
                number = { 5 }
                question='Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'
            >
                <p>
                    It is very helpful to distinguish the difference between site relative, document relative and absolute relative when it comes to linking to page or file on the site. 
                </p>
                <p>
                    An absolute URL contains the entire address from the protocol (HTTPS) to the domain name (www.example.com) and includes the location within your website in your folder system (/foldernameA or /foldernameB) names within the URL. Basically, it's the full URL of the page that you link to.
                </p>
                <p>
                    The reason to choose Absolute path is that first, Quicker Coding, large websites are made much easier to code when you shorten your URL into a relative format.
                    Second, Staging Environment, If you are using a content management system that has staging environment with its own unique domain like WordPress or SharePoint, then your entire website is replicated on that staging domain. The relative format allows the same website to exist on staging and production domain, or the live accessible version of your website, without having to go back in and re-code all of the URLs. This not only makes coding easier for a web developer but also serves as a time saver.
                    Finally, Faster Load Times, pages that use relative URLs will load more quickly than pages that use absolute URLs, for the most part, although the difference is minuscule at best. 
                </p>
                    The relative URL, on the other hand, does not use the full web address and only contains the location following the domain. It assumes that the link you add is on the same site and is part of the same root domain. The relative path starts with the forward slash and leads the browser to stay within the current site.
                <p>
                    The reasons to choose relative path, Foils Scrapers, for URLs using the absolute method, it's harder for people to scrape information from your site directory using scraper programs. If you have all of your internal links as relative URLs, it would be very easy for a scraper to simply scrape your entire website and put it up on a new domain.
                    Additionally, Disallows Duplicate Content. It’s very important to use absolute URLs in order to avoid duplicate content issues. Imagine you have multiple versions of root domains that are indexed in Google without a canonical tag that points to the correct version of the site.
                </p>
            </Essay>

            <Essay
                number = { 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
            >
                <p>
                    Joint Photographic Experts Group or A JPG is optimized for photographs. JPG works by getting rid of the things that the eye is not likely to see or notice. JPGs are lossy raster files which means they lose a small amount of information every-time the JPG is saved. JPGs work with compressing color so they are great for photographs and complex digital imagery. A high-resolution jpg is usually also suitable these days for printing with most print-on-demand companies.
                </p>
                <p>
                    GIF or Graphics Interchange Format. This bitmap format supports up to 8 bits per pixel which limits its color palette to 256. Not good for photographs an are mostly known these days for simply animated memes. GIFs are not huge players in the web design world. 
                </p>
                <p>
                    Portable Network Graphic or PNG was designed for use on the Internet and is the most largely used image compression format on the web. PNGs are not for printing professional graphic images. PNGs are raster graphics and were made as an improvement to the GIF. PNGs work well with line art images and photographs for websites but can result in really large file sizes. PNGs also offer alpha transparency which is very cool because each individual pixel has its own level of opacity. PNGs come in two types PNG-8 and PNG-24. PNG-8 means that the file has only 8 bits per pixel and the PNG-24 has 24 bits per pixel.
                </p>
                    Scaleable Vector Graphic or SVGs are vector graphics that support animation and their behaviors are defined in XML files for they can be searched, indexed, scripted and compressed. Vector graphics are great for logos and line art because they aren't made from pixels and can be infinitely resized without losing quality or increasing in size. SVGs are your best option when creating icons and line art for high-resolution displays.
                <p>
                    Best use of JPG is Digital Images & photography, for GIF: sample animations, for PNG transparent images, iconic graphics and for SVG logos, line art, icons & animations. GIF has 256 colors which is relatively smaller than others. JPG has no transparency, GIF is binary, PNG is yes, SVG is yes. JPG is best for photos and PNG is good. 
                </p>
            </Essay>
            <Essay
                number = { 7 }
                question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                <p>
                    Project Manager: they are in charge of planning, resources, and projects. 
                </p>
                <p>
                    Business Analyst: Analyzes prior and existing business data to improve decision making process.
                </p>
                <p>
                    Scrum Master: Manages communication between team members, keeps the sprint moving along - agile processes. 
                </p>
                <p>
                    UX designer: Research user analysis, usability, user flow and journeys, content strategy. They handle the visual design. They also make research on how the users use the website more efficient way.
                </p>
                <p>
                    Web Developer/Engineer: Designing and developing web application. Functionality, features and security.
                </p>
                <p>
                    Quality Assurance Tester: Quality Assurance automated and manual test. Ensures the integrity of existing features work, and ensure new features.
                </p>
                <p>
                    DevOps: Connects development and operations team - creates hardware and software to deliver application.
                </p>
                
            </Essay>

            <Essay
                number = { 8 }
                question='What is considered the right size for an image or video asset?'
            >
                <p>
                    Here are the some ideas: Depends on the content/space dimentions, lower quality, avatars for example, vs hero vs thumbinals. 
                </p>
                <p>
                    Resolution would depend on to meet the requirements of video, perhaps defaul to 16x9.
                </p>
                <p>
                    File size - keeping it at small as possible unless necessary.
                </p>
                <p>
                    Hero 1500 x 2500 pixels
                </p>
                <p>
                    30-40 seconds long - duration
                </p>
                <p>
                    25 - 30 MB max
                </p>
                <p>
                    Optimize for UX and SEO, accessibility
                </p>
                <p>
                    To summarize, there is no correct answer. The image and video size depends on ones mission and what needs to be accomplished.
                </p>
                
            </Essay>

            <Essay
                number = { 9 }
                question='What it means for a company to be Agile. What is the purpose of using Agile, and its Pros and Cons.'
            >
                <p>
                    Agility of the company means that adapting quickly to market changes, customer and client demands, and its own accelerated timelines both internally and externally. Respond rapidly and flexibly to customer demands,  . Adapt and lead change in a productive and cost-effective way without compromising quality. Continuously be at a competitive advantage.
                    In computer science, agile is moving in smaller increments, to implement those changes on a much faaster cycle.
                    Waterfall is the opposite of Agile.
                </p>
                <p>
                    Pros:
                    Superior quality product
                    Customer satisfaction
                    Better control
                    Improved project predictability
                    Reduced risks
                    Increased flexibility
                    Continuous improvement
                    Improved team morale
                </p>
                <p>
                    Cons:
                    Poor resource planning
                    Limited documentation
                    Fragmented output
                    No finite end
                    Difficult measurement.
                </p>
            </Essay>

            <Essay
                number = { 10 }
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                
                <p>
                    A test environment is any space in which software undergoes a series of experimental uses.
                </p>
                <p>
                    A local environment: local environments, developer's system. Its not being touched except other developers.
                </p>                
                <p>
                    Dev or Development: it's the environment used during development of the application. Working code copy. Changes made by developers are deployed here so integration and features can be tested. This environment is rapidly updated and contains the most recent version of the application.
                </p>
                <p>
                    A QA environment is where you test your upgrade procedure against data, hardware, and software that closely simulate the Production environment and where you allow intended users to test the resulting application.
                </p>
                <p>
                    UAT: User Acceptance Testing: Client test the app, before it goes om the wild. 
                </p>
                <p>
                    A Production environment is where the application is actually available for use. This is the currently released version of the application, accessible to the client/end users. This version preferably does not change except for during scheduled releases.    
                </p>
            </Essay>

            <Essay
                number = { 11 }
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                
                <p> 
                    On html we use the img element for images. Ex: img src=“apple.jpg> alternatively "img src=“https://www.example.com/images/apple.jpg">".
                </p>
                <p>
                    You can also use CSS to embed images into webpages (and JavaScript, but that's another story entirely). The CSS “background-image” property, and the other background-* properties, are used to control background image placement. For example, to place a background image on every paragraph on a page, you could do this:
                </p>
                <p>
                    CSS: background-image example:
                    {/* P {
                        background-image: url(image/apple.jpg”);
                    } */}
                    The resulting embedded image is arguably easier to position and control than HTML images.
                </p>
            </Essay>

            <Essay
                number = { 12 }
                question= {"'What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)?'"}
            >
                
                <p> 
                Id is used for single elements that appear on the page for only once (e.g. header, footer, menu). In another word “id” is unique in a page and can only apply to at most one element. “id” can have only one unique value. You cannot have more than one element with the same id in an HTML document.
                The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.
                {/* {#myHeader {
                    background-color: lightblue;
                    color: black;
                    padding: 40px;
                    text-align: center;
                }} */}
                </p>
                <p>
                Class is used for single or multiple elements that appear on the page for once or more than once (e.g. paragraphs, links). “class” selector can apply to multiple elements. “class” can have more than one value.

                /* Style all elements with the class name "city" */
                {/* .city {
                    background-color: tomato;
                    color: white;
                    padding: 10px;
                    } */}

                </p>
                <p>
                After writing content, there will be a need to mark it up with HTML to do things like distinguish the title from the paragraphs. Most of this is done by inserting tags throughout the content. 

                    <li>Html: root element tag</li>
                    <li>Head: head of the web page from the content</li>
                    <li>Title: texts gives the overview of the website</li>
                    <li>Body: actual content of the website</li>
                    <li>H1: creates a title by making text bigger and making it bold.</li>
                    <li>P: specify paragraph</li>
                    <li>A: let us create a link with its here attribute</li>
                    <li>Div: group multiple pieces of content into a single container.</li>
                    <li>Span: span is like a smaller version of div, style or interact with inline content.</li> 

                If you have multiple elements with the same ID, you'll only run into problems when using JavaScript to access those elements. For example, if you were to do document. getElementById('duplicateId') , you would only get back one element instead of two. Other than that, the browser will render the page just fine.


                The id attribute can also be used by JavaScript to perform some tasks for that specific element. JavaScript can access an element with a specific id with the getElementById() method:

                {/* <script>
                function displayResult() {
                  document.getElementById("myHeader").innerHTML = "Have a nice day!";
                }
                </script> */}
                </p>

                <p>
                    Specifity is 2 or more colflicting rules, the browser dertermines which one to chose.
                </p>
            </Essay>

            <Essay
                number = { 13 }
                question='What are testing environments? What is the difference between Local, Dev, QA and Production?'
            >
                
                <p> 
                    CSS preprocessors are scripting languages that extend the default capabilities of CSS. A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from.
                </p>
                <p> 
                    CSS preprocessors make it easy to automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility. Each CSS preprocessor has its own syntax that they compile into regular CSS so that browsers can render it on the client side.
                </p>
                <p> 
                    Examples are: Sass or Syntactically Awesome Style Sheet, and LESS or Learner Style Sheets
                </p>
                <p> 
                    Styled-components is a library for React that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.you're actually creating a normal React component, that has your styles attached to it.
                </p>
                <p> 
                    Seperation of concerns: HTML, CSS and JavaScript are suppose to be separated. I think no violation of separation of concerns. Its all about design and composition. There are patterns that help us to compose and logically separate our apps. We can still write well organized programs with clearly defined responsibilities.
                </p>
                
            </Essay>
        </div>
        
    );
}

export default Homework;