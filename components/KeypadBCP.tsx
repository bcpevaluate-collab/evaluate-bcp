// components/KeypadBCP.tsx
"use client";

import { useEffect, useMemo } from "react";

type Props = {
  onDigit: (n: number) => void;
  onClear: () => void;      // trash
  onBackspace: () => void;  // backspace
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
  // layout: 3 x 4 (10 dígitos + trash + backspace). Orden como el original.
  const cells = useMemo(() => {
    const digits = shuffle([0,1,2,3,4,5,6,7,8,9]);
    return [
      digits[0], digits[1], digits[2],
      digits[3], digits[4], digits[5],
      digits[6], digits[7], digits[8],
      digits[9], "trash" as const, "back" as const
    ];
  }, []);

  // puntitos “pixel” como en el DOM original
  const px = () => ({
    marginTop: `${8 + Math.floor(Math.random()*32)}px`,
    marginLeft: `${10 + Math.floor(Math.random()*80)}%`,
  });

  useEffect(() => {
    // sin efectos laterales, solo por si luego quieres animar
  }, []);

  return (
    <div className={`keyboard-box ${className ?? ""}`}>
      <bcp-keyboard class="bcp-keyboard-host hydrated">
        <div className="keyboard-container">
          <div className="keyboard-body">
            {cells.map((cell, i) => {
              if (cell === "trash") {
                return (
                  <bcp-keyboard-key class="bcp-keyboard-key-host hydrated" key={"trash"} icon="trash-b">
                    <div className="icon-key" onClick={onClear}>
                      <bcp-icon class="bcp-icon-host hydrated" name="trash-b">
                        <svg width="18" height="18" viewBox="0 0 24 24" className="icon trash-b" aria-hidden>
                          <path d="M3 6h18M8 6V4h8v2m-1 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9m4 3v6m4-6v6"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="bcp-ffw-sr-only">Vaciar</span>
                      </bcp-icon>
                    </div>
                  </bcp-keyboard-key>
                );
              }
              if (cell === "back") {
                return (
                  <bcp-keyboard-key class="bcp-keyboard-key-host hydrated" key={"back"} icon="backspace-b">
                    <div className="icon-key" onClick={onBackspace}>
                      <bcp-icon class="bcp-icon-host hydrated" name="backspace-b">
                        <svg width="18" height="18" viewBox="0 0 24 24" className="icon backspace-b" aria-hidden>
                          <path d="M6 12l4-4m-4 4l4 4M21 6H9L3 12l6 6h12"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="bcp-ffw-sr-only">Borrar</span>
                      </bcp-icon>
                    </div>
                  </bcp-keyboard-key>
                );
              }
              // dígito
              return (
                <bcp-keyboard-key class="bcp-keyboard-key-host hydrated" index={i+1} key={i}>
                  <div className="digit-key" onClick={() => onDigit(Number(cell))}>
                    <span className="pixel" style={px()} />
                    <span className="pixel" style={px()} />
                    <span className="pixel" style={px()} />
                    <bcp-title class="bcp-title-host hydrated">
                      <h3 className="bcp-font-demi onsurface-800 title-sm">{cell}</h3>
                    </bcp-title>
                  </div>
                </bcp-keyboard-key>
              );
            })}
          </div>
        </div>
      </bcp-keyboard>
    </div>
  );
}
