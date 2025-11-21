export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}
// interface/index.ts

export interface HomePageProps {
  title: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
