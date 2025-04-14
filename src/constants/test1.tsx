const dichotomies = [
  {
    id: "EI",
    traits: [
      {
        id: "E",
        name: "Extraversion",
        description:
          "Energized by social interactions and external activities.",
      },
      {
        id: "I",
        name: "Introversion",
        description:
          "Energized by solitary activities and internal reflection.",
      },
    ],
  },
  {
    id: "SN",
    traits: [
      {
        id: "S",
        name: "Sensing",
        description:
          "Focuses on concrete, tangible information and present realities.",
      },
      {
        id: "N",
        name: "Intuition",
        description:
          "Focuses on abstract, conceptual information and future possibilities.",
      },
    ],
  },
  {
    id: "TF",
    traits: [
      {
        id: "T",
        name: "Thinking",
        description: "Decisions based on logic and objective analysis.",
      },
      {
        id: "F",
        name: "Feeling",
        description: "Decisions based on logic and objective analysis.",
      },
    ],
  },
  {
    id: "JP",
    traits: [
      {
        id: "J",
        name: "Judging",
        description: "Decisions based on logic and objective analysis.",
      },
      {
        id: "P",
        name: "Perceiving",
        description:
          "Prefers flexible, spontaneous approaches and adaptability.",
      },
    ],
  },
];

const reportTopics = [
  {
    title: "Self Awareness",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Leadership Development",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Career Alignment",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Career Planning",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Team Building",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Conflict Resolution",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Improved Communication",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Strength Identification",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    title: "Personal Growth",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
];

const personalityTypes = [
  {
    code: "ISTJ",
    title: "Inspector",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D9E9F0",
    image: "/inspector.png",
  },
  {
    code: "ISFJ",
    title: "Protector",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D9E9F0",
    image: "/protector.png",
  },
  {
    code: "ISFP",
    title: "Artist",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D9E9F0",
    image: "/artist.png",
  },
  {
    code: "ESFJ",
    title: "Consul",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D9E9F0",
    image: "/consul.png",
  },
  {
    code: "ISTP",
    title: "Virtuoso",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#EFE2C9",
    image: "/virtuoso.png",
  },
  {
    code: "ESTP",
    title: "Entrepreneur",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#EFE2C9",
    image: "/entrepreneur.png",
  },
  {
    code: "ESFP",
    title: "Entertainer",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#EFE2C9",
    image: "/entertainer.png",
  },
  {
    code: "ESTJ",
    title: "Executive",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#EFE2C9",
    image: "/executive.png",
  },
  {
    code: "INFJ",
    title: "Advocate",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D6ECE2",
    image: "/advocate.png",
  },
  {
    code: "INFP",
    title: "Mediator",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D6ECE2",
    image: "/mediator.png",
  },
  {
    code: "ENFP",
    title: "Campaigner",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D6ECE2",
    image: "/campaigner.png",
  },
  {
    code: "ENFJ",
    title: "Protagonist",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#D6ECE2",
    image: "/protagonist.png",
  },
  {
    code: "INTJ",
    title: "Architect",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#E7DFEA",
    image: "/architect.png",
  },
  {
    code: "INTP",
    title: "Thinker",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#E7DFEA",
    image: "/thinker.png",
  },
  {
    code: "ENTP",
    title: "Debater",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#E7DFEA",
    image: "/debater.png",
  },
  {
    code: "ENTJ",
    title: "Commander",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    color: "#E7DFEA",
    image: "/commander.png",
  },
];

const tabs = [
  { name: "Personality", href: "#personality" },
  { name: "Characteristics", href: "#characteristics" },
  { name: "Strengths/ Weaknesses", href: "#strengths-weaknesses" },
  { name: "Work Style", href: "#work-style" },
  { name: "Preferences", href: "#preferences" },
  { name: "Interpersonal Interaction", href: "#interpersonal-interaction" },
  { name: "Work Culture", href: "#work-culture" },
  { name: "Roles", href: "#roles" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Famous Personalities", href: "#famous-personalities" },
  { name: "Recommendations", href: "#recommendations" },
];

export { dichotomies, reportTopics, personalityTypes, tabs };
