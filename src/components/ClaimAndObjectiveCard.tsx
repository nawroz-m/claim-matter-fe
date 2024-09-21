import React from "react";
import {
  ClaimIcon,
  MessageIcon,
  ObjectiveIcon,
  RequestIcon,
  HorizontalLineIcon,
} from "./DynamicSvg.tsx";
import { argumentType } from "../utils/claim.js";
const ClaimAndObjectivCard = ({ claimObject }: any) => {
  return (
    <>
      <div className="relative">
        <span
          className={`absolute -top-7 z-10 ${claimObject?.type === argumentType?.CLAIM ? "right-0 text-green-500" : claimObject?.type === argumentType?.REQUEST ? "right-0 text-blue-500" : "left-0 text-red-500"}`}
        >
          {claimObject?.type === argumentType?.CLAIM ? (
            <ClaimIcon />
          ) : claimObject?.type === argumentType?.REQUEST ? (
            <RequestIcon />
          ) : (
            <ObjectiveIcon />
          )}
        </span>
        <div
          className={`relative z-20 rounded-lg p-4 text-white ${claimObject?.type === argumentType?.CLAIM ? "bg-green-600" : claimObject?.type === argumentType?.REQUEST ? "bg-blue-600" : "bg-red-600"}`}
        >
          <span className="mb-1 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold 2xl:text-lg">
              {claimObject?.type === argumentType?.CLAIM
                ? "Claim/Alacak Hafta Tatili"
                : claimObject?.type === argumentType?.REQUEST
                  ? "Request/Alacak Hafta Tatili"
                  : "Counter-Claim/Alacak Hafta Tatili"}
            </h3>
            <span
              className={`rounded-sm p-1 ${claimObject?.type === argumentType?.CLAIM ? "bg-green-400" : claimObject?.type === argumentType?.REQUEST ? "bg-blue-400" : "bg-red-400"}`}
            >
              <MessageIcon />
            </span>
          </span>

          <p className="max-h-32 overflow-y-auto text-sm font-medium 2xl:max-h-40">
            {claimObject?.description}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span
              className={`rounded-md px-2 py-1 text-sm font-medium text-black ${claimObject?.type === argumentType?.CLAIM ? "bg-green-100" : claimObject?.type === argumentType?.REQUEST ? "bg-blue-100" : "bg-red-100"}`}
            >
              <strong>Traraf: </strong> Davaci
            </span>
            <span className="rounded-md bg-slate-50 px-2 py-1 text-sm font-medium capitalize text-black">
              cevab Davaci
            </span>
          </div>
        </div>
        <span
          className={`absolute bottom-0 top-0 z-[1] my-auto flex h-fit w-[109%] rounded-lg px-1.5 py-1 text-white ${claimObject?.type === argumentType?.CLAIM ? "-left-3.5 bg-green-800" : claimObject?.type === argumentType?.REQUEST ? "-left-3.5 bg-blue-800" : "-right-3.5 justify-end bg-red-800"}`}
        >
          <HorizontalLineIcon />
        </span>
      </div>
    </>
  );
};

export default ClaimAndObjectivCard;
