document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const close = document.querySelector('.close');


    const information = {
        box1: `
            <div>
            <h2>Senior UROP in the Media Lab: Detecting Stress to Prevent Drug Relapse</h2>
            <h4>Used novel ML and AI methodologies to detect stress from heart rate data</h4>
            <p>Working with Dr. Rich Fletcher, my task was to use heart rate (HR) and heart rate variability (HRV) data from wearables to detect stress within drug-addiction populations.
                The purpose of the research was to enable Just-In-Time (JIT) digital psychological treatment to these patients while they were living their lives in recovery
                and hopefully prevent relapses.
            </p>
            <p>My first task was to use K-mean clustering to try and autonomously split patients into archetypes based on their stress reactivity in lab experiments. In theory, creating these
                archetypes would allow me to train multiple regressions (one for each subgroup) that would be much more accurate. In order to do this, I used Pandas and NumPy to combine
                information about patients from the lab and ambulatory data and codified a way to normalize the HR and HRV metrics based on the lab baselines. I then ran multiple types of clustering algorithms to attempt to detect
                latent states. While I did uncover different sets of archetypes, the data unfortunately was too random and the slicing did not increase the accuracy of the model.
            </p>
            <p>My next task was to use Autoencoders (a novel machine learning tool whose architecture is pictured below) to attempt to find latent states in the data and detect stress with this more flexible network architecture.
                In order to achieve this, I first trained the autoencoder on the patient data with a prespecified number of inner "latent states". Then, I used the encoder (the first half of the neural network) to compress
                the dataset from having 11 features into only 3. This compression served as a proxy for using t-SNE. Then, I ran a regression using the newly compressed latent states to predict stress in the patients.
            </p>
            <p>Due to the novelty of the process, I first started with the WESAD dataset (a very clean set of stress data from university students). After proving the efficacy of this methodology,
                I moved on to the lab's datasets. While I was not able to drastically improve the accuracy of the regression models, my work laid the foundation
                for future research and set up a strong methodology that, if tweaked, can be used to enable the type of detection necessary.
            </p>
            <div>
                <h3>PowerPoint Slides:</h3>
                <img src="images/urop_slide1.png" alt="PowerPoint Slide 1" style="width:70%; height:auto;">
                <img src="images/urop_slide2.png" alt="PowerPoint Slide 2" style="width:70%; height:auto;">
                <img src="images/urop_slide3.png" alt="PowerPoint Slide 3" style="width:70%; height:auto;">
            </div>
        </div>
    
        `,
        box2: `
            <div>
            <h2>6.4200: Fully functional autonomous car</h2>
            <h4>Built out code to enable RC car to drive completely autonomously</h4>
            <p>My team and I developed code to allow an RC car to plan its own path and drive itself through a city (video on the left) as well as race around a track under complete autonomous control (video on the right).
                Our car competed in a final challenge against other teams in the class. Our car <strong> placed first</strong> in the track race and were one of the only teams to implement path planning
                in the city driving section of the challenge (pictured below). Our car was also capable of stopping at stop signs placed randomly around the track.
            </p>
            <p>We implemented a variety of different control algorithms in our car. They are listed here:</p>
            <ul>
                <li><strong>Path Planning</strong>: Given a map of the driving area and a final destination, our car could autonomously plan a path that minimized travel distance while avoiding all obstacles. <a href="technical_materials/RSS_Lab_6_Report.pdf" download="technical_materials/RSS_Lab_6_Report.pdf">Read Report</a></li>
                <li><strong>Localization</strong>: While driving, the car constantly compared its expected location against LIDAR readings and the given map. This allowed our car to account for slip and accurately track its location in the enviornment using a particle filter. <a href="technical_materials/RSS_Lab_5_Report_.pdf" download="technical_materials/RSS_Lab_5_Report_.pdf">Read Report</a></li>
                <li><strong>Line Following</strong>: For the final track race, our car was able to recognize the lines along the track and keep itself centered in the lane even when moving at high speeds. We used PID control, homography, and Hough Transforms to keep our car more stable than others.</li>
                <li><strong>Image Recognition</strong>: Our car constantly monitored the camera input and was able to stop when it recognized a stop sign along the road.</li>
                <li><strong>Pure Pursuit</strong>: When enabled, our car was able to track a cone with its camera and move to maintain a constant distance from the cone.</li>
                <li><strong>Wall Following</strong>: When enabled, our car used its LIDAR sensor to accuractly drive a constant distance from any wall including turns. <a href="technical_materials/RSS_Lab_3_Report.pdf" download="technical_materials/RSS_Lab_3_Report.pdf">Read Report</a></li>
            </ul>
            <video width="70%" height="auto" autoplay muted controls>
                <source src="technical_materials/VidForWebsite.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video width="20%" autoplay muted controls>
                <source src="technical_materials/RunningVidForProject - SD 480p.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>


        </div>
        `,
        box3: 'Chronicled information...',
        box4: `
        <div>
            <h2>Created Full Front-End and Back-End Online Video Game</h2>
            <h3>Code Base: <a href="https://github.com/nkakarla712/starb_game">Linked Here</a></h3>
            <h4>Introduction</h4>
            <p>StarB is a captivating puzzle game where players are challenged to place stars on a board such that each row, column, and designated grouping contains exactly one star. The game's core objective is to strategically position the stars to satisfy these constraints.</p>
            
            <h4>Technical Overview</h4>
            <h5>Front End:</h5>
            <p>The front end of StarB is equipped with a fully interactive and visually appealing interface. Built with modern web technologies like HTML5, CSS3, and JavaScript, the front end ensures a responsive and engaging user experience. Advanced techniques such as canvas-based rendering and CSS animations are used to create a smooth and immersive gameplay environment. Players can intuitively place stars on the board with drag-and-drop functionality, and receive instant visual feedback through dynamic updates that reflect their actions in real-time.</p>
            
            <h5>Back End:</h5>
            <p>The back end of StarB is engineered for efficiency and scalability, leveraging Node.js and Express.js to handle server-side logic. The server autonomously processes packets from various front ends, using WebSocket for real-time communication and ensuring low-latency interactions. The server's architecture is designed to handle concurrent connections and multiple simultaneous requests, maintaining consistent performance through load balancing and efficient resource management. The game logic, implemented in TypeScript, ensures robust and type-safe operations, enhancing both reliability and maintainability.</p>
            
            <h5>Code Quality:</h5>
            <p>StarB's code base exemplifies high-quality software engineering practices. The code is modular, adhering to SOLID principles, and employs design patterns such as MVC (Model-View-Controller) to separate concerns and enhance maintainability. Comprehensive unit and integration tests are included to rigorously validate game functionalities and ensure high reliability and performance. The use of TypeScript provides static type checking, reducing the likelihood of runtime errors and improving overall code quality. The project follows industry standards for code documentation and version control, making it easy to extend and collaborate on.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Interactive UI with real-time feedback and smooth animations.</li>
                <li>Responsive design ensuring compatibility across devices and screen sizes.</li>
                <li>Real-time communication with the server using WebSocket for seamless gameplay.</li>
                <li>Efficient handling of concurrent user requests with a scalable server architecture.</li>
                <li>Comprehensive test suite for continuous integration and delivery.</li>
                <li>Modular and maintainable code base adhering to industry best practices.</li>
            </ul>
        
        </div>`,
        box5: `
        <div>
            <h2>Snek Interpreter</h2>
            <p>This project is part of a lab exercise focused on implementing a Snek interpreter. Snek is a simplified, educational programming language that is a derivative of the full LISP language. The codebase includes the following key components:</p>
            <ul>
                <li><strong>Interpreter Logic:</strong> The core logic for parsing and evaluating Snek expressions. This includes functions for tokenizing input, parsing tokens into an abstract syntax tree (AST), and evaluating the AST to produce results.</li>
                <li><strong>Environment Management:</strong> Mechanisms for managing variable scopes and environments during program execution, allowing for variable definition, lookup, and modification.</li>
                <li><strong>Recursion Handling:</strong> The interpreter is designed to handle deep recursion with an increased recursion limit to ensure complex programs can be evaluated without exceeding the default system limits.</li>
                <li><strong>Snek-related Exceptions:</strong> Custom exceptions for handling various errors that may arise during the interpretation of Snek programs. These include:
                    <ul>
                        <li><em>SnekError:</em> The base class for all Snek-related exceptions.</li>
                        <li><em>SnekSyntaxError:</em> Raised when the interpreter encounters a malformed expression.</li>
                        <li><em>SnekNameError:</em> Raised when an undefined name is referenced in the program.</li>
                        <li><em>SnekEvaluationError:</em> Raised for errors occurring during the evaluation process, excluding name errors.</li>
                    </ul>
                </li>
            </ul>
            <p>The interpreter is implemented in Python and includes a comprehensive set of tests to ensure the correct functionality of the interpreter components. This project demonstrates the application of concepts such as exception handling, recursive function calls, and environment management in the context of building a programming language interpreter.</p>
            <p>For more details and to view the full code, visit the <a href="https://github.com/nkakarla712/lisp_code" target="_blank">GitHub repository</a>.</p>
        </div>

        `,
        box6: `
        <div>
            <h2>Created Working Processor from Scratch in Risc-V</h2>
            <h4>Designed fully functional processor and ALU using low-level computer language</h4>
            <p>
                Using Risc-V (a custom built chip design language), I built a processor that, while slow, would be able to carry out all
                computer functions. My processor and associated ALU had the ability to read and write from register files as well as execute operations on the data 
                and write the result to another register. This involved a deep understanding of low-level computer architecture, including variety of digital abstractions such as ROMs and logic arrays, logic trees, state machines, pipelining, and buses.
            </p>
            <p>
                A picture of the architecture and the link to my github code is included below.
            </p>
            <img src="images/ALU Diagram.png" alt="Processor Architecture">


        </div>`
        ,
        box7: `
        <div>
            <h2>FIFA Bot: ELO Ranking Discord Bot</h2>
            <p>This project is a Discord bot designed to track and calculate ELO rankings for players participating in FIFA matches over the course of a year. The bot allows users to enter game results directly into Discord, which are then processed to update player rankings dynamically. The project encompasses several key components:</p>
            
            <h3>Key Features:</h3>
            <ul>
                <li><strong>Game Tracking:</strong> Users can enter game results, which are stored and used to update player rankings. The bot supports both individual player rankings and team rankings.</li>
                <li><strong>ELO Calculation:</strong> The bot implements the ELO rating system to evaluate and rank players based on their game performance. It adjusts rankings after each game, reflecting the outcomes and the relative skill levels of the players.</li>
                <li><strong>Database Integration:</strong> The bot interacts with a database to store player information, game results, and ELO scores. This ensures persistent data storage and retrieval.</li>
                <li><strong>Commands and Interactivity:</strong> The bot supports a variety of commands that users can input in Discord to get rankings, add new players or teams, and view match probabilities based on current rankings.</li>
            </ul>

            <h3>Technical Implementation:</h3>
            <ul>
                <li><strong>fifaBot.py:</strong> The main script that initializes the Discord bot, handles incoming commands, and processes user interactions.</li>
                <li><strong>game.py:</strong> Manages game-related logic, including the creation and updating of game records, and the calculation of ELO changes based on match results.</li>
                <li><strong>database_interactions.py:</strong> Handles all database operations, including adding new players, retrieving player and team data, and updating records in the database.</li>
                <li><strong>player.py:</strong> Defines the Player class, which includes attributes and methods for managing player information and ELO rankings.</li>
                <li><strong>fifa_commands.py:</strong> Contains the command functions that the bot executes in response to user inputs in Discord, such as adding a new game, retrieving rankings, and initializing new teams.</li>
            </ul>

            <p>The FIFA Bot project showcases the integration of real-time interactivity with data persistence and complex ranking algorithms. It demonstrates the practical application of Python programming, database management, and API interaction to create a functional and engaging tool for the FIFA gaming community.</p>
            
            <p>For more details and to view the full code, visit the <a href="https://github.com/nkakarla712/fifa_bot" target="_blank">GitHub repository</a>.</p>
        </div>

        `,
        box8: `
        <div class="c">
            <h1>NECTAR: National Electronic Census with Tracking, Analysis, and Reporting</h1>
            <h3>Read the Full Report Below!</h3>
            <h2>Technical design of decentralized national census tracking system</h2>
            <p>The National Electronic Census with Tracking, Analysis, and Reporting (NECTAR) is a cutting-edge census system designed to modernize and streamline the collection, management, and distribution of demographic data in Fictlandia. NECTAR aims to provide reliable and timely data to governments and researchers, enhance citizen participation through a unified input process, and ensure scalability and adaptability for future changes.</p>

            <h3>Key Features:</h3>
            <ul>
                <li><strong>Reliability and Availability:</strong> NECTAR is designed to function reliably even during unexpected failures, ensuring continuous data input and retrieval.</li>
                <li><strong>Privacy:</strong> The system anonymizes citizen data to protect privacy while ensuring secure data transfers.</li>
                <li><strong>Modularity:</strong> The system is divided into distinct modules for collection, storage, transfer, and retrieval, allowing for easy scalability and adaptation.</li>
            </ul>

            <h3>System Components:</h3>
            <p><strong>Collection:</strong> Citizens can submit census surveys via paper forms or online submissions. Paper forms are scanned and uploaded, while online submissions are handled through a queue system to manage concurrent users.</p>
            <p><strong>Storage:</strong> Data is stored on local municipal machines and the national cloud, with a hierarchical file system for compressed PDFs and databases for municipal and national records.</p>
            <p><strong>Transfer:</strong> NECTAR employs a Record Transfer Protocol (RTP) layered on TCP for secure and reliable data transfer, using public-private key encryption.</p>
            <p><strong>Retrieval:</strong> Government bodies and researchers can access census records through authenticated requests, with specific protocols ensuring data privacy and timely access.</p>

            <h3>Evaluation and Performance:</h3>
            <p>NECTAR is designed to handle high data loads, especially towards the end of the census cycle. The system can process up to 28% of the population's paper forms and 77% of online submissions in the final week. In case of network or machine failures, NECTAR has robust mechanisms to catch up on uploads and ensure data delivery.</p>

            <h3>Challenges and Future Improvements:</h3>
            <p>While NECTAR significantly improves the census process, it faces challenges such as handling local machine crashes, network failures, and long-term storage capacity. Future enhancements may include better crash handling, increased storage, and improved user experience during high submission periods.</p>

            <p>Overall, NECTAR sets a strong foundation for accurate and efficient census data collection, ensuring reliable service to all stakeholders while prioritizing privacy and adaptability.</p>

            <div class="pdf-reader">
                <h3>Read the Full Report</h3>
                <iframe src="technical_materials/DP_Final_Draft.pdf" width=850 height=1100></iframe>
            </div>
        </div>
        `,
        box9: `
        <div>
            <h2>Developed Startup Concept at Penn M&TSI Camp</h2>
            <h4>Created the attached Prototype, Go-To-Market Startegy, and Sales Materials</h4>
            <p>At the UPenn M&TSI Summer Camp, my team and I were charged with creating a startup. 
                In just over three weeks, we were tasked with ideating and developing a minimum viable product, marketing materials, and a cohesive Go-to-Market strategy for our company. 
                Our startup, Navilux, was based around novel haptic navigation shoe inserts. These shoe inserts, catered toward city runners, were designed to alert the user to turn either right or left by buzzing the corresponding shoe. 
                Paired with an app, these shoe inserts would allow users to vary their routes and explore cities all while maintaining vigilance and safety while running.  
                Elected as the team leader, I was tasked with managing our team and dividing workload while also thinking critically about our potential target clientele and branding scheme. 
                I was also tasked with constructing our Go-To-Market strategy, which detailed our unique segmentation, value proposition, and potential market space.
                Ultimately, my team presented to a crowd of UPenn faculty and received the most innovative and fan favorite awards. 
            </p>
            <p>
                Although I never pursued the Navilux concept, the experience stoked my passion for entrepreneurship. I thoroughly enjoyed thinking about a company from a business perspective and uniting that understanding with my technical skills.
                </p>
            <a href="technical_materials/Navilux Go To Market.pdf" download="technical_materials/Navilux Go To Market.pdf">Download Go To Market Strategy</a>

        </div>
        `
    };

    // Function to fade in boxes
    function fadeInBoxes() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 100); // Adjust the delay as needed
        });
    }

    // Add the 'visible' class to all boxes when the content is loaded with a slight delay
    setTimeout(fadeInBoxes, 100); // Adjust the delay as needed

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            const overlay = box.querySelector('.overlay p');
            overlay.innerText = 'Click to Learn More';
        });

        box.addEventListener('click', () => {
            const id = box.id;
            popupText.innerHTML = information[id];
            popup.style.display = 'block';
        });
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
