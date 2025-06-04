import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/UserProfile/PageHeader';
import UserStats from '../components/UserProfile/UserStats';
import FollowersGrid from '../components/UserProfile/FollowersGrid';

interface UserProfilePageData {
  userName: string;
  userTitle: string;
  avatarSrc: string;
  // The coverImageSrc prop is optional in the PageHeader component.
  // It can be added to this interface and the data object below if a specific image is required.
}

const UserProfileFollowersPage: React.FC = () => {
  // Dummy data for the PageHeader component.
  // Using 'as const' for literal string values as per critical guidelines to ensure they are treated as literal types.
  const pageHeaderData: UserProfilePageData = {
    userName: "David McMichael" as const,
    userTitle: "Designer" as const,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d" as const,
  };

  return (
    <MainAppLayout>
      <PageHeader
        userName={pageHeaderData.userName}
        userTitle={pageHeaderData.userTitle}
        avatarSrc={pageHeaderData.avatarSrc}
        // To use a specific cover image for the PageHeader, you would pass the
        // coverImageSrc prop here. For example:
        // coverImageSrc="/path/to/your/specific-cover-image.jpg"
        // If this prop is omitted, the PageHeader component will use its default
        // behavior for the cover background (e.g., a gradient or placeholder).
      />
      <UserStats />
      <FollowersGrid />
    </MainAppLayout>
  );
};

export default UserProfileFollowersPage;
