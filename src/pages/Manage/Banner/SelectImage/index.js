import React from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { Container } from './styles';

export default function SelectImage() {
  return (
    <Container>
      <MdCameraAlt size={54} color="rgba(255,255,255,0.3)" />
      <span>Selecionar imagem</span>
    </Container>
  );
}
