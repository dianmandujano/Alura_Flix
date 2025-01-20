import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
  ControlText,
  CardControls,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";
import React, { useState } from 'react';

const Card = ({ video, onEditClick }) => {
  const { deleteVideo } = useVideoContext();

  return (
    <CardContainer category={video.categoria}>
      <CardImage src={video.img} alt={video.title} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <CardControls>
            <FaTrashAlt />
            <ControlText>Eliminar</ControlText>
          </CardControls>
        </IconButton>

        <IconButton onClick={() => onEditClick(video)}>
          <CardControls>
            <FaEdit />
            <ControlText>Editar</ControlText>
          </CardControls>
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
