import React from 'react'
import logo from '../../images/head_img.jpg'
import mImage from '../../images/Mern.jfif'
import mongopy from '../../images/mongopy.png'
import chirag from '../../images/chirag_img.jpeg'
import aftab from '../About/images/aftab_img.jpeg'
import harshit from '../About/images/harshit_img.jpeg'
import amit from '../About/images/amit_img.jpeg'
import './About.css'


function About() {
    return (
          <div>
              <img width={'100%'} src={logo} alt = 'logo'/>

              <div className='intro'>
                  <p>
                  <b>LeetCode Tracker</b> dynamically renders data from the users' leetcode username list provided and displays it in one place. <br/><br/>
                All you need to do is add the list of users and our Application will fetch the sections of interest for you in <b>real-time</b><br/><br/>

                We also provide a <b>score</b> to each user based on the problems they have solved under the <b>easy, medium and hard,/</b> sections in Leetcode<br/><br/>

                Using the score one can correctly evaluate a user's <b> true problem solving ability,</b><br/><br/>
                  </p>
              </div>

            <h2 className='headings'><u>How we Made it?</u></h2>

              <div className='Technologies'>

                <div >
                    <p>
                We use <b>MERN</b> stack to build our Application</p>

              <p> <b>MERN</b> stands for <b>MongoDB, Express, React, Node,</b> after the four key technologies that make up the stack.</p>
                <ul>
                    <li><b> MongoDB</b> - document database</li>
                    <li><b> Express(.js)</b> - Node.js web framework</li>
                    <li> <b>React(.js) </b>- a client-side JavaScript framework</li>
                    <li> <b>Node(.js)</b> - the premier JavaScript web server</li>
                </ul>
                

                <p><b>Express.js</b> is a server-side web framework, and <b>Node.js,</b> the popular and powerful JavaScript server platform.</p>

                <p><b>MERN</b> is the approach we are going to use to work with JavaScript and JSON, all the way through.</p>
                
                </div>

                <div className='techImg'>
                    <img  width={'400px'} src={mImage} />
                    <img  width={'400px'} src={mongopy}/>
                </div>

                <div>
                   <p> <b>Web Scraping</b> also called “Crawling” or “Spidering” is the technique <b>to gather data automatically</b> from an online source usually from a website.</p>

               <p> <b>Web scraping</b> can help us extract an enormous amount of data about customers, products, people, stock markets, etc.</p>

                  <p> <b> Selenium</b> is an open-source web-based automation tool.</p>

                  <p>  <b>Selenium</b> primarily used for <b>testing </b>in the industry but It can also be used for <b>web scraping.</b></p>
                </div>


              </div>

              <h2 className='headings'><u>Developers</u></h2>

                <div className='developers'>
                    <div className='dev_ind'>
                    <img height={'300px'} src={chirag} className='dev_img'/>
                        <br/>
                        <h3>Chirag Mokashi</h3>
                        <div className='icon'>
                            <a href='https://www.linkedin.com/in/chirag-girish-mokashi-6b6217192/'><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href='https://github.com/Chirag-Mokashi'><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div className='dev_ind'>
                    <img height={'300px'} src={aftab} className='dev_img'/>
                        <br/>
                        <h3>Aftab Ahmed</h3>
                        <div className='icon'>
                            <a href='https://www.linkedin.com/in/aftab-ahmed-0389121a0'><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href='https://github.com/kiritoaftab'><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div className='dev_ind'>
                    <img height={'300px'} src={harshit} className='dev_img'/>
                        <br/>
                        <h3>Harshit Panwar</h3>
                        <div className='icon'>
                            <a href='https://www.linkedin.com/in/harshit-panwar-991830177'><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href='https://github.com/harshitpanwar'><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>

                    <div >
                    <img height={'300px'} src={amit} className='dev_img' />
                        <br/>
                        <h3 >Amit Bhushan</h3>
                        <div className='icon'> 
                            <a href='https://www.linkedin.com/in/amit--bhushan'><img   height={'40px'} src='https://cdn-icons-png.flaticon.com/512/2111/2111499.png' /></a>

                            <a href='https://github.com/bhushan-amit'><img  height={'40px'} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1'/></a>
                        </div>
                    </div>


                </div>
          </div>
    )
}

export default About
