
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import {EffectFlip, EffectCube, EffectCards, EffectCoverflow} from "swiper/modules";
import { setTab } from './store';

const SliderComponent = ({ effect }) => {
  return (
      <Swiper
          modules={[effect]}
          effect={effect.name.toLowerCase()}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
  );
};

const App = () => {

  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.tabs.currentTab);

  const handleChange = (event, newValue) => {
    dispatch(setTab(newValue));
  };

  const effects = [
    { name: 'EffectFlip', effect: EffectFlip },
    { name: 'EffectCube', effect: EffectCube },
    { name: 'EffectCoverflow', effect: EffectCoverflow },
    { name: 'EffectCards', effect: EffectCards }
  ];

  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Tabs value={currentTab} onChange={handleChange} centered>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
          <Tab label="Tab 5" />
        </Tabs>
        <Box sx={{ p: 2 }}>
          {currentTab === 0 && <SliderComponent effect={effects[0].effect} />}
          {currentTab === 1 && <SliderComponent effect={effects[1].effect} />}
          {currentTab === 2 && <SliderComponent effect={effects[2].effect} />}
          {currentTab === 3 && <SliderComponent effect={effects[3].effect} />}
          {currentTab === 4 && <SliderComponent effect={effects[0].effect} />}
        </Box>
      </Box>
    </div>
  );
}

export default App;
