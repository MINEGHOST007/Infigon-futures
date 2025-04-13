interface Subroute {
  name: string;
  path?: string;
}

export interface SideBarItem {
  title: string;
  icon: string;
  color: string;
  subheading: string;
  subroutes: Subroute[];
}

export const sideBarItems: SideBarItem[] = [
  {
    title: "TEST 1",
    icon: "/brain.png",
    color: "#0047AB",
    subheading: "Personality Explorer",
    subroutes: [
      {
        name: "Understanding Personality Explorer",
        path: "/your-report/test1",
      },
      {
        name: "Personality Types",
        path: "/your-report/test1/types",
      },
      {
        name: "Your Result",
        path: "/your-report/test1/result",
      },
    ],
  },
  {
    title: "TEST 2",
    icon: "/diamond.png",
    subheading: "Interest Explorer",
    color: "#309759",
    subroutes: [
      {
        name: "Understanding Personality Explorer",
      },
      {
        name: "Personality Types",
      },
      {
        name: "Your Result",
      },
    ],
  },
  {
    title: "TEST 3",
    icon: "/office.png",
    subheading: "Career Motivators",
    color: "#FF9706",
    subroutes: [
      {
        name: "Understanding Personality Explorer",
      },
      {
        name: "Personality Types",
      },
      {
        name: "Your Result",
      },
    ],
  },
  {
    title: "TEST 4",
    icon: "/head.png",
    subheading: "Emotional Intelligence",
    color: "#398BFF",
    subroutes: [
      {
        name: "Understanding Personality Explorer",
      },
      {
        name: "Personality Types",
      },
      {
        name: "Your Result",
      },
    ],
  },
  {
    title: "TEST 5",
    icon: "/puzzle.png",
    subheading: "Learning Styles",
    color: "#DE5AFF",
    subroutes: [
      {
        name: "Understanding Personality Explorer",
      },
      {
        name: "Personality Types",
      },
      {
        name: "Your Result",
      },
    ],
  },
];
