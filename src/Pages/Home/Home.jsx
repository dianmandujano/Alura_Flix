import React, { useState } from 'react';
import { useVideoContext } from "../../Contexts/VideoContext";

import { Main } from "./Home.styled";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";
import Card from '../../Components/Card/Card';
import Modal from '../../Components/EditModal/EditModal';
import NewVideo from '../NewVideo/NewVideo';

const Home = () => {
  const { videos, loading } = useVideoContext();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const featuredVideo = videos[0];

  const handleEditClick = (video) => {
    setSelectedVideo(video);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <Main>
        {featuredVideo && <Banner video={featuredVideo} />}
        <CategoryVideos onEditClick={handleEditClick} />

        <Modal isOpen={isEditModalOpen} onClose={handleCloseModal}>
          <NewVideo 
            videoToEdit={selectedVideo}
            isEditing={true}
            onClose={handleCloseModal}
          />
        </Modal>
      </Main>
    </>
  );
};

export default Home;
