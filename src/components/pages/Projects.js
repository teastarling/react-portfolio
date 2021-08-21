import React from 'react';
import Card from "react-bootstrap/Card"
import fidoFriendly from "../../img/FidoFriendly.png"
import eCommerce from "../../img/ecommerce.png"
import weatherDash from "../../img/weatherdash.png"
import employeeTrack from "../../img/employeetracker.png"
import teamProfile from "../../img/teamprofile.png"
import workSched from "../../img/workdaysched.png"

export default function Projects() {
  return (
    <div className="col pt-5">
      <h1 className="head-text" id="work">Projects</h1>
      <div className="row">
        <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fidoFriendly} />
            <Card.Body className="gray">
              <Card.Title>Fido Friendly</Card.Title>
                <Card.Text className="text-white">Site utilizing multiple API calls and dynamically generated content in order to answer the question, "Is this movie safe for my dog to watch?"
                </Card.Text>
                  <a href="https://github.com/teastarling/fido-friendly" className="btn btn-secondary btn-sm m-1">Repo</a>
                  <a href="https://teastarling.github.io/fido-friendly/" className="btn btn-secondary btn-sm">Deployed</a>
            </Card.Body>
          </Card>
          <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={eCommerce} />
            <Card.Body className="gray">
              <Card.Title>E-Commerce Database</Card.Title>
                <Card.Text className="text-white">Database application utilizing mysql2, sequelize, express, and node.js in order to seed, add, delete, update, and display items from the mysql database in .json format.
                </Card.Text>
                  <a href="https://github.com/teastarling/e-commerce-database" className="btn btn-secondary btn-sm m-1">Repo</a>
            </Card.Body>
          </Card>
          <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={weatherDash} />
            <Card.Body className="gray">
              <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text className="text-white">Dynamically creates elements displaying data resulting from API calls to OpenWeather according to cities searched by user. Stores past searches in local storage for easy search history, generating buttons according to stored info that may be clicked so city may be easily called on again.
                </Card.Text>
                  <a href="https://github.com/teastarling/weather-dashboard" className="btn btn-secondary btn-sm m-1">Repo</a>
                  <a href="https://teastarling.github.io/weather-dashboard/" className="btn btn-secondary btn-sm">Deployed</a>
            </Card.Body>
          </Card>
          <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={employeeTrack} />
            <Card.Body className="gray">
              <Card.Title>Employee Tracker</Card.Title>
                <Card.Text className="text-white">Application utilizing MySQL database calls, Node.js interactions, and the inquirer.js library in order to view and change employee database information from the terminal.
                </Card.Text>
                  <a href="https://github.com/teastarling/employee_tracker" className="btn btn-secondary btn-sm m-1">Repo</a>
            </Card.Body>
          </Card>
          <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={teamProfile} />
            <Card.Body className="gray">
              <Card.Title>Team Profile Generator</Card.Title>
                <Card.Text className="text-white">Application allows the user to answer questions with the Inquirer package in the command line and generates a styled HTML page according to user input.
                </Card.Text>
                  <a href="https://github.com/teastarling/team-profile-generator" className="btn btn-secondary btn-sm m-1">Repo</a>
            </Card.Body>
          </Card>
          <Card className="m-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={workSched} />
            <Card.Body className="gray">
              <Card.Title>Work Day Scheduler</Card.Title>
                <Card.Text className="text-white">Application utilizes JQuery, Moment.js, and Bootstrap to allow users to input scheduled events into 9am-5pm blocks corresponding with current time and saves events to local storage for retrieval.
                </Card.Text>
                  <a href="hhttps://github.com/teastarling/day_planner" className="btn btn-secondary btn-sm m-1">Repo</a>
                  <a href="https://teastarling.github.io/day_planner/" className="btn btn-secondary btn-sm">Deployed</a>
            </Card.Body>
          </Card>
          </div>
    </div>
  );
}