import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ExplosionIcon } from "./DynamicSvg.tsx";
import ClaimAndObjectivCard from "./ClaimAndObjectiveCard.tsx";
import { argumentType } from "../utils/claim.js";
import EvidenceAndCounterCard from "./EvidenceAndCounterCard.tsx";
import ArgumentSidebarCard from "./ArgumentSidebarCard.tsx";
import { getArgumentData } from "../api/api.ts";
interface ARGUMENTMAP {
  claim: any[];
  objection: any[];
}
const ArgumentMap = () => {
  const [data, setData] = useState<ARGUMENTMAP>({ claim: [], objection: [] });
  const [isLoading, setIsLoading] = useState(true);
  const fetchArgumentData = async () => {
    const response: any = await getArgumentData({ params: "" });
    response?.success ? setData(response?.data) : setIsLoading(false);
  };
  useEffect(() => {
    fetchArgumentData();
  }, []);
  return (
    <>
      {data?.claim?.length > 0 || data?.objection?.length > 0 ? (
        <div className="flex overflow-hidden">
          <ArcherContainer
            noCurves
            strokeColor="#C5CACE"
            strokeWidth={1.2}
            className=""
          >
            <ArcherElement
              id={`devider-start`}
              relations={[
                {
                  targetId: "devider-end",
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <div className="h-0.5 w-full"></div>
            </ArcherElement>
            <div className="relative left-0 right-0 z-[2] mx-auto my-6 w-fit rounded-lg bg-[#957BB4] px-5 py-4 text-center font-bold text-white">
              <span className="flex justify-center">
                <ExplosionIcon />
              </span>
              Client/Matter and <br /> Case ID
            </div>

            <div className="mx-12 grid grid-cols-2 justify-center gap-16 2xl:mx-20 2xl:gap-20">
              <div className="flex flex-col gap-8">
                {data?.claim?.map((claim: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-4 items-center gap-12"
                    >
                      <div className="col-span-2 flex flex-col gap-6">
                        {claim?.evidence?.map((evidence: any, idx: number) => {
                          return (
                            <ArcherElement key={idx} id={evidence?.evidenceId}>
                              <span>
                                <EvidenceAndCounterCard
                                  link={evidence?.link}
                                  number={idx + 1}
                                  title={evidence?.title}
                                  description={evidence?.description}
                                  type={claim?.type}
                                />
                              </span>
                            </ArcherElement>
                          );
                        })}
                      </div>

                      <div className="col-span-2">
                        <ArcherElement
                          id={`claim-${index}`}
                          relations={[
                            ...claim?.evidence?.map((evidence: any) => ({
                              targetId: evidence?.evidenceId,
                              targetAnchor: "right",
                              sourceAnchor: "left",
                              style: {
                                strokeColor:
                                  claim?.type === argumentType.CLAIM
                                    ? "#47945C"
                                    : claim?.type === argumentType.REQUEST
                                      ? "#3880F2"
                                      : "#F54834",
                              },
                            })),
                            ...claim?.assignedObjection?.map(
                              (assignedObjection: any) => ({
                                targetId: assignedObjection,
                                targetAnchor: "left",
                                sourceAnchor: "right",
                              }),
                            ),
                          ]}
                        >
                          <span>
                            <ClaimAndObjectivCard claimObject={claim} />
                          </span>
                        </ArcherElement>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-8">
                {data?.objection?.map((counter: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-4 items-center gap-12"
                    >
                      <div className="col-span-2">
                        <ArcherElement
                          id={`${counter?.ojbectionId}`}
                          relations={[
                            ...counter?.counterClaim?.map(
                              (counterClaim: any) => ({
                                targetId: counterClaim?.counterId,
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: {
                                  strokeColor:
                                    counter?.type === argumentType.CLAIM
                                      ? "#47945C"
                                      : counter?.type === argumentType.REQUEST
                                        ? "#3880F2"
                                        : "#F54834",
                                },
                              }),
                            ),
                          ]}
                        >
                          <span>
                            <ClaimAndObjectivCard claimObject={counter} />
                          </span>
                        </ArcherElement>
                      </div>
                      <div className="col-span-2 flex flex-col gap-6">
                        {counter?.counterClaim?.map(
                          (counterClaim: any, idx: number) => {
                            return (
                              <ArcherElement
                                key={idx}
                                id={counterClaim?.counterId}
                              >
                                <span>
                                  <EvidenceAndCounterCard
                                    link={counterClaim?.link}
                                    number={idx + 1}
                                    title={counterClaim?.title}
                                    description={counterClaim?.description}
                                    type={counter?.type}
                                  />
                                </span>
                              </ArcherElement>
                            );
                          },
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <ArcherElement id={`devider-end`}>
              <div className=""></div>
            </ArcherElement>
          </ArcherContainer>
          <ArgumentSidebarCard data={data} />
        </div>
      ) : (
        <div className="my-32 text-center text-3xl font-bold">
          {isLoading ? "Good things take time 🌀" : "No data available yet."}
          <img
            src="https://tenor.com/view/robot-excited-dance-delight-happy-gif-16480760688547563830.gif"
            width={400}
            height={400}
            alt=""
            className="mx-auto"
          />
        </div>
      )}
    </>
  );
};

export default ArgumentMap;
