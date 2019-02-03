import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

const USER_API = "http://localhost:8080/user";
const DOCTOR_API = "http://localhost:8080/doctor";
const HOSPITAL_API = "http://localhost:8080/hospital";
const HEALTH_TIPS_API = "http://localhost:8080/health_tip";

const TableRow = ({ selected, id, name, handleSelect }) => {
  console.log(`render TableRow :: ${id} :: ${name}`);
  return (
    <tr>
      <td>
        <input
          name={id}
          type="checkbox"
          checked={selected}
          onChange={handleSelect}
        />
      </td>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      response: [],
      doctors: [],
      hospitals: [],
      health_tips: []
    };
  }

  componentDidMount() {
    fetch(USER_API)
      .then(response => response.json())
      .then(data => this.setState({ users: data.users }));

    fetch(DOCTOR_API)
      .then(response => response.json())
      .then(data => this.setState({ doctors: data.doctors }));

    fetch(HOSPITAL_API)
      .then(response => response.json())
      .then(data => this.setState({ hospitals: data.hospitals }));

    fetch(HEALTH_TIPS_API)
      .then(response => response.json())
      .then(data => this.setState({ health_tips: data.health_tips }));
  }

  createUserTable = () => {
    return (
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(user => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.name}
                    width="30px"
                    height="30px"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  createDoctorTable = () => {
    return (
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Education</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.doctors.map(doctor => {
            return (
              <tr>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.category}</td>
                <td>{doctor.edu}</td>
                <td>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    width="30px"
                    height="30px"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  createHospitalTable = () => {
    return (
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {this.state.hospitals.map(hospital => {
            return (
              <tr>
                <td>{hospital.id}</td>
                <td>{hospital.name}</td>
                <td>{hospital.address}</td>
                <td>{hospital.phno}</td>
                <td>{JSON.stringify(hospital.location, null, 2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  createHealthTipsTable = () => {
    return (
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Uploaded Time</th>
          </tr>
        </thead>
        <tbody>
          {this.state.health_tips.map(health_tip => {
            return (
              <tr>
                <td>{health_tip.ht_id}</td>
                <td>{health_tip.ht_title}</td>
                <td>{health_tip.ht_details}</td>
                <td>{health_tip.ht_time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <pre>{JSON.stringify(this.state.users, null, 2)}</pre> */}
                  <CardTitle tag="h4">User Table</CardTitle>
                </CardHeader>
                <CardBody>{this.createUserTable()}</CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <pre>{JSON.stringify(this.state.doctors, null, 2)}</pre> */}
                  <CardTitle tag="h4">Doctor Table</CardTitle>
                </CardHeader>
                <CardBody>{this.createDoctorTable()}</CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <pre>{JSON.stringify(this.state.hospitals, null, 2)}</pre> */}
                  <CardTitle tag="h4">Hospital Table</CardTitle>
                </CardHeader>
                <CardBody>{this.createHospitalTable()}</CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <pre>{JSON.stringify(this.state.health_tips, null, 2)}</pre> */}
                  <CardTitle tag="h4">Health Tips Table</CardTitle>
                </CardHeader>
                <CardBody>{this.createHealthTipsTable()}</CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
