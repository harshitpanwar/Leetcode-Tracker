import React from 'react'
import logo from '../../images/head_img.jpg'
import mImage from '../../images/Mern.jfif'
import mongopy from '../../images/mongopy.png'
import chirag from '../../images/chirag_img.jpeg'
import './About.css'


function About() {
    return (
          <div>
              <img width={'100%'} src={logo} alt = 'logo'/>

              <div className='intro'>
                  <p>
                  <b>LeetCode Tracker</b> dynamically renders data from the users' leetcode username list provided and displays it in one place. <br/><br/>
                All you need to do is add the list of users and our Application will fetch the sections of interest for you in real-time<br/><br/>

                We also provide a score to each user based on the problems they have solved under the easy, medium and hard sections in Leetcode<br/><br/>

                Using the score one can correctly evaluate a user's true problem solving ability<br/><br/>
                  </p>
              </div>

            <h3>How we Made it?</h3>

              <div className='Technologies'>

                <div>
                We use MERN stack to build our Application

                MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

                MongoDB - document database
                Express(.js) - Node.js web framework
                React(.js) - a client-side JavaScript framework
                Node(.js) - the premier JavaScript web server
                Express and Node make up the middle (application) tier.

                Express.js is a server-side web framework, and Node.js the popular and powerful JavaScript server platform.

                MERN is the approach we are going to use to work with JavaScript and JSON, all the way through.
                
                </div>

                <div className='techImg'>
                    <img  width={'400px'} src={mImage} />
                    <img  width={'400px'} src={mongopy}/>
                </div>

                <div>
                    Web Scraping also called “Crawling” or “Spidering” is the technique to gather data automatically from an online source usually from a website.

                    Web scraping can help us extract an enormous amount of data about customers, products, people, stock markets, etc.

                    Selenium is an open-source web-based automation tool.

                    Selenium primarily used for testing in the industry but It can also be used for web scraping.
                </div>


              </div>

              <h3>Developers</h3>

                <div className='developers'>
                    <div>
                    <img height={'300px'} src={chirag} />
                        <br/>
                        <b>Chirag Mokashi</b>
                        <div>
                            <a href=''><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href=''><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div>
                    <img height={'300px'} src={chirag} />
                        <br/>
                        <b>Chirag Mokashi</b>
                        <div>
                            <a href=''><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href=''><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div>
                    <img height={'300px'} src={chirag} />
                        <br/>
                        <b>Chirag Mokashi</b>
                        <div>
                            <a href=''><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href=''><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div>
                    <img height={'300px'} src={chirag} />
                        <br/>
                        <b>Chirag Mokashi</b>
                        <div>
                            <a href=''><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href=''><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>


                </div>
          </div>
    )
}

export default About
