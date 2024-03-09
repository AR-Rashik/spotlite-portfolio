"use client";
import React, { useContext } from "react";
import Container from "./Container";
import { ArticleWithSlug } from "@/lib/article";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/providers";
import { BsArrowLeftCircle } from "react-icons/bs";
import { formatDate } from "@/lib/formateDate";
import { Prose } from "./Prose";

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ArticleLayout = ({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) => {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);
  return (
    <Container className="w-full">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-teal-800/5 ring-1 ring-teal-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-teal-700/50 dark:bg-teal-800 dark:ring-0 dark:ring-white/10 dark:hover:border-teal-700 dark:hover:ring-white/20"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-teal-500 transition group-hover:stroke-teal-700 dark:stroke-teal-500 dark:group-hover:stroke-teal-400" />
              </button>
            )}
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-primaryDarkText">
                {article.title}
              </h1>

              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-500 dark:text-tertiaryDarkText"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:text-tertiaryDarkText" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default ArticleLayout;
