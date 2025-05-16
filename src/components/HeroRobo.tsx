'use client';

import React, { Suspense, lazy, useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Função cn direto no componente
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// Lazy load Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

// Definição do tipo das props do Spotlight
type SpotlightProps = {
    className?: string;
    size?: number;
    springOptions?: SpringOptions;
    fill?: string; // Adicionando a propriedade fill aqui
  };
  
  // Componente Spotlight
  export function Spotlight({
    className,
    size = 200,
    springOptions = { bounce: 0 },
    fill, // Incluindo fill nas props do componente
  }: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  
    const mouseX = useSpring(0, springOptions);
    const mouseY = useSpring(0, springOptions);
  
    const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
    const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);
  
    useEffect(() => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          parent.style.position = 'relative';
          parent.style.overflow = 'hidden';
          setParentElement(parent);
        }
      }
    }, []);
  
    const handleMouseMove = useCallback(
      (event: MouseEvent) => {
        if (!parentElement) return;
        const { left, top } = parentElement.getBoundingClientRect();
        mouseX.set(event.clientX - left);
        mouseY.set(event.clientY - top);
      },
      [mouseX, mouseY, parentElement]
    );
  
    useEffect(() => {
      if (!parentElement) return;
  
      parentElement.addEventListener('mousemove', handleMouseMove);
      parentElement.addEventListener('mouseenter', () => setIsHovered(true));
      parentElement.addEventListener('mouseleave', () => setIsHovered(false));
  
      return () => {
        parentElement.removeEventListener('mousemove', handleMouseMove);
        parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
        parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
      };
    }, [parentElement, handleMouseMove]);
  
    return (
      <motion.div
        ref={containerRef}
        className={cn(
          'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
          'from-zinc-50 via-zinc-100 to-zinc-200',
          isHovered ? 'opacity-100' : 'opacity-0',
          className
        )}
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          backgroundColor: fill, // Aplicando a cor do fill aqui, se necessário
        }}
      />
    );
}  

// SplineScene Component
interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}

// Card Component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export function Hero2() {
  return (
    <Card className="w-full h-auto bg-black/[0.96] relative overflow-hidden bg-[#0B2447] border-none pt-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        size={100}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row h-full">
        {/* Texto movido mais para a direita */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="text-left max-w-2xl ml-auto">
            <h2 className="relative text-2xl md:text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
              <span className="block mb-2">We are the partner for brands looking to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A5D7E8] to-[#576CBC]">
                dive deep in their digital ventures
              </span>
            </h2>
            <p className="mt-4 text-neutral-300 text-lg leading-8">
              Our clients value clear communication, trust, and a bold vision.
              We collaborate with ambitious companies of all sizes, ready to push boundaries and achieve digital success.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#5AB9E5] px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </a>
          </div>
        </div>

        {/* Robô - Mantido sem alterações */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
