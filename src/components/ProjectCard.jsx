import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-xl border border-white/10 p-6 bg-black/40"
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-white/10"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
