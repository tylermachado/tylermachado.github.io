var width = window.innerWidth;

var portfolio_data = { 
    projects: [ { 
        title: "The Most and Least Digital Jobs – and How Well They Pay",
        source: "Harvard Business Review, December 2017",
        link: "https://hbr.org/2017/12/the-most-and-least-digital-jobs-and-how-well-they-pay",
        image: "img/jobs.png",
    }, { 
        title: "New England vs. Columbus Matchday Handout Poster",
        source: "New England Revolution, July 2016",
        link: "https://twitter.com/tylermachado/status/751944653616939008",
        image: "img/revs.png",
    },{ 
        title: "The Decline of Yahoo in Its Own Words",
        source: "Harvard Business Review, June 2016",
        link: "https://hbr.org/2016/06/the-decline-of-yahoo-in-its-own-words",
        image: "img/yahoo.png",
    }]
};

var portfolio_design = { 
    projects: [ { 
        title: "INN Brand Guidelines",
        link: "http://www.sevendaysvt.com/general/multimedia/interactives/110613_phish/index.html",
        source: "Institute for Nonprofit News, December 2018",
        image: "img/phish.jpg",
    }, { 
        title: "New Montana Free Press Website",
        source: "Institute for Nonprofit News, October 2018",
        link: "https://montanafreepress.org",
        image: "img/interlocks.png",
    }, { 
        title: "How Corporate Boards Connect, in Charts",
        source: "Harvard Business Review, April 2016",
        link: "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
        image: "img/interlocks.png",
    }]
};

var portfolio_dev = { 
    projects: [ { 
        title: "HBR Bots for Slack",
        link: "http://digiday.com/publishers/harvard-business-review-launched-slackbot-delivers-workplace-advice/",
        source: "Harvard Business Review, October 2016",
        image: "img/slack.png",
    }, { 
        title: "Estimate the Cost of a Meeting with This Calculator",
        source: "Harvard Business Review, January 2016",
        link: "https://hbr.org/2016/01/estimate-the-cost-of-a-meeting-with-this-calculator",
        image: "img/meetingcost.png",
    }, { 
        title: "The Best-Performing CEOs in the World",
        source: "Harvard Business Review, November 2015",
        link: "https://hbr.org/2015/11/the-best-performing-ceos-in-the-world",
        image: "img/top100ceos.png",
    }]
}; 

var portfoliosource   = $("#portfoliotemplate").html();
var portfoliotemplate = Handlebars.compile(portfoliosource);

$('#portfolio_data').append(portfoliotemplate(portfolio_data));
$('#portfolio_design').append(portfoliotemplate(portfolio_design));
$('#portfolio_dev').append(portfoliotemplate(portfolio_dev));




var talks = { 
    items: [ {
        link: "https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed",
        title: "A Data Analysis of My Drinking Habits",
        source: "written for a statistics class in December 2015 and repurposed for a SRCCON lightning talk in July 2016"

    }, {
        link: "http://www.bu.edu/com/data-storytelling/",
        title: "Free, Easy Web Tools for Dataviz",
        source: "Boston University's Storytelling With Data workshops, June 2016"

    }, {
        link: "http://www.tylermachado.com/slides-responsive-dataviz/#/",
        title: "Responsive Design and Dataviz",
        source: "CASCADE BOS, April 2016"

    }, {
        link: "https://source.opennews.org/en-US/articles/lonely-newsroom-coder/",
        title: "Big Ambition, Small Staff, How the F*** Do I Prioritize?",
        source: "SRCCON, June 2015"

    }, {
        link: "http://thoughtfaucet.com/event/web-analytics-wednesday/",
        title: "An untitled talk about email analytics that's not on the web",
        source: "Burlington Web Analytics Wednesday, December 2012"

    }, {
        link: "http://www.sevendaysvt.com/vermont/how-to-hack-it-in-a-hackathon/Content?oid=2241933",
        title: "How to Hack It in a Hackathon",
        source: "<em>Seven Days</em>, October 2012"

    }, {
        link: "http://thoughtfaucet.com/making-things/examples/social-media-and-government-a-mind-map-of-a-panel-discussion/",
        title: "How Social Media is Redefining Politics",
        source: "Burlington NetSquared, May 2012"

    }]
}; 

var talkssource   = $("#talkstemplate").html();
var talkstemplate = Handlebars.compile(talkssource);

$('#talks').append(talkstemplate(talks));



