import { Suspense } from "react";
import "./App.css";
import ArgumentMap from "./components/ArgumentMap.tsx";
import { ArcherContainer, ArcherElement } from "react-archer";
import ClaimAndObjectivCard from "./components/ClaimAndObjectiveCard.tsx";
import EvidenceAndCounterCard from "./components/EvidenceAndCounterCard.tsx";
import { argumentType } from "./utils/claim.js";
const arr = [
  {
    claim: {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "\n        ile ilgi (a) kurul kararına istinaden Cankurtaran Mah. 58 ada, 1\n            parselin (a) (b) olarak ifraz edilmesi, için 15.09.2021 tarih ve 852\n            sayılı ilgi (c) Encümen Kararı alınmıştı. Ancak ilgi (d) kayıtlı\n            İstanbul Vakıflar 1. Bölge Müdürlüğü yazısı\n\n        ",
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
    objection: {
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
    request: {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      complainant: "Acme Consulting LLC",
      name: "John Doe",
      type: "request",
      claimId: "request-01",
      ojbectionId: "objection-01",
      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "request-claim-0",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "request-claim-1",
        },
      ],
    },
  },
  {
    claim: {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "\n        ile ilgi (a) kurul kararına istinaden Cankurtaran Mah. 58 ada, 1\n            parselin (a) (b) olarak ifraz edilmesi, için 15.09.2021 tarih ve 852\n            sayılı ilgi (c) Encümen Kararı alınmıştı. Ancak ilgi (d) kayıtlı\n            İstanbul Vakıflar 1. Bölge Müdürlüğü yazısı\n\n        ",
      name: "John Doe",
      type: "claim",
      claimId: "claim-02",
      assignedObjection: ["objection-01", "objection-02"],
      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-04",
        },
        {
          title: "Contract",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-05",
        },
      ],
    },
    objection: {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-3",
      ojbectionId: "objection-02",
      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-2",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-3",
        },
      ],
    },
    request: {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      complainant: "Acme Consulting LLC",
      name: "John Doe",
      type: "request",
      claimId: "request-02",
      ojbectionId: "objection-02",
      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "request-claim-2",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "request-claim-3",
        },
      ],
    },
  },
  {
    claim: {
      title: "Unpaid Invoice",
      complainant: "Acme Consulting LLC",
      description:
        "\n        ile ilgi (a) kurul kararına istinaden Cankurtaran Mah. 58 ada, 1\n            parselin (a) (b) olarak ifraz edilmesi, için 15.09.2021 tarih ve 852\n            sayılı ilgi (c) Encümen Kararı alınmıştı. Ancak ilgi (d) kayıtlı\n            İstanbul Vakıflar 1. Bölge Müdürlüğü yazısı\n\n        ",
      name: "John Doe",
      type: "claim",
      claimId: "claim-03",
      assignedObjection: ["objection-01", "objection-02"],
      evidence: [
        {
          title: "Invoice #12345",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/invoice12345.pdf",
          evidenceId: "evidence-06",
        },
        {
          title: "Contract",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-07",
        },
        {
          title: "Contract",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/contract_acmeconsulting.pdf",
          evidenceId: "evidence-09",
        },
      ],
    },
    objection: {
      title: "Dispute of Unpaid Invoice",
      description: "Services were not rendered as specified in the contract",
      respondent: "Acme Consulting LLC",
      contactPerson: "John Doe",
      type: "objective",
      claimId: "claim-03",
      ojbectionId: "objection-03",
      counterClaim: [
        {
          title: "Service Quality Report",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
          link: "https://example.com/quality_report.pdf",
          counterId: "counter-claim-4",
        },
        {
          title: "Communication Log",
          description:
            "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
          link: "https://example.com/communication_log.docx",
          counterId: "counter-claim-5",
        },
      ],
    },
    // request: {
    //   title: "Dispute of Unpaid Invoice",
    //   description: "Services were not rendered as specified in the contract",
    //   complainant: "Acme Consulting LLC",
    //   name: "John Doe",
    //   type: "request",
    //   claimId: "request-03",
    //   ojbectionId: "objection-03",
    //   counterClaim: [
    //     {
    //       title: "Service Quality Report",
    //       description:
    //         "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini",
    //       link: "https://example.com/quality_report.pdf",
    //       counterId: "request-claim-4",
    //     },
    //     {
    //       title: "Communication Log",
    //       description:
    //         "Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerind yönetmelerini Muhakemat nedir? Güvenli, Akıllı ve Entegre Dava Yönetim Sistemi Muhakemat platformu, Ünmaların dava süreçlerinde yönetmelerini Muhakemat platformu, Ün maların davaları süreçlerind yönetmelerini Muhakemat.",
    //       link: "https://example.com/communication_log.docx",
    //       counterId: "request-claim-5",
    //     },
    //   ],
    // },
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense
          fallback={
            <div className="my-16 text-center font-semibold">
              Good things take time 🌀
            </div>
          }
        >
          <ArcherContainer
            noCurves
            strokeColor="#C5CACE"
            strokeWidth={1.2}
            className=""
          >
            {arr?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="my-12 grid grid-cols-4 items-center gap-12"
                >
                  <div className="flex flex-col gap-4">
                    {items?.claim?.evidence?.map((evidence, idx) => {
                      return (
                        <ArcherElement key={idx} id={evidence?.evidenceId}>
                          <span>
                            <EvidenceAndCounterCard
                              key={idx}
                              link={evidence?.link}
                              number={idx + 1}
                              title={evidence?.title}
                              description={evidence?.description}
                              type={items?.type}
                            />
                          </span>
                        </ArcherElement>
                      );
                    })}
                  </div>
                  <ArcherElement
                    id={items?.claim?.claimId}
                    relations={[
                      ...items?.claim?.evidence?.map((counterClaim) => ({
                        targetId: counterClaim?.evidenceId,
                        targetAnchor: "right",
                        sourceAnchor: "left",
                        style: {
                          strokeColor: "#47945C",
                        },
                      })),
                      {
                        targetId: items.objection.ojbectionId,
                        targetAnchor: "left",
                        sourceAnchor: "right",
                        style: {
                          strokeColor: "#C5CACE",
                        },
                      },
                    ]}
                  >
                    <span>
                      <ClaimAndObjectivCard claimObject={items?.claim} />
                    </span>
                  </ArcherElement>

                  <ArcherElement
                    id={items?.objection?.ojbectionId}
                    relations={[
                      ...items?.objection?.counterClaim?.map(
                        (counterClaim) => ({
                          targetId: counterClaim?.counterId,
                          targetAnchor: "left",
                          sourceAnchor: "right",
                          style: {
                            strokeColor: "#F54834",
                          },
                        }),
                      ),
                    ]}
                  >
                    <span>
                      <ClaimAndObjectivCard claimObject={items?.objection} />
                    </span>
                  </ArcherElement>
                  <div className="flex flex-col gap-4">
                    {items?.objection?.counterClaim?.map(
                      (counterClaim, idx) => {
                        return (
                          <ArcherElement key={idx} id={counterClaim?.counterId}>
                            <span>
                              <EvidenceAndCounterCard
                                link={counterClaim?.link}
                                number={idx + 1}
                                title={counterClaim?.title}
                                description={counterClaim?.description}
                                type={items.objection?.type}
                              />
                            </span>
                          </ArcherElement>
                        );
                      },
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    {items?.request &&
                      items?.request?.counterClaim?.map((evidence, idx) => {
                        return (
                          <ArcherElement key={idx} id={evidence?.counterId}>
                            <span>
                              <EvidenceAndCounterCard
                                link={evidence?.link}
                                number={idx + 1}
                                title={evidence?.title}
                                description={evidence?.description}
                                type={items?.type}
                              />
                            </span>
                          </ArcherElement>
                        );
                      })}
                  </div>

                  {items?.request && (
                    <ArcherElement
                      id={items?.request?.claimId}
                      relations={[
                        ...items?.request?.counterClaim?.map(
                          (counterClaim) => ({
                            targetId: counterClaim?.counterId,
                            targetAnchor: "right",
                            sourceAnchor: "left",
                            style: {
                              strokeColor: "#3880F2",
                            },
                          }),
                        ),
                      ]}
                    >
                      <span>
                        <ClaimAndObjectivCard claimObject={items?.request} />
                      </span>
                    </ArcherElement>
                  )}
                </div>
              );
            })}
          </ArcherContainer>

          <ArgumentMap />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
