import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Portfolio Platform",
        description: "A global-level personal portfolio built with React and Tailwind.",
        tech: ["React", "Tailwind", "Vite"]
    },
    {
        title: "REST API Server",
        description: "Secure backend API using Node, Express, and MongoDB.",
        tech: ["Node.js", "Express", "MongoDB"]
    }
];

export default function Projects() {
    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
