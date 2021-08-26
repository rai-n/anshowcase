import issuesJSON from "../../issues.json";
import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../../issue.css";
class LocalIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: issuesJSON,
    };
  }

  render() {
    const { issues } = this.state;

    let companies = new Set();
    issuesJSON.forEach((user) => {
      companies.add(user.Customer);
    });

    let success = new Set();
    issuesJSON.forEach((user) => {
      success.add(user["Success Criteria"]);
    });

    return (
      <div>
        <h1 className="center">6 month issues exported from YouTrack</h1>
        <aside>
          <p>
            <a href="https://www.w3.org/TR/WCAG21/">
              Web Content Accessibility Guideline 2.1 AA
            </a>
          </p>
        </aside>

        <Container>
          <Row>
            <Col>
              {" "}
              <h2>Worked for the following clients:</h2>
              <ol>
                {
                  //converting set to array
                  [...companies].map((name) => (
                    <li align="start">
                      <div>{name}</div>
                    </li>
                  ))
                }
              </ol>
            </Col>
            <Col>
              {" "}
              <h2>Reporting issues for the following success criterias</h2>
              <ul>
                {
                  //converting set to array
                  [...success].map((name) => (
                    // not using list style
                    <li align="start" style={{ listStyleType: "none" }}>
                      <div>{name}</div>
                    </li>
                  ))
                }
              </ul>
            </Col>
            <Col>
              {" "}
              <h2>Summary</h2>
              <p>
                In this YouTrack export of last six months, I have written well
                over <b>{issues.length}</b> issues. Identifying {issues.length}{" "}
                that may impact accessibility and usability for users with
                vision, auditory, motor or cognitive impairments.
              </p>
              <p>See the issues below for more detail.</p>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>

        {issues.map((issue) => (
          <div>
            <Card style={{ width: "18rem" }} className="container">
              <ListGroup variant="flush">
                <ListGroup.Item className="component">
                  Summary: {issue.Summary}
                </ListGroup.Item>
                <ListGroup.Item className="component">
                  Component: {issue.Component}
                </ListGroup.Item>
                <ListGroup.Item className="prior">
                  Success Criteria: {issue["Success Criteria"]}
                </ListGroup.Item>
                <ListGroup.Item className="devices">
                  Devices: {issue.Devices}
                </ListGroup.Item>
                <ListGroup.Item className="devices">
                  State: {issue.state}
                </ListGroup.Item>
              </ListGroup>
            </Card>{" "}
            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <br></br>
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>View Recommendation</Accordion.Header>
                      <Accordion.Body>
                        {
                          <div>
                            <h2>{issue.Summary}</h2>
                            <p>{issue.Description.split("##")[0]}</p>
                            <h3>What happened</h3>
                            <p>{issue.Description.split("##")[1]}</p>
                            <h3>Where it happened</h3>
                            <p>{issue.Description.split("##")[2]}</p>
                            <h3>Steps to reproduce</h3>
                            {issue.Description.split("##")[3]
                              .split(/[1-4]/g)
                              .map((item) => (
                                <p>
                                  <div>{item}</div>
                                </p>
                              ))}

                            <pre>
                              <code class="language-html">
                                <h3>Recommendation</h3>
                                <p>{issue.Description.split("##")[4]}}</p>
                              </code>
                            </pre>
                          </div>
                        }
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col></Col>
              </Row>
              <br></br> <br></br> <br></br> <br></br> <br></br>
            </Container>
          </div>
        ))}
      </div>
    );
  }
}

export default LocalIssues;
