document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const close = document.querySelector('.close');


    const information = {
        box1: `
            <div>
    <h2>Senior UROP in the Media Lab: Detecting Stress to Prevent Drug Relapse</h2>
    <h4>Developed deep learning pipelines for physiological stress inference in substance-use disorder populations</h4>
    <p>
        Working with Dr. Rich Fletcher, I engineered a signal processing and ML pipeline leveraging heart rate data from consumer-grade wearables 
        with the goal of performing real-time stress detection within substance-use disorder (SUD) 
        populations. The objective was to reduce patient relapse rates by enabling Just-In-Time Adaptive Interventions (JITAIs).
        By actively monitoring stress signals, we could deliver context-aware, digitally-delivered psychological treatments 
        triggered dynamically as patients navigated recovery in the real world.
    </p>
    <p>
        My initial objective was to apply <em>K-means clustering</em>, an unsupervised machine learning technique, to segment patients 
        into distinct archetypes based on their physiological stress responses observed during controlled lab experiments. The 
        underlying hypothesis was that identifying population subgroups would enable a cluster-conditional modeling approach that could improve predictive accuracy via separate multi-variate regression models (MVR) trained on each population archetype. To support this, I integrated and cleaned data from both lab-controlled and real-world (ambulatory) settings. This included starndardizing heart rate (HR) and heart rate variability (HRV) metrics relative to each patient’s lab baseline and incorporating noise filtering and windowing to smooth the curves. I then experimented with several clustering algorithms (e.g., K-means, DBSCAN, Spectral clustering) to uncover potential latent structures. While I did produce distinct groupings, the clusters lacked consistency and did not meaningfully improve downstream model cross-validated RMSE or out-of-sample generalization performance.</p>
    <p>
        Building on this, I explored the use of <em>autoencoders</em>, a type of neural network designed for dimensionality reduction and feature learning, as an alternative to identify latent representations of stress. The model was trained to compress the original dataset into a compact latent space and minimize reconstruction loss to capture the most salient patterns in the data, similar to t-SNE methodologies. After training, I used the encoder component of the network to transform the original dataset into this lower-dimensional latent space and compressed features were then used as inputs to regression models aimed at predicting patient stress levels. This approach allowed for a more nuanced representation of the data.
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
    <video width="70%" height="auto" autoplay muted controls>
        <source src="technical_materials/VidForWebsite.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <video width="20%" autoplay muted controls>
        <source src="technical_materials/RunningVidForProject - SD 480p.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p>My team and I developed code to allow an RC car to plan its own path and drive itself through a city (video on the left) as well as race around a track under complete autonomous control (video on the right).
        Our car competed in a final challenge against other teams in the class. Our car <strong> placed first</strong> in the track race and were one of the only teams to implement path planning
        in the city driving section of the challenge (pictured above). Our car was also capable of stopping at stop signs placed randomly around the track.
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
</div>
        `,
        box3: `
        <div class="project-summary">
        <h2>Kalshi Event Contract Trading Strategy and Prediction Model</h2>

        <h3>Overview</h3>
        <p>
            Our system leverages event contracts on Kalshi, an online exchange platform. Kalshi enables the trading of contracts that track financial indices like the Nasdaq or S&P 500. These contracts have prices ranging between $0 and $1 and convert to $1 if the relevant index closes within a specified range (e.g., 18000 to 18100 for the Nasdaq). 
            In this paradigm, a price of 50 cents indicates a 50% perceived chance of the event occurring.
        </p>

        <h3>Automated Trading Strategy</h3>
        <p>
            The core component our system is a fully autonomous trading strategy implemented in python. Our strategy capitalizes on the human tendency to overestimate the likelihood of extreme market events. Key highlights include:
        </p>
        <ul>
            <li><strong>End-of-Day Trading:</strong> The autonomous strategy operates without manual intervention, purchasing contracts just before market close if the index is securely within the target range in order to exploit consistent underpricing.</li>
            <li><strong>Arbitrage and Loss Prevention:</strong> Our system automatically identifies arbitrage opportunities and executes trades across multiple ranges to lock in profits. There are also fail safes and loss prevention systems.</li>
            <li><strong>Data Acquisition:</strong> The system autonomously uses Optical Character Recognition (OCR) to scrape public index price data, circumventing costly data feeds and ensuring real-time information access.</li>
            <li><strong>Performance:</strong> The strategy consistently achieved an average daily return of approximately 6% while running fully autonomously</li>
        </ul>

        <h3>Machine Learning Price Prediction</h3>
        <p>
            The second aspect of the project involves a LSTM machine learning model to predict stock prices. The model aims to surpass current market predictions by analyzing:
        </p>
        <ul>
            <li><strong>Data Inputs:</strong> Features include the current time, Kalshi market price, index price, volatility measures, and end-of-day options prices for relevant market ranges.</li>
            <li><strong>LSTM Model:</strong> We utilize a Long Short-Term Memory (LSTM) neural network to capture the relationship between the underlying index price, options prices, and the value of the Kalshi asset. LSTMs are well-suited for multivariate time series data as it can learn patterns over time and predict future index prices.</li>
            <li><strong>Model Output:</strong> Afte being trained on years of historical data, the model forecasts the asset price an hour into the future to enable protitable trading.</li>
        </ul>

        <h3>Conclusion</h3>
        <p>
            This dual-faceted system showcases an innovative approach to event contract trading through automation and machine learning. By blending strategic trading techniques with advanced predictive modeling, it effectively enhances market engagement and forecasting accuracy.
        </p>
        </div>
      
        `,
        box4: `
        <div>
            <h2>Synapse — Your AI-Powered Network CRM</h2>
            <p><a href="https://ai-synapse.org/" target="_blank" style="display:inline-block; padding:10px 28px; background-color:rgba(255,255,255,0.1); border-radius:100px; font-size:15px; font-weight:500; text-decoration:none; color:#fff; transition:background-color 0.3s ease;">Visit our website →</a></p>

            <h3>The Problem</h3>
            <p>
                Professionals lose touch with 60-80% of their network within a year. Not because they don't care,
                but because no one has time to manually track hundreds of relationships. The contacts app on your phone
                stores names and numbers — it tells you nothing about when you last spoke to someone, what you talked about,
                or why you should reconnect before your next meeting.
            </p>

            <h3>What Synapse Does</h3>
            <p>
                Synapse is a personal relationship manager built around Iris, a conversational AI assistant that acts as
                your network's memory. Rather than browsing spreadsheets or scrolling through contact lists, you talk to
                Iris by voice or text and she handles the rest: adding contacts, setting reminders, surfacing who
                you're overdue to reach out to, and briefing you before important conversations. She learns the context
                of your relationships over time, so the more you use her, the sharper her suggestions get.
            </p>
            <p>
                Synapse tracks the context around your relationships and Iris turns that into actionable prompts. Before a meeting, ask her to brief you and get a real-time dossier on a contact's recent activity, role changes, and suggested talking points. No more walking into a coffee chat cold.
            </p>

            <h3>Core Capabilities</h3>
            <ul>
                <li><strong>Iris — Voice + Text Assistant:</strong> Talk to Iris like you'd talk to a chief of staff. Ask "Who do I know at Goldman?" or "Who haven't I talked to in 3 months?" and get instant, structured answers. Add contacts, set reminders, and query your entire network through natural conversation.</li>
                <li><strong>Smart Suggestions:</strong> Iris proactively flags overdue reconnections, upcoming birthdays, and contacts who happen to be in your city — so nothing falls through the cracks.</li>
                <li><strong>Pre-Meeting Briefings:</strong> Ask Iris to brief you on anyone in your network. She pulls from your personal notes and live web data — recent job changes, posts, news — and suggests conversation starters tailored to your relationship history.</li>
                <li><strong>Life Event Tracking:</strong> Go beyond phone numbers. Track promotions, graduations, anniversaries, and job changes with scheduled reminders so you show up at the right moments.</li>
                <li><strong>LinkedIn & Snapchat Sync:</strong> Pull in professional details and birthday data from existing platforms. No manual re-entry.</li>
                <li><strong>Tags & Semantic Search:</strong> Organize contacts by custom groups (investors, classmates, mentors) and search across names, companies, locations, and notes simultaneously.</li>
                <li><strong>Home Screen Widget:</strong> See upcoming events and launch Iris directly from your home screen without opening the app.</li>
            </ul>
        </div>
`,
        box5: `
        <div>
            <h2>NFL Gameplanning Engine</h2>
            <h4>Built an automated analytics engine that ingests raw NFL player tracking data and outputs fully structured play breakdowns using the same custom terminology coaches use in real their team film rooms</h4>
            <div class="media-row">
                <div class="media-item">
                    <iframe src="https://www.youtube.com/embed/WjOiN0OefGM?si=J5WM5zXw72QbIJAx" title="Football Engine Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p style="text-align:center; font-size:13px; margin-top:6px;">Demo Video</p>
                </div>
                <div class="media-item">
                    <object data="technical_materials/Gameplan Pitch Deck.pdf" type="application/pdf">
                        <p>Unable to display PDF. <a href="technical_materials/Gameplan Pitch Deck.pdf" download>Download Pitch Deck</a></p>
                    </object>
                    <p style="text-align:center; font-size:13px; margin-top:6px;">Pitch Deck</p>
                </div>
            </div>
            <p>
                I designed and built a full-stack football analytics engine that processes <strong>raw NFL player tracking data</strong>, positional and velocity vectors, and automatically parses each play into structured, coach-readable outputs. The pipeline ingests tracking CSVs from the NFL's Next Gen Stats system, joins against play-level metadata, and runs each frame through a series of spatial classifiers that resolve every dimension an NFL coordinator evaluates on film:
                personnel grouping, formation family and modifiers, receiver splits, pre-snap motions, route concepts, QB dropback depth, defensive fronts, techniques, coverage shells, blocking schemes, and more. The raw data is then made accessible through an interactive, agentic coaching module where coaches can ask any question about their data set and get immediate answers and analysis.
            </p>
            <p>The engine implements several interconnected analytics modules, each bridging computational geometry and signal processing to professional football schematic language:</p>
            <ul>
                <li><strong>Formation Recognition via Spatial Clustering</strong>: Classifies 100+ offensive formations (Trips, Doubles, Bunch, Empty, Spread, 4x1, etc.) by computing each skill player's displacement from the offensive line and nearest lineman. Receiver splits are bucketed into discrete zones using yard-line thresholds configurable to each team, then matched against a JSON-defined playbook schema encoding formation families, side designations (strong/weak), and modifier tags for unbalanced lines, compressed sets, and stack/bunch variants. </li>
                <li><strong>Route Classification via Two-Stage DTW Pipeline</strong>: Converts raw player trajectories into named route concepts using a two-stage classifier. Stage one runs a geometric heuristic: the trajectory is approximated as either a single-segment or two-segment piecewise linear fit, with the breakpoint optimized via grid search to minimize L2 reconstruction error. From the best-fit model, the engine extracts stem depth, break angle, break direction, cross-field displacement, and velocity changes to detect routes. Stage two normalizes the route to a common reference frame and runs FastDTW with Euclidean distance against a pre-built library of ground-truth route templates, partitioned by position group, release direction, and route family. The predictions are combined into a single label for each of the 100+ route subtypes.</li>
                <li><strong>Defensive Front Technique Mapping</strong>: Maps each box defender to an alignment technique (0 through 4i, strong/weak shade) by computing their y-offset relative to the nearest offensive lineman's shoulder and bucketing into the NFL's standard technique numbering system. Aggregates individual alignments into front classifications (e.g., Over, Under, Bear, 3-4) based on custom team requirements.</li>
                <li><strong>Frame-Level Collision Detection for Blocking Assignments</strong>: Computes pairwise Euclidean distances between all offensive and defensive players at each frame to identify blocking engagements, pull assignments for gap-scheme runs, and pass protection matchups. Autonomously identifies run blocking schemes and individual responsibilities.</li>
                <li><strong>Coverage Shell & Leverage Analysis</strong>: Computes pre-snap leverage for each defender relative to their nearest eligible receiver — inside, outside, or head-up based on y-displacement — along with cushion depth. Post-snap, tracks each defender's movement vector to classify zone responsibilities vs. man-trail behavior, with manned-on assignments inferred from sustained proximity.</li>
                <li><strong>Validation Against Ground-Truth Labels</strong>: Built a regression test harness that compares engine output against a manually labeled truth set (CSV with expert-annotated personnel, formation, motion, route names, and coverage per play) and reports per-attribute pass/fail rates, enabling systematic accuracy tracking as classification heuristics are tuned.</li>
            </ul>
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
            <div class="pdf-reader">
                <h3>Read the Full Report</h3>
                <iframe src="technical_materials/Navilux Go To Market.pdf" width=850 height=1100></iframe>
            </div>
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
