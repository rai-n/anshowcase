import issuesJSON from "../../issues.json";
import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Posts from "./Post";
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

 
 
    const postsPerPage = 3;
    let arrayForHoldingPosts = [];

    const App = () => {
      const [postsToShow, setPostsToShow] = useState([]);
      const [next, setNext] = useState(3);
    
      const loopWithSlice = (start, end) => {
        const slicedPosts = posts.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
      };

      useEffect(() => {
        loopWithSlice(0, postsPerPage);
      }, []);
    
      const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
      };  
 
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
                    <li align="start" style={{listStyleType: "none"}}>
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
                In this YouTrack export of last six months, I have written well over <b>{issues.length}</b> issues. Identifying {issues.length} that may impact accessibility and usability for users with vision, auditory, motor or cognitive impairments.
              </p>
              <p>
                See the issues below for more detail.
              </p>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      
        {issues.map((issue) => (
          <div>
              <Post postsToRender={postsToShow}></Post>
              <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
              <button onClick={handleShowMorePosts}>Load more</button>
            </Container>
          </div>
        ))}
      </div>
    );
  }
}

export default LocalIssues;
