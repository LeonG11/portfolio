import {Canvas} from "@react-three/fiber";
import React from "react";
import Box from "../3D/Box";

export default function Locate() {
  return <div className="locate">
    <Canvas>
      <ambientLight/>
      <pointLight position={[10,10,10]}/>
      <Box/>
    </Canvas>
    </div>;
}
