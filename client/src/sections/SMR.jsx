import { motion } from "framer-motion";
import { smrProjects } from "../data/projects";
import { BeforeAfterCard } from "./components/BeforeAfterCard";

export function SMR() {
  return (
    <section className="section section-contrast" id="smr">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Строительно-монтажные работы
        </motion.h2>

        {/* Responsive grid */}
        <div className="gallery">
          {smrProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <BeforeAfterCard project={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
