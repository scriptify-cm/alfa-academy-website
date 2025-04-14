import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALFA Academy - Transcendez votre situation",
  description: "ALFA Academy est une organisation spécialisée dans la formation entrepreneuriale au Cameroun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
