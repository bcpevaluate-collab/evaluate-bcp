// components/KeypadBCP.tsx  (solo muestro el componente completo por claridad)
"use client";

import { useMemo } from "react";

type Props = {
  onDigit: (n: number) => void;
  onClear: () => void;
  onBackspace: () => void;
  className?: string;
};

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function KeypadBCP({ onDigit, onClear, onBackspace, className }: Props) {
  const cells = useMemo(() => {
    const digits = shuffle([0,1,2,3,4,5,6,7,8,9]);
    // fila final: 🗑 | número | ✕
    return [
      digits[0], digits[1], digits[2],
      digits[3], digits[4], digits[5],
      digits[6], digits[7], digits[8],
      "trash" as const, digits[9], "back" as const,
    ];
  }, []);

  // 👇 ahora posición absoluta real
  const px = () => ({
    top:  `${6 + Math.floor(Math.random() * 40)}px`,
    left: `${10 + Math.floor(Math.random() * 70)}%`,
  });

  return (
    <div className={`keyboard-box ${className ?? ""}`}>
      <div className="bcp-keyboard-host hydrated" data-el="bcp-keyboard">
        <div className="keyboard-container">
          <div className="keyboard-body">
            {cells.map((cell, i) => {
              if (cell === "trash") {
                return (
                  <div className="bcp-keyboard-key-host hydrated" key="trash" data-icon="trash-b">
                    <button type="button" onClick={onClear} className="icon-key w-full" aria-label="Vaciar">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="icon trash-b" aria-hidden>
                        <path d="M3 6h18M8 6V4h8v2m-1 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9m4 3v6m4-6v6"
                              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="bcp-ffw-sr-only">Vaciar</span>
                    </button>
                  </div>
                );
              }
              if (cell === "back") {
                return (
                  <div className="bcp-keyboard-key-host hydrated" key="back" data-icon="backspace-b">
                    <button type="button" onClick={onBackspace} className="icon-key w-full" aria-label="Cerrar">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="icon backspace-b" aria-hidden>
                        <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span className="bcp-ffw-sr-only">Cerrar</span>
                    </button>
                  </div>
                );
              }
              return (
                <div className="bcp-keyboard-key-host hydrated" key={i} data-index={i + 1}>
                  <button type="button" className="digit-key w-full" onClick={() => onDigit(Number(cell))}>
                    {/* 3 “píxeles” decorativos */}
                    <span className="pixel" style={px()} />
                    <span className="pixel" style={px()} />
                    <span className="pixel" style={px()} />
                    <div className="bcp-title-host hydrated">
                      <h3 className="bcp-font-demi onsurface-800 title-sm">{cell}</h3>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
