import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setStatus("success");
            e.target.reset();
        } catch (err) {
            setStatus(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen px-6 py-24 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-2xl"
            >
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Get in Touch
                </h1>

                <p className="text-gray-400 text-center mb-10">
                    Have a project, idea, or opportunity?
                    Let’s connect and build something meaningful.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                    <div>
                        <label className="block text-sm mb-2 text-gray-300">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 text-gray-300">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 text-gray-300">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-blue-500 text-black font-semibold disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>

                {status === "success" && (
                    <p className="text-green-400 text-center mt-4">
                        Message sent successfully 🚀
                    </p>
                )}

                {status && status !== "success" && (
                    <p className="text-red-400 text-center mt-4">
                        {status}
                    </p>
                )}

                {/* Social Links */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">Or find me here</p>

                    <div className="flex justify-center gap-6">
                        <SocialLink
                            href="https://github.com/rubanjit-prog"
                            icon={<Github size={22} />}
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/rubanorg"
                            icon={<Linkedin size={22} />}
                            label="LinkedIn"
                        />
                        <SocialLink
                            href="mailto:rubanedits37@gmail.com"
                            icon={<Mail size={22} />}
                            label="Email"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

/* Reusable Social Link Component */
function SocialLink({ href, icon, label }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-blue-400 transition"
        >
            {icon}
            <span className="text-sm">{label}</span>
        </motion.a>
    );
}
