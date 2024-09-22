import React, { useState } from "react";
import { argumentType } from "../utils/claim.js";
import {
  ClaimIcon,
  ExplosionIcon,
  ObjectiveIcon,
  RequestIcon,
} from "./DynamicSvg.tsx";
const ArgumentSidebarCard = ({ data }: any) => {
  const [isArgumentSidePanlHovered, setIsArgumentSidePanlHovered] =
    useState(false);

  const getWidths = (assignedObjectionLength) => {
    const totalWidth = 16;
    let claimWidth, objectionWidth;

    if (!assignedObjectionLength) {
      claimWidth = totalWidth;
      objectionWidth = 0;
    } else if (assignedObjectionLength === 1) {
      claimWidth = 8;
      objectionWidth = 8;
    } else if (assignedObjectionLength === 2) {
      claimWidth = 6;
      objectionWidth = 10;
    } else {
      objectionWidth = Math.min(13, 8 + assignedObjectionLength);
      claimWidth = totalWidth - objectionWidth;
    }
    return { claimWidth, objectionWidth };
  };

  return (
    <>
      <div
        className="relative me-5 mt-12 flex flex-col gap-5 bg-slate-100 py-8 opacity-50 hover:opacity-100"
        onMouseEnter={() => setIsArgumentSidePanlHovered(true)}
        onMouseLeave={() => setIsArgumentSidePanlHovered(false)}
      >
        <div className="relative flex items-center">
          <div
            className={`absolute right-[1.4rem] flex overflow-hidden transition-all duration-300 ${isArgumentSidePanlHovered ? "translate-x-0 opacity-100" : "translate-x-36 opacity-0"} $`}
          >
            <div
              className={`stext-sm flex flex-nowrap items-center font-normal 2xl:text-base`}
            >
              <ExplosionIcon color="#957BB4" />

              <div
                className={`relative w-64 text-nowrap rounded-md bg-purple-200 px-4 py-0.5 before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:rounded-s-md before:bg-[#957BB4]`}
              >
                Client/Matter and Case ID
              </div>
            </div>
          </div>
          <div className="">
            <div className={`mb-[1px] h-3 w-5 bg-[#957BB4]`}></div>
          </div>
        </div>

        {data?.claim?.map((claims: any, index: number) => {
          const assignedObjectionLength = claims.assignedObjection?.length || 0;
          const widths = getWidths(assignedObjectionLength);
          return (
            <div key={index} className="relative flex items-center">
              <div
                className={`absolute right-[1.4rem] flex overflow-hidden transition-all duration-300 ${isArgumentSidePanlHovered ? "translate-x-0 opacity-100" : "translate-x-36 opacity-0"} $`}
              >
                <div
                  className={`stext-sm flex flex-nowrap items-center font-normal 2xl:text-base`}
                >
                  {claims?.type === argumentType?.CLAIM ? (
                    <span className="text-green-400">
                      <ClaimIcon />
                    </span>
                  ) : (
                    <span className="text-blue-400">
                      <RequestIcon />
                    </span>
                  )}
                  {claims?.assignedObjection.length > 0 && (
                    <span className="text-red-400">
                      <ObjectiveIcon />
                    </span>
                  )}
                  <a href={`#${claims?.claimId}`}>
                    <div
                      style={{ width: `${widths?.claimWidth * 16}px` }}
                      className={`relative cursor-pointer text-nowrap rounded-md px-4 py-0.5 before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:rounded-s-md ${claims?.assignedObjection.length > 0 ? "-mr-2" : ""} ${claims?.type === argumentType?.CLAIM ? "bg-green-200 before:bg-green-500" : claims?.type === argumentType?.REQUEST ? "bg-blue-200 before:bg-blue-500" : "bg-red-200 before:bg-red-500"}`}
                    >
                      {claims?.name?.split(" ")[0]}
                      (1)
                    </div>
                  </a>
                  {claims?.assignedObjection.length > 0 && (
                    <a href={`#${claims?.assignedObjection?.[0]}`}>
                      <div
                        style={{ width: `${widths?.objectionWidth * 16}px` }}
                        className={`relative cursor-pointer text-nowrap rounded-md bg-red-100 px-4 py-0.5 before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:rounded-md before:bg-[#be8c9c]`}
                      >
                        Idd ({claims?.assignedObjection.length})
                      </div>
                    </a>
                  )}
                </div>
              </div>
              <div className="">
                <a href={`#${claims?.claimId}`}>
                  <div
                    className={`mb-[1px] h-3 w-5 ${claims?.type === argumentType?.CLAIM ? "bg-green-500" : claims?.type === argumentType?.REQUEST ? "bg-blue-500" : "bg-red-500"} `}
                  ></div>
                </a>
                {claims?.assignedObjection.length > 0 && (
                  <a href={`#${claims?.assignedObjection?.[0]}`}>
                    <div className={`h-3 w-5 bg-red-500`}></div>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArgumentSidebarCard;
