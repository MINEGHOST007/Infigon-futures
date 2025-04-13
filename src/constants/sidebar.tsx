interface Subroute {
  name: string;
  path?: string;
}

export interface SideBarItem {
  key: string;
  title: string;
  icon: string;
  color: string;
  subheading: string;
  subroutes: Subroute[];
}

export const sideBarItems: SideBarItem[] = [
  {
    key: "test1",
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
    key: "test2",
    title: "TEST 2",
    icon: "/diamond.png",
    subheading: "Interest Explorer",
    color: "#309759",
    subroutes: [
      {
        name: "Understanding Interest Explorer",
        path: "/your-report/test2",
      },
      {
        name: "RIASEC Model",
        path: "/your-report/test2/riasec",
      },
      {
        name: "Your Result",
        path: "/your-report/test2/result",
      },
    ],
  },
  {
    key: "test3",
    title: "TEST 3",
    icon: "/office.png",
    subheading: "Career Motivators",
    color: "#FF9706",
    subroutes: [
      {
        name: "Understanding Career Motivators",
        path: "/your-report/test3",
      },
      {
        name: "10 Career Motivators",
        path: "/your-report/test3/motivators",
      },
      {
        name: "Your Result",
        path: "/your-report/test3/result",
      },
    ],
  },
  {
    key: "test4",
    title: "TEST 4",
    icon: "/head.png",
    subheading: "Emotional Intelligence",
    color: "#398BFF",
    subroutes: [
      {
        name: "Understanding Emotional Intelligence",
        path: "/your-report/test4",
      },
      {
        name: "Daniel Goleman Emotional Intelligence Test",
        path: "/your-report/test4/goleman",
      },
      {
        name: "Your Result",
        path: "/your-report/test4/result",
      },
    ],
  },
  {
    key: "test5",
    title: "TEST 5",
    icon: "/puzzle.png",
    subheading: "Learning Styles",
    color: "#DE5AFF",
    subroutes: [
      {
        name: "Understanding Learning Styles",
        path: "/your-report/test5",
      },
      {
        name: "Your Result",
        path: "/your-report/test5/result",
      },
    ],
  },
];
