interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-sm font-medium text-muted-foreground">({children})</p>
  );
}
