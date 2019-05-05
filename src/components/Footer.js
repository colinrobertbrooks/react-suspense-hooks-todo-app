import React from 'react';
import { Container } from 'reactstrap';

const Footer = ({ user, clearUser }) => (
  <div className="mt-auto">
    <div className="footer">
      <Container className="text-center">
        {user && (
          <span className="text-muted">
            Logged in as{' '}
            <button
              type="button"
              className="look-like-a-link"
              title="Change user"
              onClick={clearUser}
            >
              {user}
            </button>
          </span>
        )}
      </Container>
    </div>
  </div>
);

export default Footer;
