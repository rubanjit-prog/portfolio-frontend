import { motion } from "framer-motion";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl text-center"
            >
                <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
                    Software Engineer
                </p>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Crafting <span className="text-blue-500">scalable</span>, modern
                    <br /> web applications
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    I build high-performance web apps with React, Node.js, and modern
                    architectures focused on real-world impact . Future AIML Engineer
                </p>

                <div className="flex justify-center gap-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/projects"
                        className="px-6 py-3 rounded-lg bg-blue-500 text-black font-semibold"
                    >
                        View Projects
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="px-6 py-3 rounded-lg border border-white/20"
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
