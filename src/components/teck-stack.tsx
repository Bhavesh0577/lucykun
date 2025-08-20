import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { TECH_STACK } from "@/lib/tech-stack";

export function TeckStack() {
  return (
    <section className='pb-24 pt-20'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title mb-10'>Stack</h1>

        <ul className="flex flex-wrap gap-3 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={`https://ccimageapi.netlify.app/images/${tech.key}-light.svg`}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={`https://ccimageapi.netlify.app/images/${tech.key}-dark.svg`}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={`https://ccimageapi.netlify.app/images/${tech.key}.svg`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
