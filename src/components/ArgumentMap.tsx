import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ExplosionIcon } from "./DynamicSvg.tsx";
import ClaimAndObjectivCard from "./ClaimAndObjectiveCard.tsx";

const data = {
  claim: [
    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has not paid for services rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "claim",
      claimId: "claim-01",
      evidence: [
        {
          title: "Invoice #12345",
          description: "rrrrrr services provided",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-01",
        },
        {
          title: "Contract",
          description: "343434 outlining payment terms",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-02",
        },
        {
          title: "Email Communication",
          description: "E445ggggggg ment reminders",
          link: "https://example.com/email_thread.eml",
          evidenceId: "evidence-03",
        },
      ],
    },
    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "Client has not paid for services rendered as per contract dated 12/09/2024",
      name: "John Doe",
      type: "request",
      claimId: "claim-02",

      evidence: [
        {
          title: "Invoice #12345",
          description: "Detailed invoice for services provided",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-0",
        },
        {
          title: "Contract",
          description: "Signed contract outlining payment terms",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-1",
        },
        {
          title: "Email Communication",
          description: "Email thread showing payment reminders",
          link: "https://example.com/email_thread.eml",
          evidenceId: "evidence-2",
        },
      ],
    },
  ],
  objection: [
    {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "Alice Johnson",
      type: "objective",
      claimId: "claim-01",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Internal report detailing issues with provided services",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-0",
        },
        {
          title: "Communication Log",
          description:
            "Record of attempts to resolve issues with service provider",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-1",
        },
        {
          title: "Contract Clause",
          description:
            "Highlighted contract clause regarding service quality guarantees",
          link: "https://example.com/contract_clause.png",
          counterId: "counter-claim-2",
        },
      ],
    },
  ],
};
const ArgumentMap = () => {
  return (
    <>
      <ArcherContainer noCurves strokeColor="#ccc" strokeWidth={1} className="">
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
        <div className="relative left-0 right-0 z-[2] mx-auto my-12 w-fit rounded-lg bg-purple-500 px-5 py-4 text-center font-bold text-white">
          <span className="flex justify-center">
            <ExplosionIcon />
          </span>
          Client/Matter and <br /> Case ID
        </div>

        <div className="grid grid-cols-2 justify-center gap-20 px-8">
          <div className="flex flex-col gap-16">
            {data?.claim?.map((claim: any, index: number) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center gap-12"
                >
                  <div className="col-span-2 flex flex-col gap-12">
                    {claim?.evidence?.map((evidence: any, idx: number) => {
                      return (
                        <div key={idx} className="border-2 border-green-50">
                          <ArcherElement id={evidence?.evidenceId}>
                            <div>{evidence?.description}</div>
                          </ArcherElement>
                        </div>
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
                        })),
                        {
                          targetId: claim?.claimId,
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        },
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

          <div className="flex flex-col gap-16">
            {data?.objection?.map((counter: any, index: number) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center gap-12"
                >
                  <div className="col-span-2">
                    <ArcherElement
                      id={`${counter?.claimId}`}
                      relations={[
                        ...counter?.counterClaim?.map((counterClaim: any) => ({
                          targetId: counterClaim?.counterId,
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        })),
                      ]}
                    >
                      <span>
                        <ClaimAndObjectivCard claimObject={counter} />
                      </span>
                    </ArcherElement>
                  </div>
                  <div className="col-span-2 flex flex-col gap-12">
                    {counter?.counterClaim?.map(
                      (counterClaim: any, idx: number) => {
                        return (
                          <div key={idx} className="border-2 border-green-50">
                            <ArcherElement id={counterClaim?.counterId}>
                              <div>{counterClaim?.description}</div>
                            </ArcherElement>
                          </div>
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
    </>
  );
};

export default ArgumentMap;
