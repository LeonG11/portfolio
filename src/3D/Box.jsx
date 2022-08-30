import { useMemo } from "react";

export default function Box() {
  const count = 500;
  const [position, sizes] = useMemo(() => {
    const position = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);

    for (let index = 0; index < count; index++) {
      position[index] = (Math.random() - 0.5) * 10;
      sizes[index] = Math.random() < 0.03 ? 15 : 6;
    }
    return [position, sizes];
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={position.length / 3}
          itemSize={3}
          array={position}
        />
      </bufferGeometry>
    </points>
  );
}
