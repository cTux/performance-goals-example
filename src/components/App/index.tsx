import { Slider } from '@mui/material';
import cns from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import cn from './styles.module.scss';

export const App = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    setWidth(40);
  }, []);

  const handleSliderChange = useCallback((event, value) => {
    setWidth(value);
  }, []);

  const imageWidth = 1200;
  const stickPercentPosition1 = 80;
  const backgroundPositionX1 = ref?.current
    ? -imageWidth / 2 +
      (ref?.current?.clientWidth * stickPercentPosition1) / 100
    : 0;

  const stickPercentPosition2 = 20;
  const backgroundPositionX2 = ref?.current
    ? -imageWidth / 2 +
      (ref?.current?.clientWidth * stickPercentPosition2) / 100
    : 0;

  return (
    <div id={'app'} className={cns(cn.app)}>
      <div className={cns(cn.containerWrapper)}>
        <Slider
          value={width}
          aria-label="Percent"
          valueLabelDisplay="auto"
          max={100}
          min={0}
          onChange={handleSliderChange}
        />

        <div style={{ position: 'relative', height: '14px', margin: '8px 0' }}>
          <div
            ref={ref}
            className={cns(cn.container, cn.containerFirst)}
            style={{
              backgroundPositionX: `${backgroundPositionX1}px`,
            }}
          ></div>
          <div
            className={cns(cn.container, cn.containerSecond)}
            style={{
              width: `${width}%`,
              backgroundPositionX: `${backgroundPositionX1}px`,
            }}
          ></div>
          <div
            className={cns({
              [cn.circle]: true,
              [cn.circlePast]: width >= stickPercentPosition1,
            })}
            style={{ left: `${width}%` }}
          />
        </div>
        <div style={{ position: 'relative', height: '14px', margin: '8px 0' }}>
          <div
            ref={ref}
            className={cns(cn.container, cn.containerFirst)}
            style={{
              backgroundPositionX: `${backgroundPositionX2}px`,
            }}
          ></div>
          <div
            className={cns(cn.container, cn.containerSecond)}
            style={{
              width: `${width}%`,
              backgroundPositionX: `${backgroundPositionX2}px`,
            }}
          ></div>
          <div
            className={cns({
              [cn.circle]: true,
              [cn.circlePast]: width >= stickPercentPosition2,
            })}
            style={{ left: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
};
