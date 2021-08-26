

import React from "react";
const Posts = ({ postsToRender }) => {return (
    <ul>
      {postsToRender.map((issue, index) => (
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
                    <h2>What happened in {issue["Issue Id"]}</h2>
                    <p>{issue.Description.split("##")[0]}}</p>
                    <p>{issue.Description.split("##")[1]}}</p>
                    <p>{issue.Description.split("##")[2]}}</p>
                    <p>{issue.Description.split("##")[3]}}</p>
                    <pre>
                      <code class="language-html">
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

      ))}
    </ul>
  );
};
export default Posts;