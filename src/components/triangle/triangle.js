import React, { useRef, useState } from 'react';
import { Stage, Layer, Line, Circle, RegularPolygon } from 'react-konva';

const StarAndDrawing = () => {
  const centerX = 200;
  const centerY = 200;
  const circleRadius = 160;
  const triangleHeight = 90;

  const triangleBase = Math.sqrt(3) * triangleHeight;

  const triangleVertices = [
    { x: centerX - triangleBase / 2, y: centerY + triangleHeight / 2 },
    { x: centerX + triangleBase / 2, y: centerY + triangleHeight / 2 },
    { x: centerX, y: centerY - triangleHeight /1},
  ];

  const triangleCenteredVertices = triangleVertices.map((vertex) => ({
    x: vertex.x ,
    y: vertex.y - circleRadius / 19,
  }));

  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: 'pen', points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    // Check if the new point is inside the circle
    if (isPointInsideCircle(point, { x: centerX, y: centerY }, circleRadius)) {
      let lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);

      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  
    // Check if the last line is drawn inside the brown triangle
    const lastLine = lines[lines.length - 1];
    const lastPoint = { x: lastLine.points[lastLine.points.length - 2], y: lastLine.points[lastLine.points.length - 1] };
    if (isPointInsideTriangle(lastPoint, triangleCenteredVertices)) {
      alert('Congratulations! You won the game.');
    }
  };
  

  const isPointInsideCircle = (point, center, radius) => {
    const distance = Math.sqrt((point.x - center.x) ** 2 + (point.y - center.y) ** 2);
    return distance <= radius;
  };

  const isPointInsideTriangle = (point, vertices) => {
    const [v1, v2, v3] = vertices;
    const d1 = sign(point, v1, v2);
    const d2 = sign(point, v2, v3);
    const d3 = sign(point, v3, v1);
    const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(hasNeg && hasPos);
  };

  const sign = (p1, p2, p3) => {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  };

  return (
    <div>
      <Stage
        width={400}
        height={400}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          <Circle x={centerX} y={centerY} radius={circleRadius} fill="yellow" />
          <RegularPolygon
            sides={3}
            x={centerX}
            y={centerY - circleRadius / 20}
            radius={triangleHeight / 1.1} // Adjust the radius to be equal to the triangle
            rotation={0}
          
            fill="pink"
            closed={false}
          />
          <Line
            points={[
              triangleCenteredVertices[0].x,
              triangleCenteredVertices[0].y,
              triangleCenteredVertices[1].x,
              triangleCenteredVertices[1].y,
              triangleCenteredVertices[2].x,
              triangleCenteredVertices[2].y,
              triangleCenteredVertices[0].x,
              triangleCenteredVertices[0].y,
            ]}
            stroke="brown"
            strokeWidth={5}
          />

          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
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

export default StarAndDrawing;