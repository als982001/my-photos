import { SlSizeFullscreen, SlSizeActual } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../Redux/Stores";
import { useState } from "react";
import { handleImageFull, handleImgPerRow } from "../../Redux/Actions";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SizeRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    border: 1px solid black;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;

const RangeType = styled.h5`
  margin: 0 2px;
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;

export default function ImageResize() {
  const imageSizeState = useSelector(
    (state: RootState) => state.imageSizeReducer
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Icon
        onClick={() => {
          dispatch(handleImageFull(!imageSizeState.isFull));
        }}
      >
        {imageSizeState.isFull ? <SlSizeActual /> : <SlSizeFullscreen />}
      </Icon>
      <RangeType>-</RangeType>
      <SizeRange
        type="range"
        max={5}
        min={1}
        onChange={(event) => {
          const imgPerRow = +event.target.value;
          dispatch(handleImgPerRow(imgPerRow));
        }}
      />
      <RangeType>+</RangeType>
    </Container>
  );
}
