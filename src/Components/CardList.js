import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default ({ cards }) => (
  <Container>
    <h3 id="cardListTitle">Here are your cards.</h3>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Term</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card, index) =>
          <tr key={card.id}>
            <td>{index+1}</td>
            <td><NavLink to={`/cards/${index}`} className="term">{card.term}</NavLink></td>
            <td><NavLink to={`/edit/${index}`} className="term"><Button><FontAwesomeIcon icon={faEdit} /></Button></NavLink></td>
            <td><NavLink to={`/delete/${index}`} className="term"><Button><FontAwesomeIcon icon={faTrash} /></Button></NavLink></td>
          </tr>
        )}
      </tbody>
    </Table>

    <Row>
      <Link to="/" id="goHomeButton"><Button>Go back home</Button></Link>
      <Link to="/new"><Button>Add a new card</Button></Link>
    </Row>
  </Container>
);
