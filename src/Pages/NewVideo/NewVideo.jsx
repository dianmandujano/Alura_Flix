import React, { useState, useEffect } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = ({ videoToEdit = null, isEditing = false, onClose }) => {
  const { addVideo, updateVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    videoURL: "",
    descricao: "",
  });

  useEffect(() => {
    if (videoToEdit && isEditing) {
      setFormData({
        titulo: videoToEdit.titulo || "",
        categoria: videoToEdit.categoria || "",
        img: videoToEdit.img || "",
        videoURL: videoToEdit.videoURL || "",
        descricao: videoToEdit.descricao || "",
      });
    }
  }, [videoToEdit, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateVideo(videoToEdit.id, formData);
    } else {
      addVideo(formData);
    }
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      videoURL: "",
      descricao: "",
    });
    if (onClose) onClose();
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      videoURL: "",
      descricao: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{isEditing ? 'Editar Vídeo' : 'Adicionar Novo Vídeo'}</FormTitle>
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="categoria"
        placeholder="Categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="img"
        placeholder="URL da Imagem"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="videoURL"
        placeholder="URL do Vídeo (YouTube embed)"
        value={formData.videoURL || ""}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descricao"
        placeholder="Descrição"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <Button type="submit">{isEditing ? 'Actualizar' : 'Salvar'}</Button>
      <Button type="button" onClick={handleReset}>
        Limpar
      </Button>
      {isEditing && (
        <Button type="button" onClick={onClose}>
          Cancelar
        </Button>
      )}
    </FormContainer>
  );
};

export default NewVideo;
