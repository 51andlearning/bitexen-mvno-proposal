export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight">
          Bitexen MVNO
        </span>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#summary" className="text-muted-foreground hover:text-foreground">Summary</a>
          <a href="#fintech" className="text-muted-foreground hover:text-foreground">Fintech</a>
          <a href="#product" className="text-muted-foreground hover:text-foreground">Product</a>
          <a href="#commercial" className="text-muted-foreground hover:text-foreground">Commercial</a>
          <a href="#roadmap" className="text-muted-foreground hover:text-foreground">Roadmap</a>
          <a href="#next-steps" className="text-muted-foreground hover:text-foreground">Next Steps</a>
        </nav>
      </div>
    </header>
  );
}
