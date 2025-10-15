import CanvasContainer from "./components/CanvasContainer";
import Circle from "./components/Circle";
import CircleTwo from "./components/CircleTwo";
import Cylinder from "./components/Cylinder";
import InfinityShape from "./components/Infinity";
import Square from "./components/Square";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(Draggable, InertiaPlugin);

const App = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      if (document.querySelectorAll(".three-d")) {
        document.querySelectorAll(".three-d").forEach((item) => {
          Draggable.create(item, {
            bounds: ".main-inner",
            inertia: true,
          });
        });
      }
    });
  });
  return (
    <div className="main h-dvh w-full  relative bg-[#141414] overflow-hidden flex justify-center items-center">
      <div className="main-inner max-w-[1400px] max-h-[1000px] w-full m-auto mt-auto relative h-full flex justify-center items-center">
        <div className="box-three-d three-d h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] absolute top-0 lg:top-[-120px] left-[-60px] lg:left-0 z-10">
          <CanvasContainer>
            <Square />
          </CanvasContainer>
        </div>

        <div className="content fixed flex justify-center items-center text-center z-10 pointer-events-none">
          <div className="text-white flex flex-col">
            <h1 className="text-[150px] lg:text-[250px] leading-[100%] font-[900] anton">
              404
            </h1>
            <h1 className="text-5xl lg:text-9xl tracking-[-4px] font-[100] poppins">
              User not found
            </h1>
          </div>
        </div>

        <div className="circle-three-d three-d h-[150px] w-[150px] absolute bottom-[0] right-0 lg:right-[100px] ">
          <CanvasContainer>
            <Circle />
          </CanvasContainer>
        </div>

        <div className="circle-two-three-d three-d h-[240px] lg:h-[400px] w-[240px] lg:w-[400px] absolute bottom-0 lg:bottom-[-100px] left-[-20px] lg:left-[0%] z-[1]">
          <CanvasContainer>
            <Cylinder />
          </CanvasContainer>
        </div>

        <div className="circle-two-three-d h-[400px] w-[400px] lg:h-[400px] lg:w-[500px] absolute top-[50%] left-[50%] z-[1] transform-[translate(-50%,-50%)]">
          <CanvasContainer>
            <InfinityShape />
          </CanvasContainer>
        </div>

        <div className="circle-two-three-d three-d w-[300px] h-[300px] lg:h-[500px] lg:w-[500px] absolute top-[-130px] right-[-120px] lg:top-[0] lg:right-[0%] z-[1]">
          <CanvasContainer>
            <CircleTwo />
          </CanvasContainer>
        </div>
      </div>
    </div>
  );
};
export default App;
