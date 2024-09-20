import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

const ArgumentMap = () => {
  return (
    <>
      <div className="absolute left-0 right-0 top-12 z-[2] mx-auto w-fit rounded-sm bg-blue-300 p-5 capitalize">
        Clami/Matter and case id
      </div>
      <ArcherContainer noCurves strokeColor="#ccc" strokeWidth={1} className="">
        <div className="flex justify-center gap-12">
          <div className="grid w-[40%] grid-cols-5 items-center gap-12">
            <div className="col-span-3 flex flex-col gap-12">
              <div className="border-2 border-green-50">
                <ArcherElement id="evidence-1">
                  <div>Evidence 1</div>
                </ArcherElement>
              </div>
              <div className="border-2 border-green-50">
                <ArcherElement id="evidence-2">
                  <div>Evidence 2</div>
                </ArcherElement>
              </div>
            </div>

            <div className="col-span-2 border-2 border-red-50">
              <ArcherElement
                id="claim"
                relations={[
                  {
                    targetId: "evidence-1",
                    targetAnchor: "right",
                    sourceAnchor: "left",
                  },
                  {
                    targetId: "evidence-2",
                    targetAnchor: "right",
                    sourceAnchor: "left",
                  },
                  {
                    targetId: "objective",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <div>Claim</div>
              </ArcherElement>
            </div>
          </div>
          <div className="relative z-[1] h-screen w-[1px] bg-slate-400"></div>

          <div className="grid w-[40%] grid-cols-5 items-center gap-12">
            <div className="col-span-2 border-2 border-red-50">
              <ArcherElement
                id="objective"
                relations={[
                  {
                    targetId: "counter-claim-1",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                  {
                    targetId: "counter-claim-2",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <div>Objective</div>
              </ArcherElement>
            </div>
            <div className="col-span-3 flex flex-col gap-12">
              <div className="border-2 border-green-50">
                <ArcherElement id="counter-claim-1">
                  <div>Counter-claim 1</div>
                </ArcherElement>
              </div>
              <div className="border-2 border-green-50">
                <ArcherElement id="counter-claim-2">
                  <div>Counter-claim 2</div>
                </ArcherElement>
              </div>
            </div>
          </div>
        </div>
      </ArcherContainer>
    </>
  );
};

export default ArgumentMap;
