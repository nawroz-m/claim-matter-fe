import React from "react";
import { HyperLinkIcon } from "./DynamicSvg.tsx";
import { argumentType } from "../utils/claim.js";

const EvidenceAndCounterCard = ({ link, number, title, description, type }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-1.5 p-1 ${type === argumentType.OBJECTIVE ? "items-start" : "items-end"}`}
      >
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="rounded-full bg-blue-100 p-1.5 text-blue-500"
        >
          <HyperLinkIcon />
        </a>
        <p
          className={`mb-0 text-sm font-semibold text-black 2xl:text-lg ${type === argumentType.OBJECTIVE ? "text-start" : "text-end"}`}
        >
          <span
            className={`rounded-sm px-1 ${type === argumentType.OBJECTIVE ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
          >
            {number}
          </span>{" "}
          <span
            className={` ${type === argumentType.OBJECTIVE ? "text-red-700" : "text-green-700"}`}
          >
            {type === argumentType.OBJECTIVE ? "Counter-Claim" : "Evidence"} /{" "}
          </span>
          {title}
        </p>
        <p
          className={`mb-0 max-h-12 overflow-y-auto text-xs font-medium text-black 2xl:max-h-20 2xl:text-sm ${type === argumentType.OBJECTIVE ? "text-start" : "text-end"}`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default EvidenceAndCounterCard;
