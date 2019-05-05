import React from 'react';
import { Container } from 'reactstrap';

const Footer = ({ user }) => (
  <div className="mt-auto">
    <div className="footer">
      <Container className="text-center">
        {user && (
          <span className="text-muted">
            Logged in as <span className="font-weight-bold">{user}</span>
          </span>
        )}
      </Container>
    </div>
  </div>
);

export default Footer;
