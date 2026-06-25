import React, { useEffect, useState } from "react";
import {
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Terminal,
  FileText,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [pages, setPages] = useState([]);

  // Vite glob to import all markdown files as raw text (use query raw)
  const modules = import.meta.glob("../doc_quijon/*.md", {
    query: "?raw",
    import: "default",
  });

  useEffect(() => {
    const load = async () => {
      const entries = Object.entries(modules);
      const files = await Promise.all(
        entries.map(async ([path, resolver]) => {
          const raw = await resolver();
          const name = path.split("/").pop().replace(".md", "");
          const match = raw.match(/^#\s+(.+)$/m);
          const title = match ? match[1].trim() : name;
          return { id: name, title, content: raw };
        }),
      );
      // sort files by filename for consistent order
      files.sort((a, b) =>
        a.id.localeCompare(b.id, undefined, { numeric: true }),
      );
      setPages(files);
      if (!activeTab && files.length) setActiveTab(files[0].id);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIcon = (id) => {
    if (id.includes("active")) return Database;
    if (id.includes("instal") || id.includes("install")) return Server;
    if (id.includes("gpo")) return ShieldCheck;
    if (id.includes("promp") || id.includes("prompt")) return Terminal;
    if (id.includes("serv")) return Cloud;
    return FileText;
  };

  const current = pages.find((p) => p.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-950 text-slate-200 font-sans antialiased">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-900/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-600 to-fuchsia-500 shadow-[0_0_18px_rgba(217,70,239,0.12)] flex items-center justify-center">
            <span className="text-black font-bold">Q</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-white">
              Wiki Quijon
            </h1>
            <p className="text-xs font-mono text-cyan-400/60">
              Interfaz técnica — Dark Cyberpunk
            </p>
          </div>
        </div>
        <div className="text-sm font-mono text-cyan-400/70">md viewer</div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-[260px_1fr] gap-6">
          <aside className="h-[calc(100vh-96px)] sticky top-6 rounded-xl border border-gray-800/60 bg-black/20 p-4 backdrop-blur-sm">
            <nav className="flex flex-col gap-3">
              {pages.map((p) => {
                const Icon = getIcon(p.id);
                const isActive = activeTab === p.id;
                const base =
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300";
                const inactive =
                  "text-cyan-700 border-gray-800 bg-transparent hover:bg-white/2 hover:text-cyan-300";
                const active =
                  "text-cyan-300 border-cyan-400 bg-cyan-900/20 shadow-[inset_0_0_10px_rgba(6,182,212,0.25),_0_0_20px_rgba(6,182,212,0.35)]";
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`${base} ${isActive ? active : inactive} flex items-center`}
                    aria-pressed={isActive}
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-md bg-transparent">
                      <Icon
                        className={`w-5 h-5 ${isActive ? "text-cyan-300" : "text-cyan-700"}`}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div
                        className={`font-medium ${isActive ? "text-cyan-100" : "text-cyan-700"}`}
                      >
                        {p.title}
                      </div>
                      <div className="text-xs font-mono text-gray-500/60">
                        /{p.id}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="rounded-xl border-2 border-gray-800 p-6 bg-slate-900/40 backdrop-blur-sm relative overflow-hidden">
            <header className="mb-6">
              <h2 className="text-3xl font-extrabold text-fuchsia-500 drop-shadow-[0_0_18px_rgba(217,70,239,0.85)]">
                {current ? current.title : "Cargando..."}
              </h2>
              <p className="mt-1 text-sm font-mono text-cyan-300/60">
                Contenido de {current ? current.id : "..."}
              </p>
            </header>

            <article className="min-h-[420px] rounded-lg border border-gray-800/50 p-6 bg-slate-900/30 shadow-[0_10px_30px_rgba(2,6,23,0.6)] prose prose-invert max-w-none">
              {current ? (
                <ReactMarkdown>{current.content}</ReactMarkdown>
              ) : (
                <div className="text-cyan-400">
                  Cargando contenido markdown...
                </div>
              )}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
