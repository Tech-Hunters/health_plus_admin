import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

const USER_API = "http://localhost:8080/user";
const DOCTOR_API = "http://localhost:8080/doctor";
const HOSPITAL_API = "http://localhost:8080/hospital";
const HEALTH_TIPS_API = "http://localhost:8080/health_tip";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: null,
      user_email: null,
      user_phno: null,
      user_image: null,
      doctor_name: null,
      doctor_edu: null,
      doctor_category: null,
      doctor_image: null,
      hospital_name: null,
      hospital_phno: null,
      hospital_image: null,
      hospital_addr: null,
      hospital_lat: null,
      hospital_lng: null,
      ht_title: null,
      ht_image: null,
      ht_content: null
    };
  }

  componentDidMount() {}

  addUser() {
    fetch(USER_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.user_name,
        email: this.state.user_email,
        phno: this.state.user_phno,
        image: this.state.user_image
      })
    });
    alert("User has been created");
  }

  addDoctor() {
    fetch(DOCTOR_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.doctor_name,
        edu: this.state.doctor_edu,
        category: this.state.doctor_category,
        image: this.state.doctor_image
      })
    });
    alert("Doctor has been created");
  }

  addHospital() {
    fetch(HOSPITAL_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.hospital_name,
        phno: this.state.hospital_phno,
        image: this.state.hospital_image,
        address: this.state.hospital_addr,
        location: {
          lat: this.state.hospital_lat,
          lng: this.state.hospital_lng
        }
      })
    });
    alert("Hospital has been created");
  }

  addHealthTip() {
    fetch(HEALTH_TIPS_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ht_title: this.state.ht_title,
        ht_image: this.state.ht_image,
        ht_details: this.state.ht_content
      })
    });
    alert("Health Tip has been created");
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add User</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            value={this.state.user_name}
                            onChange={e => {
                              this.setState({ user_name: e.target.value });
                            }}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input
                            value={this.state.user_email}
                            onChange={e => {
                              this.setState({ user_email: e.target.value });
                            }}
                            placeholder="something@email.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            value={this.state.user_phno}
                            onChange={e => {
                              this.setState({
                                user_phno: e.target.value
                              });
                            }}
                            placeholder="Phone Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Image</label>
                          <Input
                            value={this.state.user_image}
                            onChange={e => {
                              this.setState({ user_image: e.target.value });
                            }}
                            placeholder="Image Url"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    onClick={this.addUser.bind(this)}
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add Doctor</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Doctor Name</label>
                          <Input
                            value={this.state.doctor_name}
                            onChange={e => {
                              this.setState({ doctor_name: e.target.value });
                            }}
                            placeholder="Doctor Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Education</label>
                          <Input
                            value={this.state.doctor_edu}
                            onChange={e => {
                              this.setState({
                                doctor_edu: e.target.value
                              });
                            }}
                            placeholder="Education"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Category</label>
                          <Input
                            value={this.state.doctor_category}
                            onChange={e => {
                              this.setState({
                                doctor_category: e.target.value
                              });
                            }}
                            placeholder="Category"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Image</label>
                          <Input
                            value={this.state.doctor_image}
                            onChange={e => {
                              this.setState({ doctor_image: e.target.value });
                            }}
                            placeholder="Image Url"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    onClick={this.addDoctor.bind(this)}
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add Hospital</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Hospital Name</label>
                          <Input
                            value={this.state.hospital_name}
                            onChange={e => {
                              this.setState({ hospital_name: e.target.value });
                            }}
                            placeholder="Hospital Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            value={this.state.hospital_phno}
                            onChange={e => {
                              this.setState({
                                hospital_phno: e.target.value
                              });
                            }}
                            placeholder="Phone Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Image</label>
                          <Input
                            value={this.state.hospital_image}
                            onChange={e => {
                              this.setState({
                                hospital_image: e.target.value
                              });
                            }}
                            placeholder="Image"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            value={this.state.hospital_addr}
                            onChange={e => {
                              this.setState({ hospital_addr: e.target.value });
                            }}
                            placeholder="Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Latitude</label>
                          <Input
                            value={this.state.hospital_lat}
                            onChange={e => {
                              this.setState({
                                hospital_lat: e.target.value
                              });
                            }}
                            placeholder="Latitude"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Longitude</label>
                          <Input
                            value={this.state.hospital_lng}
                            onChange={e => {
                              this.setState({
                                hospital_lng: e.target.value
                              });
                            }}
                            placeholder="Longitude"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    onClick={this.addHospital.bind(this)}
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add Health Tip</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Health Tip Title</label>
                          <Input
                            value={this.state.ht_title}
                            onChange={e => {
                              this.setState({ ht_title: e.target.value });
                            }}
                            placeholder="Health Tip Title"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Health Tip Image</label>
                          <Input
                            value={this.state.ht_image}
                            onChange={e => {
                              this.setState({ ht_image: e.target.value });
                            }}
                            placeholder="Health Tip Image"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Content</label>
                          <Input
                            cols="80"
                            onChange={e => {
                              this.setState({ ht_content: e.target.value });
                            }}
                            value={this.state.ht_content}
                            placeholder="Content"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-fill"
                    color="primary"
                    onClick={this.addHealthTip.bind(this)}
                  >
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Add;
