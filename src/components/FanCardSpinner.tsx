import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardsData = [
  { 
    priority: 'alta', color: 'bg-red-700', border: 'border-red-500', 
    title: 'PREPARAR CV', desc: 'Actualizar experiencia y stack para aplicar a nuevas vacantes.', text: 'Prioridad Máxima' 
  },
  { 
    priority: 'alta', color: 'bg-red-600', border: 'border-red-400', 
    title: 'PROYECTO DE GRADO', desc: 'Empezar el borrador final y definir la arquitectura.', text: 'Urgente' 
  },
  { 
    priority: 'normal', color: 'bg-orange-600', border: 'border-orange-500', 
    title: 'CENA FAMILIAR', desc: 'Agendar cita y confirmar asistencia para la próxima semana.', text: 'Importante' 
  },
  { 
    priority: 'normal', color: 'bg-orange-700', border: 'border-orange-600', 
    title: 'REVISIÓN DE CORREO', desc: 'Limpiar bandeja de entrada y responder pendientes.', text: 'Pendiente' 
  },
  { 
    priority: 'baja', color: 'bg-amber-700', border: 'border-amber-600', 
    title: 'ACTUALIZAR DOCS', desc: 'Organizar los archivos del semestre en la nube.', text: 'Cuando se pueda' 
  },
];

export default function FanCardSpinner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<'orbiting' | 'presenting'>('orbiting');
  
  const numCards = cardsData.length;
  const anglePerCard = 360 / numCards;
  const radius = 180;

  useEffect(() => {
    let isMounted = true;

    const runLoop = async () => {
      while (isMounted) {
        setPhase('presenting');
        await new Promise(r => setTimeout(r, 4500)); 
        if (!isMounted) break;

        setPhase('orbiting');
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;

        setActiveIndex((prev) => (prev + 1) % numCards);
      }
    };

    runLoop();
    return () => { isMounted = false; };
  }, [numCards]);

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative w-full h-full flex items-center justify-center">
        {cardsData.map((card, index) => {
          const cardAngle = index * anglePerCard;
          const isSelected = index === activeIndex;
          const isPresenting = isSelected && phase === 'presenting';

          return (
            <motion.div
              key={index}
              className="absolute"
              animate={{ 
                x: isPresenting ? 0 : Math.cos((cardAngle * Math.PI) / 180) * radius,
                y: isPresenting ? 0 : Math.sin((cardAngle * Math.PI) / 180) * radius,
                zIndex: isPresenting ? 100 : 10,
              }}
              transition={{ type: "spring", stiffness: 35, damping: 15 }}
            >
              <motion.div
                animate={isPresenting ? {
                  rotate: 0,
                  scale: 1.8,
                  filter: "brightness(1.2) blur(0px)",
                  opacity: 1
                } : {
                  rotate: [0, 360],
                  scale: 0.8,
                  filter: "brightness(0.6) blur(2.5px)",
                  opacity: 0.5
                }}
                transition={isPresenting ? {
                  rotate: { duration: 0.8 },
                  scale: { duration: 0.8 }
                } : {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  filter: { duration: 1 }
                }}
                className={`w-48 h-32 ${card.color} ${card.border} border-2 rounded-2xl p-4 flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden text-white`}
              >
                {/*Prioridad por Color */}
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white shadow-[0_0_8px_white]' : 'bg-white/30'}`} />
                    <span className="text-[9px] font-bold uppercase tracking-tighter opacity-90">{card.text}</span>
                  </div>
                  <h3 className={`font-black leading-tight uppercase ${isPresenting ? 'text-[13px]' : 'text-[11px]'} transition-all tracking-tight`}>
                    {card.title}
                  </h3>
                </div>
                
                {/* Contenido*/}
                <div className="relative z-10 mt-2">
                  <p className={`text-[8px] leading-snug font-medium italic ${isPresenting ? 'block' : 'hidden'}`}>
                    "{card.desc}"
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="h-[3px] w-full bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-white/70" 
                          initial={{ width: 0 }}
                          animate={isPresenting ? { width: '100%' } : { width: 0 }}
                          transition={{ duration: 4.5, ease: "linear" }}
                        />
                    </div>
                  </div>
                </div>

                {/* Brillo de la carta seleccionada*/}
                {isPresenting && (
                  <motion.div 
                    initial={{ x: '-150%' }}
                    animate={{ x: '150%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}