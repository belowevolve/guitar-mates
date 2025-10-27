import dynamic from "next/dynamic";

const NoSsrComponent = ({ children }: { children: React.ReactNode }) =>
  children;

export const NoSsr = dynamic(() => Promise.resolve(NoSsrComponent), {
  ssr: false,
});
