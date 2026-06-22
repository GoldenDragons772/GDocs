/**
 * Swizzled DocItem/Layout component.
 * Adds an inline "Edit" button (pencil icon) that links to the Decap CMS
 * editor for the current page. Publishing from CMS auto-creates a Git commit.
 *
 * Based on @docusaurus/theme-classic DocItem/Layout.
 */
import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import EditButton from '@site/src/components/EditButton/EditButton';
import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

/**
 * Extracts the source file path relative to the docs folder from metadata.
 * Docusaurus metadata.source includes a prefix like "@site/docs/",
 * so we strip it to get the raw file path.
 */
function getDocSourcePath(metadata: {source: string}): string {
  // metadata.source is something like "@site/docs/mechanical/cad/basics.md"
  const prefix = '@site/docs/';
  if (metadata.source.startsWith(prefix)) {
    return metadata.source.slice(prefix.length);
  }
  // Fallback: try to extract after "docs/"
  const docsIndex = metadata.source.indexOf('docs/');
  if (docsIndex !== -1) {
    return metadata.source.slice(docsIndex + 5);
  }
  return metadata.source;
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  const sourcePath = getDocSourcePath(metadata);

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {/* Edit Button — top-right of doc content */}
            <div className="edit-button-wrapper">
              <EditButton sourcePath={sourcePath} />
            </div>
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
