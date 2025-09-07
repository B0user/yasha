import { motion } from 'framer-motion';
import { FaDraftingCompass, FaTools, FaHardHat, FaClipboardCheck } from 'react-icons/fa';

const services = [
	{
		icon: <FaDraftingCompass size={28} />,
		title: 'Проектная документация',
		text: 'Архитектурные, конструктивные, инженерные решения',
	},
	{
		icon: <FaHardHat size={28} />,
		title: 'Строительно-монтажные работы',
		text: 'Фасады, светопрозрачные конструкции, отделочные работы, ремонт кровель, работы по внутренним инженерным сетям',
	},
	{
		icon: <FaTools size={28} />,
		title: 'Разработка КМ и КМД',
		text: 'Металлоконструкции, светопрозрачные конструкции',
	},
	{
		icon: <FaClipboardCheck size={28} />,
		title: 'Авторский надзор',
		text: 'Контроль соответствия проекту и стандартам',
	},
];

const sectionLinks = ['projects', 'smr', null, null];

export function Services() {
	return (
		<section className="section section-contrast" id="services">
			<div className="container">
				<motion.h2
					className="section-title"
					initial={{ y: 12, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					Наши услуги
				</motion.h2>
				<div className="cards">
					{services.map((s, idx) => (
						<motion.div
							key={s.title}
							className="card"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.05 }}
							style={{ cursor: sectionLinks[idx] ? 'pointer' : 'default' }}
							onClick={() => {
								const sectionId = sectionLinks[idx];
								if (sectionId) {
									const el = document.getElementById(sectionId);
									if (el) el.scrollIntoView({ behavior: 'smooth' });
								}
							}}
						>
							<div style={{ color: 'var(--color-accent)' }}>{s.icon}</div>
							<div className="card-title">{s.title}</div>
							<div className="muted">{s.text}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


