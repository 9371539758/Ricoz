import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const quote = '“The right support can change everything. Ricoz gave us the foundation to build and grow with confidence.”';

function QuoteCharacter({ character, index, progress }) {
  const start = Math.max(0, (index - 2) / quote.length);
  const end = Math.min(1, (index + 4) / quote.length);
  const opacity = useTransform(progress, [start, end], [0.58, 1]);
  const color = useTransform(progress, [start, end], ['#cbd5e1', '#0f172a']);

  return (
    <motion.span aria-hidden="true" style={{ opacity, color }}>
      {character}
    </motion.span>
  );
}

export default function Testimonial() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.92', 'end 0.35'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <div className="container">
        <motion.p className="testimonial-quote" aria-label={quote}>
          {Array.from(quote, (character, index) => (
            <QuoteCharacter
              key={`${character}-${index}`}
              character={character}
              index={index}
              progress={smoothProgress}
            />
          ))}
        </motion.p>
        <motion.div
          className="testimonial-person"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="testimonial-avatar" aria-hidden="true">👤</div>
          <div className="testimonial-name">Franchise Partner</div>
          <div className="testimonial-role">Ricoz Network</div>
        </motion.div>
      </div>
    </section>
  );
}