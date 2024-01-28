import React from 'react';
import { Stage, Layer, Line, Circle } from 'react-konva';

const TriangleAndCircle = () => {
  const [yellowLines, setYellowLines] = React.useState([]);
  const [blueLines, setBlueLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const yellowCircleRef = React.useRef(null);
  const blueCircleRef = React.useRef(null);

  const handleMouseDown = (e) => {
    const pointerPos = e.target.getStage().getPointerPosition();
    if (isPointInsideCircle(pointerPos, yellowCircleRef.current)) {
      isDrawing.current = true;
      setYellowLines([...yellowLines, { points: [pointerPos.x, pointerPos.y] }]);
    } else if (isPointInsideCircle(pointerPos, blueCircleRef.current)) {
      isDrawing.current = true;
      setBlueLines([...blueLines, { points: [pointerPos.x, pointerPos.y] }]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }

    const pointerPos = e.target.getStage().getPointerPosition();
    if (isPointInsideCircle(pointerPos, yellowCircleRef.current)) {
      const lastLine = yellowLines[yellowLines.length - 1];
      lastLine.points = lastLine.points.concat([pointerPos.x, pointerPos.y]);
      setYellowLines([...yellowLines.slice(0, -1), lastLine]);
    } else if (isPointInsideCircle(pointerPos, blueCircleRef.current)) {
      const lastLine = blueLines[blueLines.length - 1];
      lastLine.points = lastLine.points.concat([pointerPos.x, pointerPos.y]);
      setBlueLines([...blueLines.slice(0, -1), lastLine]);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const isPointInsideCircle = (point, circle) => {
    const circleX = circle.x();
    const circleY = circle.y();
    const circleRadius = circle.radius();
    const distanceFromCenter = Math.sqrt(
      Math.pow(point.x - circleX, 2) + Math.pow(point.y - circleY, 2)
    );
    return distanceFromCenter <= circleRadius;
  };

  return (
    <div className="star">
            <img src="/assets/logo2.jpg" alt="Logo" className="logo" />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          <Circle
            ref={yellowCircleRef}
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={160}
            fill="yellow"
          />
          <Circle
            ref={blueCircleRef}
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={80}
            fill="blue"
            stroke="brown"
            strokeWidth={5}
          />
        </Layer>
        <Layer>
          {yellowLines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
          {blueLines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#0000ff"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default TriangleAndCircle;
