import { Stage, Layer, Line, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.png";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          <Text text={text} x={50} y={550} fontSize={20} />
          <Image x={100} y={10} image={image} />
          <Line
            x={0}
            y={0}
            points={[
              177, 221, 282, 178, 425, 181, 530, 221, 510, 294, 452, 401, 353,
              434, 254, 401, 196, 294,
            ]}
            // bezier
            tension={0.4}
            closed
            // fill={"green"}
            stroke={"red"}
            strokeWidth={5}
            draggable
          />
        </Group>
      </Layer>
    </Stage>
  );
}
