import React from 'react';
import { Stage, Layer, Line, Circle, Star } from 'react-konva';

const TriangleAndCircle = () => {
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const circleRef = React.useRef(null);

  const handleMouseDown = (e) => {
    if (!isPointInsideCircle(e.target.getStage().getPointerPosition())) {
      return; // Don't start drawing if outside circle
    }

    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    const tool = 'pen';
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current || !isPointInsideCircle(e.target.getStage().getPointerPosition())) {
      return; // Don't update line if outside circle
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const isPointInsideCircle = (point) => {
    const circle = circleRef.current;
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
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {/* Integrated circle and star from first code snippet */}
          <Circle
            ref={circleRef}
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={160}
            fill="yellow"
          />
          <Star
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            numPoints={5}
            innerRadius={80 * 0.4} // Adjust inner radius as needed
            outerRadius={80}
            fill="blue"
            stroke="brown"
            strokeWidth={5}
          />
        </Layer>
        <Layer>
          {lines.map((line, i) => (
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
        </Layer>
      </Stage>
    </div>
  );
};

export default TriangleAndCircle;
