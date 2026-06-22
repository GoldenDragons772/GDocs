import React from 'react';
import './EditButton.css';

interface EditButtonProps {
  /** The source file path relative to the docs folder, e.g. "mechanical/cad/basics.md" */
  sourcePath: string;
}

/**
 * Converts a doc source path into a Decap CMS admin deep-link.
 * Decap CMS uses the file path (without extension) as the entry slug,
 * with "/" replaced by "~" for nested folder collections.
 *
 * Example: "mechanical/cad/basics.md" → "/admin/#/collections/docs/entries/mechanical/cad/basics"
 */
function getCmsEditUrl(sourcePath: string): string {
  // Remove the .md or .mdx extension
  const slug = sourcePath.replace(/\.(mdx?|md)$/, '');
  return `/admin/#/collections/docs/entries/${slug}`;
}

export default function EditButton({ sourcePath }: EditButtonProps): React.ReactElement {
  const editUrl = getCmsEditUrl(sourcePath);

  return (
    <a
      href={editUrl}
      className="edit-button"
      title="Edit this page"
      aria-label="Edit this page in CMS"
      target="_self"
      id="doc-edit-button"
    >
      <svg
        className="edit-button__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
      <span className="edit-button__label">Edit</span>
    </a>
  );
}
