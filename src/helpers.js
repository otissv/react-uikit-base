'use strict';
import {
  cleanAll,
  maybeIf,
  cleanObj
} from 'ufunc';
import { utilityCss } from './utility';


export const breakpoints = () => {
  const media = {
    small : 767,
    medium: 768,
    large : 960,
    xlarge: 1200
  };

  const screen = {
    small : (window.innerWidth <= media.small),
    medium: (window.innerWidth >= media.medium && window.innerWidth < media.large),
    large : (window.innerWidth >= media.large && window.innerWidth < media.xlarge),
    xlarge: (window.innerWidth >= media.xlarge)
  };

  return {
    media,
    screen
  };

};


export const cleanClasses = (c) => {
  const str = cleanAll(c).join(' ').trim().replace(/,/gi, ' ');
  return maybeIf(str)(str !== '');
};


export const cleanProps = (ignoreKeys) => {
  const ignore = [
    ...ignoreKeys,
    ...Object.keys(utilityCss),
    'animate',
    'center',
    'children',
    'classes',
    'contrast',
    'col',
    'colLarge',
    'colMedium',
    'colSmall',
    'kitid',
    'list'
  ];

  return (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj)) return null;

    const newObj = {...obj};

    for (let i = 0; i < ignore.length; i++) {
      if (obj[ignore[i]]) {
        newObj[ignore[i]] = null;
      }
    }

    return cleanObj(newObj);
  };
};


export const closeClass = (alt) => {
  return alt ? 'uk-close-alt' : ' uk-close';
};


export const colSpan = [
  '1-1',
  '1-2',
  '1-3', '2-3',
  '1-4', '2-4', '3-4',
  '1-5', '2-5', '3-5', '4-5',
  '1-6', '2-6', '3-6', '4-6', '5-6',
  '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'
];


export const stringToClasses = (str, cssClasses) => {
  let classes = str.split(' ').map(item => {
    return cssClasses[item];
  });

  return classes.join(' ');
};


export const getClasses = (str, cssClasses) => {
  return typeof str === 'string' ? stringToClasses(str, cssClasses) : '';
};


export const getClass = (str, cssClasses) => {
  return cssClasses[str] ? cssClasses[str] : '';
};


export const queryData = (value) => {
  return document.querySelector(`[data-${value}]`);
};


export const queryDataAll = (value) => {
  return document.querySelectorAll(`[data-${value}]`);
};

export const getElement = (dataId) => {
  return queryData(`kitid="${dataId}"`);
};


export default {
  breakpoints,
  closeClass,
  colSpan,
  cleanClasses,
  cleanProps,
  getClasses,
  getClass,
  getElement,
  stringToClasses,
  queryData,
  queryDataAll
};
