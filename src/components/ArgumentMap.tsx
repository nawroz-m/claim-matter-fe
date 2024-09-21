import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ExplosionIcon } from "./DynamicSvg.tsx";
import ClaimAndObjectivCard from "./ClaimAndObjectiveCard.tsx";
import { argumentType } from "../utils/claim.js";
import EvidenceAndCounterCard from "./EvidenceAndCounterCard.tsx";
import ArgumentSidebarCard from "./ArgumentSidebarCard.tsx";

const data = {
  claim: [
    {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description: `
        ile ilgi (a) kurul kararına istinaden Cankurtaran Mah. 58 ada, 1
            parselin (a) (b) olarak ifraz edilmesi, için 15.09.2021 tarih ve 852
            sayılı ilgi (c) Encümen Kararı alınmıştı. Ancak ilgi (d) kayıtlı
            İstanbul Vakıflar 1. Bölge Müdürlüğü yazısı
        
        `,
      name: "John Doe",
      type: "claim",
      claimId: "claim-01",
      assignedObjection: ["objection-01", "objection-02"],
      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-01",
        },
        {
          title: "Contract",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-02",
        },
        {
          title: "Email Communication",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
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
      assignedObjection: [],

      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
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
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-01",
      ojbectionId: "objection-01",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-0",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-1",
        },
      ],
    },
    {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-01",
      ojbectionId: "objection-02",

      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-01",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-02",
        },
        {
          title: "Contract Clause",
          description:
            "Highlighted contract clause regarding service quality guarantees",
          link: "https://example.com/contract_clause.png",
          counterId: "counter-claim-03",
        },
      ],
    },
  ],
};

const ArgumentMap = () => {
  return (
    <>
      <div className="flex">
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

          <div className="grid grid-cols-2 justify-center gap-20">
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
    </>
  );
};

export default ArgumentMap;
