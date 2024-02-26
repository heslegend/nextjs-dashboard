// pages/acceptInvitation/[invitationId].tsx
import { GetServerSideProps } from 'next';
import MobileDetect from 'mobile-detect';
import React from 'react';

interface AcceptInvitationProps {
  // Define any props you need for your component here
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const md = new MobileDetect(req.headers['user-agent']!);
  const invitationId = query.invitationId as string; // Ensure proper typing

  // Using mobile-detect for more accurate device detection
  if (md.mobile()) {
    let destination = '/yourWebContentPage'; // Default to web content page for demonstration

    if (md.os() === 'iOS') {
      destination = 'https://apps.apple.com/us/app/pup-diary/id6476625040'; // iOS-specific page
    } else if (md.os() === 'AndroidOS') {
      destination = 'https://play.google.com/store/apps/details?id=com.bensforge.pupdiary'; // Android-specific page
    }

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  // For web users, proceed to render the page
  return { props: {} }; // Pass props as needed
};

const AcceptInvitation: React.FC<AcceptInvitationProps> = (props) => {
  return (
    <div>
      <p>Welcome to the web version of the invitation acceptance page.</p>
    </div>
  );
};

export default AcceptInvitation;
