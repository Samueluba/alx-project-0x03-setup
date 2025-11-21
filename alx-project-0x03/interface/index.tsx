export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}

// interface/index.ts

export interface HomePageProps {
  title: string;
}
// interface/index.ts

export interface ButtonProps {
  label: string;
  onClick: () => void;
}
