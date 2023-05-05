//importing axios
const axios = require('axios');
const cheerio = require('cheerio');
// Helper to fetch User Data from Leetcode's Website

exports.getLeetcodeUserData = async (username) => {

    // make API request with GraphQL parameters to fetch user data

    //graphql query
    const query = `
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          problemsSolvedBeatsStats {
            difficulty
            percentage
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
      
    `;

    //graphql variables
    const variables = {
        "username": username
    }
    
    //graphql url
    const url = "https://leetcode.com/graphql";

    //make post request to graphql url with query and variables and also catch error if any
    
    const response = await axios.post(url, {
        query,
        variables
    }).catch((error) => {
        console.log(error);
    });

    console.log(response.data.data.matchedUser);

    if(response.data.data.matchedUser!=null){
      return response;
    }

    return {
      status: 404,
      message: "Invalid Leetcode Username",
    }

};


// Helper to fetch User Data from GeeksforGeeks's Website
exports.getGFGUserData = async (username) => {

    // getting HTML response from GFG's website for the user's profile

    const url = `https://auth.geeksforgeeks.org/user/${username}/`;

    const response = await axios.get(url);

    //get HTML data from response
    const data = response.data;

    //load HTML data in cheerio
    const $ = cheerio.load(data);

    //getting problems solved using selector
    const problems = $(".linksTypeProblem").text();
    const pattern = /([A-Z]+)\s*\(\s*(\d+)\s*\)/g;

    const matches = {};
    let match;
    while ((match = pattern.exec(problems)) !== null) {
      const field = match[1].toLowerCase();
      const value = parseInt(match[2], 10);
      matches[field] = value;
    }
    
    console.log(matches);

    //check if the object is not empty

    if(Object.keys(matches).length!=0){
      return {
        status: 200,
        data: matches,
      };
    }

    return {
      status: 404,
      message: "Invalid GFG Username",
    }


    

};
