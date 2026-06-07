import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/Logo';
import GDocsLogo from '@site/src/components/GDocsLogo';

export default function Logo(props: Props): ReactNode {
  const {
    navbar: {logo},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}
      style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <GDocsLogo className={imageClassName} style={{ fontSize: '2rem', height: '100%', marginRight: '0.5rem' }} />
    </Link>
  );
}
